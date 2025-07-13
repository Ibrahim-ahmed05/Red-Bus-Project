import { useState, useEffect } from "react";

const busLoaderStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "160px",
  margin: "2em 0 1.5em 0",
};

const busIconStyle = {
  width: "90px",
  height: "60px",
  marginBottom: "0.5em",
  animation: "bus-move 1.2s infinite linear alternate",
  display: "block",
};

const Search = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [stops, setStops] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showBus, setShowBus] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/stops")
      .then((res) => res.json())
      .then((data) => setStops(data));
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setResult(null);
    setError("");
    setShowBus(false);
    try {
      const res = await fetch(`http://localhost:8000/search/${source},${destination}`);
      if (!res.ok) {
        const errData = await res.json();
        setError(errData.detail || "No route found.");
        setLoading(false);
        return;
      }
      const data = await res.json();
      setTimeout(() => {
        setResult(data);
        setShowBus(false);
        setLoading(false);
      }, 2200); // Show bus animation for ~2.2 seconds
      setShowBus(true);
    } catch (err) {
      setError("Failed to fetch route. Please try again later.");
      setLoading(false);
    }
  };

  const RedBusSVG = () => (
    <svg style={busIconStyle} viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="15" width="80" height="30" rx="8" fill="#e10600" stroke="#fff" strokeWidth="2" />
      <rect x="12" y="22" width="18" height="13" rx="3" fill="#fff" fillOpacity="0.85" />
      <rect x="34" y="22" width="18" height="13" rx="3" fill="#fff" fillOpacity="0.85" />
      <rect x="56" y="22" width="18" height="13" rx="3" fill="#fff" fillOpacity="0.85" />
      <circle cx="20" cy="48" r="6" fill="#181818" stroke="#fff" strokeWidth="2" />
      <circle cx="70" cy="48" r="6" fill="#181818" stroke="#fff" strokeWidth="2" />
      <rect x="5" y="35" width="80" height="10" rx="3" fill="#b30000" fillOpacity="0.7" />
    </svg>
  );

  return (
    <section style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "70vh",
      padding: "3em 1em 2em 1em",
      position: "relative",
      zIndex: 1,
    }}>
      <div className="card" style={{
        maxWidth: "600px",
        width: "100%",
        background: "rgba(255,255,255,0.04)",
        border: "1.5px solid var(--primary-red)",
        boxShadow: "0 8px 32px rgba(255,59,63,0.10)",
        borderRadius: "var(--radius)",
        padding: "2.5em 2em 2em 2em",
        textAlign: "center",
        backdropFilter: "blur(1.5px)",
      }}>
        <h2 style={{
          fontSize: "2.3rem",
          fontWeight: 900,
          color: "var(--primary-red)",
          marginBottom: "1.2em",
          letterSpacing: "0.04em",
          textShadow: "0 2px 8px rgba(0,0,0,0.10)",
        }}>
          Search Bus Routes
        </h2>
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={{
            width: "100%",
            padding: "1.1em",
            borderRadius: "var(--radius)",
            border: "1.5px solid var(--primary-red)",
            marginBottom: "1em",
            fontSize: "1.25rem",
            background: "rgba(255,255,255,0.10)",
            color: "var(--black)",
            fontWeight: 700,
            outline: "none",
            boxShadow: "0 2px 8px rgba(225,6,0,0.04)",
            transition: "border-color var(--transition), box-shadow var(--transition)"
          }}
        >
          <option value="">Select Source</option>
          {stops.map((stop) => (
            <option key={stop} value={stop}>{stop}</option>
          ))}
        </select>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{
            width: "100%",
            padding: "1.1em",
            borderRadius: "var(--radius)",
            border: "1.5px solid var(--primary-red)",
            marginBottom: "1.5em",
            fontSize: "1.25rem",
            background: "rgba(255,255,255,0.10)",
            color: "var(--black)",
            fontWeight: 700,
            outline: "none",
            boxShadow: "0 2px 8px rgba(225,6,0,0.04)",
            transition: "border-color var(--transition), box-shadow var(--transition)"
          }}
        >
          <option value="">Select Destination</option>
          {stops.map((stop) => (
            <option key={stop} value={stop}>{stop}</option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          style={{
            width: "100%",
            background: "var(--primary-red)",
            color: "#fff",
            padding: "1.1em 0",
            borderRadius: "var(--radius)",
            fontWeight: 900,
            fontSize: "1.25rem",
            letterSpacing: "0.04em",
            boxShadow: "0 4px 24px rgba(255,59,63,0.10)",
            border: "none",
            marginBottom: "1.5em",
            cursor: "pointer",
            transition: "background var(--transition), color var(--transition), box-shadow var(--transition)"
          }}
          onMouseOver={e => { e.target.style.background = 'var(--white)'; e.target.style.color = 'var(--primary-red)'; }}
          onMouseOut={e => { e.target.style.background = 'var(--primary-red)'; e.target.style.color = '#fff'; }}
        >
          Find Route
        </button>
        {loading && (
          <div style={busLoaderStyle}>
            <RedBusSVG />
            <span style={{ color: "var(--primary-red)", fontWeight: 800, fontSize: "1.25rem", marginTop: "0.5em" }}>Finding the best route...</span>
          </div>
        )}
        {showBus && !loading && (
          <div style={busLoaderStyle}>
            <RedBusSVG />
            <span style={{ color: "var(--primary-red)", fontWeight: 800, fontSize: "1.25rem", marginTop: "0.5em" }}>Your RedBus is arriving...</span>
          </div>
        )}
        {error && !loading && !showBus && (
          <div style={{ color: "var(--primary-red)", fontWeight: 800, fontSize: "1.2rem", margin: "1em 0" }}>{error}</div>
        )}
        {result && !loading && !showBus && !error && (
          <div style={{
            marginTop: "2em",
            background: "#23272f",
            borderRadius: "var(--radius)",
            padding: "2.2em 1.5em 1.5em 1.5em",
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            textAlign: "left",
            border: "2.5px solid var(--primary-red)",
            maxWidth: "100%",
          }}>
            <h3 style={{
              fontSize: "2rem",
              fontWeight: 900,
              color: "var(--primary-red)",
              marginBottom: "0.7em",
              letterSpacing: "0.03em",
              textShadow: "0 2px 8px rgba(0,0,0,0.10)",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              <span style={{ color: "var(--primary-red)", fontWeight: 900 }}>Total Fare:</span>
              <span style={{ color: "#4be37a", fontWeight: 900, marginLeft: "0.5em" }}>Rs. {result.total_fare}</span>
            </h3>
            <div style={{
              fontSize: "1.3rem",
              color: "#f7f7fa",
              fontWeight: 700,
              marginBottom: "1.2em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.7em",
              textAlign: "center"
            }}>
              <h3 style={{ color: "white", display: "block", marginBottom: "0.2em" }}>Full Path:</h3>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.2em" }}>
                {result.path.map((stop, idx) => (
                  <span key={stop} style={{
                    color: "#4be37a",
                    fontWeight: 900,
                    fontSize: "1.3rem",
                    letterSpacing: "0.01em"
                  }}>{stop}{idx !== result.path.length - 1 && <span style={{ color: "var(--primary-red)", fontWeight: 900, fontSize: "1.5rem" }}> ➡ </span>}</span>
                ))}
              </div>
            </div>
            <h2 style={{ color: "white", textAlign: "center" }}>Required Bus Routes:-</h2>
            <ul style={{ margin: 0, paddingLeft: "1.2em", color: "#f7f7fa", fontSize: "1.13rem", fontWeight: 600 }}>
              {result.steps.map((step, index) => (
                <li key={index} style={{ marginBottom: "0.7em", background: "rgba(255,59,63,0.07)", borderRadius: "8px", padding: "0.7em 1em" }}>
                  <span style={{ color: "var(--primary-red)", fontWeight: 800, fontSize: "1.1rem" }}>'{step.route}'</span> from <b style={{ color: "#f7f7fa" }}>{step.from}</b> to <b style={{ color: "#f7f7fa" }}>{step.to}</b> <span style={{ color: "#f7f7fa", fontWeight: 700 }}>({step.distance_km} km)</span> <span style={{ color: "#4be37a", fontWeight: 900, marginLeft: "0.5em" }}>Rs. {step.fare}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section >
  );
};

export default Search;