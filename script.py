import requests, time, json

with open('routes.json', 'r') as f:
    data = json.load(f)

unique_stops = set()
for route in data:
    unique_stops.update(route['stops'])

coords = {}
headers = {
    "User-Agent": "RedBus MVP (iamalik2005@gmail.com)"
}

for i, stop in enumerate(unique_stops):
    clean_stop = stop.strip().replace('(', '').replace(')', '')
    query = f"{clean_stop} Bus Stop, Karachi, Pakistan"
    url = "https://nominatim.openstreetmap.org/search"
    params = {"q": query, "format": "json"}

    try:
        res = requests.get(url, params=params, headers=headers)
        if res.status_code == 200:
            data = res.json()
            if data:
                lat = float(data[0]["lat"])
                lon = float(data[0]["lon"])
                coords[stop] = (lat, lon)
            else:
                coords[stop] = (None, None)
                print(f"❌ No result: {stop}")
                with open("failed_stops.txt", "a") as log:
                    log.write(stop + "\n")
        else:
            coords[stop] = (None, None)
            print(f"❌ Error {res.status_code}: {stop}")
    except Exception as e:
        coords[stop] = (None, None)
        print(f"❌ Exception for {stop}: {e}")

    # Save partial results every 10 queries
    if i % 10 == 0:
        with open("stop_coordinates.json", "w") as f:
            json.dump(coords, f, indent=2)

    time.sleep(1)  # Avoid rate limiting

# Final save
with open("stop_coordinates.json", "w") as f:
    json.dump(coords, f, indent=2)

print("✅ Coordinates fetch complete.")
