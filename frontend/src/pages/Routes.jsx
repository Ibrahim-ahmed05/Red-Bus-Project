import React, { useEffect, useState } from "react";

const Routes = () => {
    const [routes, setRoutes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
        fetch(`${apiUrl}/routes-info`)
            .then((res) => res.json())
            .then((data) => {
                setRoutes(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load routes. Please check if the server is running.");
                setLoading(false);
            });
    }, []);

    return (
        <section className="section-padding animate-fade-in">
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                        Red Bus <span className="text-gradient">Routes</span>
                    </h1>
                    <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
                        Explore the complete network of Red Bus routes across Karachi. Click on a route to see details.
                    </p>
                </div>

                {loading && (
                    <div style={{ textAlign: "center", padding: "5rem" }}>
                        <div className="spinner" style={{
                            width: "40px",
                            height: "40px",
                            border: "3px solid var(--border-subtle)",
                            borderTopColor: "var(--primary)",
                            borderRadius: "50%",
                            margin: "0 auto 1.5rem auto",
                            animation: "spin 1s linear infinite"
                        }} />
                        <p className="text-muted">Loading route data...</p>
                    </div>
                )}

                {error && (
                    <div style={{
                        textAlign: "center",
                        padding: "2rem",
                        background: "rgba(230, 57, 70, 0.1)",
                        borderRadius: "var(--radius-md)",
                        color: "var(--primary)",
                        border: "1px solid rgba(230, 57, 70, 0.2)"
                    }}>
                        {error}
                    </div>
                )}

                {!loading && !error && (
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.5rem"
                    }}>

                        {routes.map((route, idx) => (
                            <div key={idx} className="glass-card" style={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%"
                            }}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginBottom: "1.5rem"
                                }}>
                                    <div style={{
                                        padding: "0.4rem 1rem",
                                        background: "var(--primary)",
                                        color: "white",
                                        borderRadius: "var(--radius-sm)",
                                        fontWeight: "800",
                                        fontSize: "0.9rem",
                                        letterSpacing: "0.05em"
                                    }}>
                                        {route.route_name}
                                    </div>
                                    <div style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>
                                        {route.stops.length} Stops
                                    </div>
                                </div>

                                <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Route Stops</h3>

                                <div style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.5rem",
                                    marginTop: "auto"
                                }}>
                                    {route.stops.map((stop, i) => (
                                        <span key={i} style={{
                                            background: "var(--bg-surface)",
                                            color: "var(--text-muted)",
                                            padding: "0.3rem 0.7rem",
                                            borderRadius: "6px",
                                            fontSize: "0.8rem",
                                            fontWeight: "500",
                                            border: "1px solid var(--border-subtle)"
                                        }}>
                                            {stop}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <style>{`
                @keyframes spin { to { transform: rotate(360deg); } }
            `}</style>
        </section>
    );
};

export default Routes;
