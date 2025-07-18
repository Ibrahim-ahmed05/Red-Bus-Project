import React, { useEffect, useRef, useState } from "react";
import karachiBusBg from "../assets/use.jpg";

const heroSectionStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "80vh",
  padding: "3em 1em 2em 1em",
  background: `url(${karachiBusBg}) center/cover no-repeat, linear-gradient(120deg, #181a20 0%, #23272f 100%)`,
  overflow: "hidden"
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(24, 26, 32, 0.78)",
  zIndex: 1
};

const glassContainerStyle = {
  position: "relative",
  zIndex: 2,
  background: "rgba(30, 32, 40, 0.38)",
  borderRadius: "24px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
  backdropFilter: "blur(7px)",
  WebkitBackdropFilter: "blur(7px)",
  padding: "2.5em 2em 2em 2em",
  maxWidth: "720px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const animatedHeadingStyle = {
  fontFamily: 'Poppins, Segoe UI, Arial, sans-serif',
  fontSize: "3.8rem",
  fontWeight: 900,
  letterSpacing: "0.06em",
  marginBottom: "0.5em",
  textAlign: "center",
  animation: "modernText 1.1s cubic-bezier(0.4,0,0.2,1) both",
  animationDelay: "0.1s",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.2em",
  color: "#fff",
  textShadow: "0 2px 8px #000, 0 0 12px #c00, 0 6px 32px rgba(0,0,0,0.65)",
  zIndex: 2,
  position: "relative",
  lineHeight: 1.1,
  filter: "drop-shadow(0 2px 8px #000)"
};

const descStyle = {
  fontFamily: 'Poppins, Segoe UI, Arial, sans-serif',
  fontSize: "1.25rem",
  color: "#fff",
  marginBottom: "2em",
  lineHeight: 1.8,
  fontWeight: 400,
  textAlign: "center",
  textShadow: "0 2px 8px #000, 0 0 8px #c00, 0 4px 24px rgba(0,0,0,0.45)",
  animation: "fadeInUp 1.2s cubic-bezier(0.4,0,0.2,1) both",
  animationDelay: "0.35s",
  zIndex: 2,
  position: "relative",
  maxWidth: "650px"
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
  boxShadow: "0 6px 32px rgba(255,59,63,0.28), 0 2px 8px #000",
  textDecoration: "none",
  marginTop: "1.2em",
  transition: "background var(--transition), color var(--transition), box-shadow var(--transition)",
  animation: "fadeInUp 1.2s cubic-bezier(0.4,0,0.2,1) both",
  animationDelay: "0.6s",
  zIndex: 2,
  position: "relative",
  fontFamily: 'Poppins, Segoe UI, Arial, sans-serif',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  textShadow: "0 2px 8px #000"
};

const typeText = " Helping you in red bus route selection";

const typewriterStyle = {
  fontFamily: 'Poppins, Segoe UI, Arial, sans-serif',
  fontSize: "2.2rem",
  fontWeight: 900,
  color: "#fff",
  textAlign: "center",
  margin: "1.2em 0 1.2em 0",
  letterSpacing: "0.04em",
  textShadow: "0 2px 8px #c00, 0 2px 8px #000",
  minHeight: "3.2em",
  zIndex: 2,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const highlightStyle = {
  color: "var(--primary-red)",
  marginLeft: "0.5em"
};

const Home = () => {
  // Remove typewriter logic
  // const [displayed, setDisplayed] = useState("");
  // const idx = useRef(0);

  // useEffect(() => {
  //   setDisplayed("");
  //   idx.current = 0;
  //   const interval = setInterval(() => {
  //     setDisplayed((prev) => prev + typeText[idx.current]);
  //     idx.current++;
  //     if (idx.current >= typeText.length) clearInterval(interval);
  //   }, 50);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="landing-animate" style={heroSectionStyle}>
      <div style={overlayStyle}></div>
      <style>{`
        @media (max-width: 1200px) {
          .home-heading {
            font-size: 3.5rem !important;
          }
          .home-tagline {
            font-size: 1.5rem !important;
          }
        }
        @media (max-width: 900px) {
          .home-heading {
            font-size: 2.3rem !important;
            padding: 0.05em 0.1em !important;
          }
          .home-tagline {
            font-size: 1.1rem !important;
            margin: 1em 0 1em 0 !important;
          }
        }
        @media (max-width: 600px) {
          .home-heading {
            font-size: 1.3rem !important;
            flex-direction: column !important;
            gap: 0 !important;
            line-height: 1.2 !important;
            padding: 0.02em 0.05em !important;
          }
          .home-tagline {
            font-size: 0.95rem !important;
            margin: 0.7em 0 0.7em 0 !important;
          }
          .home-btn {
            font-size: 1rem !important;
            padding: 0.8em 1.5em !important;
          }
        }
        .home-heading {
          font-size: clamp(1.3rem, 6vw, 5.2rem);
        }
        .home-tagline {
          font-size: clamp(0.95rem, 3vw, 2.2rem);
        }
        .home-btn {
          font-size: clamp(1rem, 2vw, 1.25rem);
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(30px) scale(0.98); }
          10% { opacity: 1; transform: translateY(0) scale(1.04); }
          80% { opacity: 1; transform: translateY(0) scale(1.04); }
          100% { opacity: 0; transform: translateY(-30px) scale(0.98); }
        }
        @keyframes eztrip-glow {
          0%, 100% { text-shadow: 0 0 32px #ff3b3f, 0 2px 8px #000, 0 0 12px #c00, 0 6px 32px rgba(0,0,0,0.65); }
          50% { text-shadow: 0 0 64px #ff3b3f, 0 2px 16px #c00, 0 0 24px #fff, 0 12px 64px rgba(255,59,63,0.45); }
        }
      `}</style>
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 2,
        minHeight: "60vh"
      }}>
        <h1 className="home-heading" style={{
          fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
          fontSize: "5.2rem",
          fontWeight: 900,
          letterSpacing: "0.04em",
          marginBottom: "0.2em",
          textAlign: "center",
          color: "#fff",
          textShadow: "0 4px 32px #ff3b3f, 0 2px 8px #000, 0 0 12px #c00",
          lineHeight: 1.05,
          filter: "drop-shadow(0 2px 8px #000)",
          borderRadius: "18px",
          padding: "0.1em 0.3em"
        }}>
          <span style={{ color: 'var(--primary-red)' }}>EZ</span>
          <span style={{ color: '#fff', marginLeft: 8, textShadow: '0 2px 8px #000, 0 0 12px #c00' }}>Trip</span>
        </h1>
        <div className="home-tagline" style={{
          fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
          fontSize: "2.2rem",
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          margin: "1.2em 0 1.2em 0",
          letterSpacing: "0.02em",
          minHeight: "3.2em",
          zIndex: 2,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "fadeInOut 4.5s cubic-bezier(0.4,0,0.2,1) infinite"
        }}>
          Explore Cheap and Short Red Bus Routes in Karachi
        </div>
        <a
          href="/search"
          className="home-btn"
          style={{
            display: "inline-block",
            background: "var(--primary-red)",
            color: "#fff",
            padding: "1.1em 2.7em",
            borderRadius: "var(--radius)",
            fontWeight: 800,
            fontSize: "1.25rem",
            letterSpacing: "0.02em",
            boxShadow: "0 6px 32px rgba(255,59,63,0.28), 0 2px 8px #000",
            textDecoration: "none",
            marginTop: "1.2em",
            transition: "background var(--transition), color var(--transition), box-shadow var(--transition)",
            fontFamily: 'Barlow, Montserrat, Segoe UI, Arial, sans-serif',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            textShadow: "0 2px 8px #000"
          }}
          onMouseOver={e => { e.target.style.background = 'var(--primary-red-dark)'; e.target.style.color = '#fff'; }}
          onMouseOut={e => { e.target.style.background = 'var(--primary-red)'; e.target.style.color = '#fff'; }}
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Home;
