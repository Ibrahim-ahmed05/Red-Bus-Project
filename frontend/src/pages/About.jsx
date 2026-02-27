import React from "react";

const About = () => {
  return (
    <section className="section-padding animate-fade-in">
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            About <span className="text-gradient">EZTrip</span>
          </h1>
          <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Connecting Karachi, one stop at a time.
          </p>
        </div>

        <div className="glass-card" style={{ textAlign: "left" }}>
          <p style={{
            fontSize: "1.1rem",
            marginBottom: "2.5rem",
            lineHeight: 1.8,
            color: "var(--text-muted)"
          }}>
            EZTrip is a premium navigation tool designed specifically for Karachi's Red Bus network. Our mission is to make public transportation more accessible, predictable, and stress-free for every citizen.<br /><br />
            Using advanced pathfinding algorithms, we provide the most efficient travel options, combining multiple routes when necessary to get you to your destination faster and cheaper.
          </p>

          <div style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "2.5rem",
            marginTop: "1rem"
          }}>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "2rem", color: "var(--primary)" }}>The Developer</h3>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap"
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                fontWeight: "800",
                color: "white",
                boxShadow: "var(--shadow-md)"
              }}>
                IA
              </div>

              <div>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "0.25rem" }}>Ibrahim Ahmed</h4>
                <p className="text-muted" style={{ marginBottom: "1rem" }}>CS Student @ FAST National University</p>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <a href="https://www.linkedin.com/in/ibrahim-ahmed05/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
                    LinkedIn
                  </a>
                  <a href="https://github.com/ibrahim-ahmed05" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <a href="mailto:contact@eztrip.pk" className="btn btn-primary" style={{ padding: "1rem 3rem" }}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

