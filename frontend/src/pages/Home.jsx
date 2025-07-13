import React from "react";

const heroSectionStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "80vh",
  padding: "3em 1em 2em 1em",
  background: "linear-gradient(120deg, #181a20 0%, #23272f 100%)",
  overflow: "hidden"
};

const animatedHeadingStyle = {
  fontSize: "3.2rem",
  fontWeight: 900,
  letterSpacing: "0.04em",
  marginBottom: "0.7em",
  textAlign: "center",
  animation: "modernText 1.1s cubic-bezier(0.4,0,0.2,1) both",
  animationDelay: "0.1s",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.2em",
  color: "#fff",
  textShadow: "0 4px 24px rgba(0,0,0,0.25)",
  zIndex: 2,
  position: "relative"
};

const descStyle = {
  fontSize: "1.35rem",
  color: "#fff",
  marginBottom: "2em",
  lineHeight: 1.7,
  fontWeight: 500,
  textAlign: "center",
  textShadow: "0 2px 8px rgba(0,0,0,0.18)",
  animation: "fadeInUp 1.2s cubic-bezier(0.4,0,0.2,1) both",
  animationDelay: "0.35s",
  zIndex: 2,
  position: "relative"
};

const buttonStyle = {
  display: "inline-block",
  background: "var(--primary-red)",
  color: "#fff",
  padding: "1.1em 2.7em",
  borderRadius: "var(--radius)",
  fontWeight: 800,
  fontSize: "1.25rem",
  letterSpacing: "0.02em",
  boxShadow: "0 4px 24px rgba(255,59,63,0.10)",
  textDecoration: "none",
  marginTop: "1.2em",
  transition: "background var(--transition), color var(--transition), box-shadow var(--transition)",
  animation: "fadeInUp 1.2s cubic-bezier(0.4,0,0.2,1) both",
  animationDelay: "0.6s",
  zIndex: 2,
  position: "relative"
};

const Home = () => {
  return (
    <section className="landing-animate" style={heroSectionStyle}>
      <h1 style={animatedHeadingStyle}>
        <span style={{ color: "var(--primary-red)", textShadow: "0 2px 8px rgba(255,59,63,0.10)" }}>EZ</span>
        <span style={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.18)" }}>Trip</span>
      </h1>
      <p style={descStyle}>
        <b>EZTrip</b> is designed to make your journey on the <b>Red Bus Karachi</b> system effortless and efficient.<br /><br />
        With a user-friendly interface and smart route-finding technology, EZTrip helps you discover the best bus routes, plan your trips, and get real-time fare estimates. Whether you’re a daily commuter or a first-time visitor, EZTrip provides step-by-step guidance, stop details, and fare breakdowns—so you can travel across Karachi with confidence and ease.<br /><br />
        Experience a seamless, tech-powered public transport solution built for Karachi’s vibrant urban life.
      </p>
      <a
        href="/search"
        style={buttonStyle}
        onMouseOver={e => { e.target.style.background = 'var(--primary-red-dark)'; e.target.style.color = '#fff'; }}
        onMouseOut={e => { e.target.style.background = 'var(--primary-red)'; e.target.style.color = '#fff'; }}
      >
        Get Started
      </a>
    </section>
  );
};

export default Home;
