from fastapi import FastAPI, HTTPException
from collections import defaultdict
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import heapq
import json

app = FastAPI()

# Enable CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load CSV
df = pd.read_csv("route_distances.csv")

# Build graph: { stop: [(neighbor, distance, route)] }
def build_fare_graph(df):
    graph = defaultdict(list)
    for _, row in df.iterrows():
        graph[row["from_stop"]].append((row["to_stop"], row["distance_km"], row["route_name"]))
        graph[row["to_stop"]].append((row["from_stop"], row["distance_km"], row["route_name"]))
    return graph

graph = build_fare_graph(df)

# 🧠 Distance-first A* with fare as tie-breaker
def distance_first_a_star(graph, start, goal):
    # (total_dist, fare, current, current_route, route_dist, path, steps, route_start)
    queue = [(0, 0, start, None, 0, [start], [], start)]
    visited = {}

    while queue:
        total_dist, fare, current, current_route, route_dist, path, steps, route_start = heapq.heappop(queue)
        state = (current, current_route)

        if state in visited and visited[state] <= (total_dist, fare):
            continue
        visited[state] = (total_dist, fare)

        if current == goal:
            if current_route:
                segment_fare = 120 if route_dist > 15 else 80
                steps.append((route_start, current, current_route, route_dist, segment_fare))
                fare += segment_fare
            return total_dist, fare, path, steps

        for neighbor, dist, route in graph[current]:
            new_total_dist = total_dist + dist
            new_path = path + [neighbor]
            new_steps = steps.copy()
            new_route_start = route_start

            if current_route is None:
                new_route = route
                new_route_dist = dist
                new_fare = fare
                new_route_start = current
            elif route == current_route:
                new_route = current_route
                new_route_dist = route_dist + dist
                new_fare = fare
            else:
                segment_fare = 120 if route_dist > 15 else 80
                new_steps.append((route_start, current, current_route, route_dist, segment_fare))
                new_fare = fare + segment_fare
                new_route = route
                new_route_dist = dist
                new_route_start = current

            heapq.heappush(queue, (
                new_total_dist, new_fare, neighbor, new_route, new_route_dist,
                new_path, new_steps, new_route_start
            ))

    return None, None, None, None

# ✅ Search endpoint
@app.get("/search/{source},{destination}")
def get_route(source: str, destination: str):
    if source not in graph or destination not in graph:
        raise HTTPException(status_code=404, detail="Stop not found in dataset")

    total_dist, fare, path, steps = distance_first_a_star(graph, source, destination)

    if not path:
        raise HTTPException(status_code=404, detail="No path found")

    step_data = [
        {
            "from": s,
            "to": e,
            "route": r,
            "distance_km": round(d, 2),
            "fare": f
        }
        for s, e, r, d, f in steps
    ]

    return {
        "total_distance_km": round(total_dist, 2),
        "total_fare": fare,
        "path": path,
        "steps": step_data
    }

# ✅ All stops for dropdowns
@app.get("/stops")
def get_all_stops():
    with open("routes.json", "r") as f:
        routes = json.load(f)

    unique_stops = set()
    for route in routes:
        unique_stops.update(route["stops"])

    return sorted(list(unique_stops))

# ✅ Full route metadata
@app.get("/routes-info")
def get_routes_info():
    with open("routes.json", "r") as f:
        routes = json.load(f)
    return routes
