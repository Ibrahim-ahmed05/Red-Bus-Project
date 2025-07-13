import React, { useEffect, useState } from "react";

const cardBaseStyle = {
    background: "#23272f",
    color: "#fff",
    borderRadius: "var(--radius)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
    padding: "2em 1.5em 1.5em 1.5em",
    border: "2px solid var(--primary-red)",
    transition: "box-shadow 0.22s, transform 0.22s, border 0.22s",
    textAlign: "left",
    width: "100%",
    boxSizing: "border-box",
    cursor: "pointer"
};

const stopStyle = {
    display: "inline-block",
    background: "#181a20",
    color: "#4be37a",
    borderRadius: "8px",
    padding: "0.4em 1em",
    margin: "0.2em 0.3em 0.2em 0",
    fontWeight: 600,
    fontSize: "1.05rem"
};

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2.8em",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1em"
};

const Routes = () => {
    const [routes, setRoutes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [hovered, setHovered] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/routes-info")
            .then((res) => res.json())
            .then((data) => {
                setRoutes(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load routes.");
                setLoading(false);
            });
    }, []);

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
            width: "100%"
        }}>
            <h1 style={{
                color: "var(--primary-red)",
                fontWeight: 900,
                fontSize: "2.2rem",
                marginBottom: "1.5em",
                letterSpacing: "0.04em",
                textAlign: "center"
            }}>
                All Red Bus Routes
            </h1>
            {loading && <div style={{ color: "#fff", fontWeight: 700 }}>Loading routes...</div>}
            {error && <div style={{ color: "var(--primary-red)", fontWeight: 700 }}>{error}</div>}
            {!loading && !error && (
                <div style={gridStyle}>
                    {routes.map((route, idx) => {
                        const isHovered = hovered === idx;
                        const cardStyle = {
                            ...cardBaseStyle,
                            boxShadow: isHovered
                                ? "0 8px 32px rgba(255,59,63,0.18), 0 2px 16px rgba(0,0,0,0.18)"
                                : cardBaseStyle.boxShadow,
                            transform: isHovered ? "translateY(-7px) scale(1.025)" : "none",
                            border: isHovered ? "2.5px solid #ff3b3f" : cardBaseStyle.border
                        };
                        return (
                            <div
                                key={route.route_name + idx}
                                style={cardStyle}
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.7em" }}>
                                    <span style={{ color: "var(--primary-red)", fontWeight: 900 }}>{route.route_name}</span>
                                </h2>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2em" }}>
                                    {route.stops.map((stop, i) => (
                                        <span key={stop + i} style={stopStyle}>{stop}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Routes; 