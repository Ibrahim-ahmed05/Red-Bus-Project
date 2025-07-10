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

for stop in unique_stops:
    print(f"Fetching: {stop}")
    query = f"{stop}, Karachi"
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
                print(f"No location found for: {stop}")
        else:
            coords[stop] = (None, None)
            print(f"Error {res.status_code} for {stop}")
    except Exception as e:
        coords[stop] = (None,None)
        print(f"Exception for {stop}: {e}")

    time.sleep(1)  # Important to avoid rate limit

# Save results
with open('stop_coordinates.json', 'w') as f:
    json.dump(coords, f, indent=2)
