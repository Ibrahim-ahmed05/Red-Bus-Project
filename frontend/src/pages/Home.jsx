import React from "react";
import { Link } from "react-router-dom";
import karachiBusBg from "../assets/use.jpg";

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundImage: `linear-gradient(to bottom, rgba(15, 17, 21, 0.7), rgba(15, 17, 21, 0.95)), url(${karachiBusBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center"
      }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.04em",
              lineHeight: 1.1
            }}>
              Discover Karachi with <span className="text-gradient">EZTrip</span>
            </h1>

            <p className="text-muted" style={{
              fontSize: "clamp(1rem, 3vw, 1.4rem)",
              marginBottom: "3rem",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              lineHeight: 1.6
            }}>
              The most efficient way to navigate the Red Bus network. Find the shortest routes and accurate fares in seconds.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/search" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
                Find a Route
              </Link>
              <Link to="/routes" className="btn btn-outline" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
                View All Routes
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle Decorative Element */}
        <div style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "150px",
          background: "linear-gradient(to top, var(--bg-deep), transparent)",
          zIndex: 1
        }} />
      </section>

      {/* Feature Section */}
      <section className="section-padding" style={{ background: "var(--bg-deep)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem"
          }}>

            <div className="glass-card" style={{ textAlign: "left" }}>
              <div style={{
                width: "50px", height: "50px", background: "rgba(230, 57, 70, 0.1)",
                borderRadius: "12px", display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "1.5rem", color: "var(--primary)"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <h3 style={{ marginBottom: "1rem" }}>Save Time</h3>
              <p className="text-muted">Our advanced algorithm calculates the shortest path through Karachi's complex bus network instantly.</p>
            </div>

            <div className="glass-card" style={{ textAlign: "left" }}>
              <div style={{
                width: "50px", height: "50px", background: "rgba(69, 123, 157, 0.1)",
                borderRadius: "12px", display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "1.5rem", color: "var(--secondary)"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
              </div>
              <h3 style={{ marginBottom: "1rem" }}>Accurate Fares</h3>
              <p className="text-muted">Stay updated with the latest fare structures. No more guessing how much your trip will cost.</p>
            </div>

            <div className="glass-card" style={{ textAlign: "left" }}>
              <div style={{
                width: "50px", height: "50px", background: "rgba(168, 218, 220, 0.1)",
                borderRadius: "12px", display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "1.5rem", color: "var(--accent)"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <h3 style={{ marginBottom: "1rem" }}>Full Coverage</h3>
              <p className="text-muted">Complete database of all Red Bus stops and routes across Karachi, updated regularly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="glass-card" style={{
            background: "linear-gradient(135deg, rgba(230, 57, 70, 0.1) 0%, rgba(15, 17, 21, 0.7) 100%)",
            textAlign: "center",
            padding: "4rem 2rem"
          }}>
            <h2 style={{ marginBottom: "1.5rem" }}>Ready to start your journey?</h2>
            <p className="text-muted" style={{ marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem auto" }}>
              Join thousands of daily commuters who trust EZTrip for their daily travel needs in Karachi.
            </p>
            <Link to="/search" className="btn btn-primary" style={{ padding: "1rem 3rem" }}>
              Search Now
            </Link>
          </div>
        </div>
      </section>

      <footer style={{
        padding: "3rem 0",
        borderTop: "1px solid var(--border-subtle)",
        textAlign: "center"
      }}>
        <div className="container">
          <p className="text-muted" style={{ fontSize: "0.9rem" }}>
            &copy; {new Date().getFullYear()} EZTrip Karachi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

