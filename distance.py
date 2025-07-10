import json
import csv
from math import radians, sin, cos, sqrt, atan2

# Haversine function
def haversine(lat1, lon1, lat2, lon2):
    R = 6371  # km
    dlat = radians(lat2 - lat1)
    dlon = radians(lon2 - lon1)
    a = sin(dlat / 2)**2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    return round(R * c, 2)

# Load your files
with open("routes.json") as f:
    routes = json.load(f)

with open("stop_coordinates.json") as f:
    coords = json.load(f)

# Prepare CSV output
csv_rows = []
for route in routes:
    route_name = route["route_name"]
    stops = route["stops"]

    for i in range(len(stops) - 1):
        stop1 = stops[i]
        stop2 = stops[i + 1]
        lat1, lon1 = coords.get(stop1, [None, None])
        lat2, lon2 = coords.get(stop2, [None, None])

        if None in (lat1, lon1, lat2, lon2):
            print(f"Skipping: {stop1} ➡ {stop2} (missing coords)")
            continue

        distance = haversine(lat1, lon1, lat2, lon2)
        csv_rows.append([route_name, stop1, stop2, distance])

# Write to CSV
with open("route_distances.csv", "w", newline='') as f:
    writer = csv.writer(f)
    writer.writerow(["route_name", "from_stop", "to_stop", "distance_km"])
    writer.writerows(csv_rows)

print("✅ Distances saved to route_distances.csv")
