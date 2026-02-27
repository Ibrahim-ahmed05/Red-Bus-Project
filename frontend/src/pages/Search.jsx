import { useState, useEffect } from "react";

const Search = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [stops, setStops] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
    fetch(`${apiUrl}/stops`)
      .then((res) => res.json())
      .then((data) => setStops(data))
      .catch(() => setError("Could not load stops. Please check if the server is running."));
  }, []);

  const handleSearch = async () => {
    if (!source || !destination) {
      setError("Please select both source and destination.");
      return;
    }
    if (source === destination) {
      setError("Source and destination cannot be the same.");
      return;
    }

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
      const res = await fetch(`${apiUrl}/search/${source},${destination}`);
      if (!res.ok) {
        const errData = await res.json();
        setError(errData.detail || "No route found for this selection.");
        setLoading(false);
        return;
      }
      const data = await res.json();
      // Simulate a small delay for premium feel
      setTimeout(() => {
        setResult(data);
        setLoading(false);
      }, 800);
    } catch (err) {
      setError("Failed to connect to the server. Please ensure the backend is running.");
      setLoading(false);
    }
  };

  return (
    <div className="section-padding animate-fade-in">
      <div className="container" style={{ maxWidth: "700px" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Route <span className="text-gradient">Planner</span></h2>
          <p className="text-muted">Select your starting point and destination to find the best route.</p>
        </div>

        <div className="glass-card">
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Source</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="input-base"
              style={{ appearance: "none" }}
            >
              <option value="">Select starting stop</option>
              {stops.map((stop) => (
                <option key={stop} value={stop} style={{ background: "var(--bg-surface)" }}>{stop}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>Destination</label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="input-base"
              style={{ appearance: "none" }}
            >
              <option value="">Select destination stop</option>
              {stops.map((stop) => (
                <option key={stop} value={stop} style={{ background: "var(--bg-surface)" }}>{stop}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="btn btn-primary"
            style={{ width: "100%", padding: "1rem" }}
            disabled={loading}
          >
            {loading ? "Searching..." : "Find Best Route"}
          </button>

          {error && (
            <div style={{
              marginTop: "1.5rem",
              padding: "1rem",
              background: "rgba(230, 57, 70, 0.1)",
              borderRadius: "var(--radius-md)",
              color: "var(--primary)",
              fontSize: "0.9rem",
              textAlign: "center",
              border: "1px solid rgba(230, 57, 70, 0.2)"
            }}>
              {error}
            </div>
          )}
        </div>

        {loading && (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <div className="spinner" style={{
              width: "40px",
              height: "40px",
              border: "3px solid var(--border-subtle)",
              borderTopColor: "var(--primary)",
              borderRadius: "50%",
              margin: "0 auto 1rem auto",
              animation: "spin 1s linear infinite"
            }} />
            <style>{`
              @keyframes spin { to { transform: rotate(360deg); } }
            `}</style>
            <p className="text-muted">Calculating optimal path...</p>
          </div>
        )}

        {result && !loading && (
          <div className="animate-fade-in" style={{ marginTop: "3rem" }}>
            <div className="glass-card" style={{ borderLeft: "4px solid var(--primary)" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid var(--border-subtle)"
              }}>
                <div>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>Route Found</h3>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>Shortest journey calculated</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--primary)" }}>Rs. {result.total_fare}</div>
                  <p className="text-muted" style={{ fontSize: "0.8rem" }}>Total Estimated Fare</p>
                </div>
              </div>

              <div style={{ marginBottom: "2.5rem" }}>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-muted)" }}>Path Overview</h4>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem"
                }}>
                  {result.path.map((stop, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{
                        padding: "0.5rem 1rem",
                        background: "var(--bg-surface)",
                        borderRadius: "var(--radius-sm)",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        border: "1px solid var(--border-subtle)"
                      }}>
                        {stop}
                      </div>
                      {idx < result.path.length - 1 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-muted)" }}>Journey Steps</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {result.steps.map((step, idx) => (
                    <div key={idx} style={{
                      padding: "1.2rem",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <div>
                        <div style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: "700", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          {step.route}
                        </div>
                        <div style={{ fontWeight: "600" }}>
                          {step.from} <span style={{ color: "var(--text-dim)", margin: "0 0.5rem" }}>to</span> {step.to}
                        </div>
                        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                          Distance: {step.distance_km} km
                        </div>
                      </div>
                      <div style={{ fontSize: "1.1rem", fontWeight: "700", color: "#4be37a" }}>
                        Rs. {step.fare}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
