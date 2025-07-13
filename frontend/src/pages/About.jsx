import React from "react";

const About = () => {
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
        background: "rgba(255,255,255,0.04)",
        border: "1.5px solid var(--primary-red)",
        boxShadow: "0 8px 32px rgba(225,6,0,0.10)",
        borderRadius: "var(--radius)",
        padding: "2.5em 2em 2em 2em",
        textAlign: "center",
        backdropFilter: "blur(2px)",
      }}>
        <h2 style={{
          fontSize: "2.2rem",
          fontWeight: 900,
          color: "var(--primary-red)",
          marginBottom: "0.7em",
          letterSpacing: "0.03em",
          textShadow: "0 2px 8px rgba(0,0,0,0.10)",
        }}>
          About EZTrip
        </h2>
        <p style={{
          fontSize: "1.15rem",
          color: "var(--white)",
          marginBottom: "1.5em",
          lineHeight: 1.7,
          fontWeight: 500,
        }}>
          EZTrip is a smart and efficient tool to help commuters in Karachi navigate the Red Bus system easily. We aim to simplify public transport with real-time route discovery, fare estimations, and stop-to-stop instructions.<br /><br />
          <span style={{ color: "var(--primary-red)", fontWeight: 700 }}>This project is built by:</span>
        </p>
        <div style={{
          background: "rgba(255,255,255,0.10)",
          borderRadius: "var(--radius)",
          padding: "1.2em 1em 1em 1em",
          marginBottom: "1.5em",
          boxShadow: "0 2px 8px rgba(225,6,0,0.08)",
        }}>
          <h3 style={{
            color: "var(--primary-red)",
            fontWeight: 800,
            fontSize: "1.3rem",
            marginBottom: "0.3em",
          }}>
            Ibrahim Ahmed
          </h3>
          <p style={{ color: "var(--white)", fontWeight: 600, marginBottom: "0.5em" }}>
            CS Student at FAST National University
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5em", marginBottom: "0.5em" }}>
            <a href="https://www.linkedin.com/in/ibrahim-ahmed05/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-red)", fontWeight: 700, textDecoration: "none", fontSize: "1.1rem" }}>LinkedIn</a>
            <a href="https://github.com/ibrahim-ahmed05" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-red)", fontWeight: 700, textDecoration: "none", fontSize: "1.1rem" }}>GitHub</a>
          </div>
        </div>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "var(--primary-red)",
            color: "var(--white)",
            padding: "0.9em 2.2em",
            borderRadius: "var(--radius)",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.02em",
            boxShadow: "0 4px 24px rgba(225,6,0,0.10)",
            textDecoration: "none",
            marginTop: "1em",
            transition: "background var(--transition), color var(--transition), box-shadow var(--transition)",
          }}
          onMouseOver={e => { e.target.style.background = 'var(--white)'; e.target.style.color = 'var(--primary-red)'; }}
          onMouseOut={e => { e.target.style.background = 'var(--primary-red)'; e.target.style.color = 'var(--white)'; }}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default About;
