import json

# Load your stops data
with open("routes.json", "r") as f:
    routes = json.load(f)

with open("stop_coordinates.json", "r") as f:
    coords = json.load(f)

# Get all unique stops used in routes.json
all_route_stops = set()
for route in routes:
    all_route_stops.update(route.get("stops", []))

# Get all stops that have coordinates
stops_with_coords = set(coords.keys())

# Compare and get missing ones
missing_stops = sorted(all_route_stops - stops_with_coords)

# Print and optionally save
print(f"❌ Missing coordinates for {len(missing_stops)} stops:")
for stop in missing_stops:
    print(f"- {stop}")

# Optional: Save to file
with open("missing_stops.txt", "w") as f:
    for stop in missing_stops:
        f.write(stop + "\n")

print("📄 Saved missing stops to missing_stops.txt")
