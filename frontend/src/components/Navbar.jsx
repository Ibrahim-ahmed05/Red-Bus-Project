import "../App.css";
import { Link } from "react-router-dom";
import redbusLogo from "../assets/redbus3.jpg";

const Navbar = () => {
  return (
    <nav style={{
      background: "#fff",
      boxShadow: "var(--shadow)",
      padding: "0.5em 1.2em",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      position: "sticky",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      margin: 0,
      minHeight: "64px",
      borderBottom: "1.5px solid #ececec"
    }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.7em", textDecoration: "none" }}>
        <div style={{
          height: "44px",
          width: "44px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #fff 60%, #ff3b3f 100%)",
          boxShadow: "0 2px 8px rgba(255,59,63,0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #ff3b3f",
          transition: "box-shadow 0.2s, border 0.2s",
          overflow: "hidden"
        }}
          className="navbar-logo-hover"
        >
          <img
            src={redbusLogo}
            alt="EZTrip Logo"
            style={{
              height: "32px",
              width: "32px",
              objectFit: "cover",
              borderRadius: "50%",
              display: "block"
            }}
          />
        </div>
        <span style={{
          fontWeight: 900,
          fontSize: "1.85rem",
          letterSpacing: "0.045em",
          fontFamily: "Montserrat, Roboto, Arial, sans-serif",
          display: "flex",
          alignItems: "center",
          gap: "0.05em"
        }}>
          <span style={{ color: "var(--primary-red)" }}>EZ</span>
          <span style={{ color: "var(--black)" }}>Trip</span>
        </span>
      </Link>
      <div style={{ display: "flex", gap: "1.2em", marginLeft: "1.5em" }}>
        <Link to="/" style={{ color: "var(--black)", fontWeight: 600, fontSize: "1.22rem", textDecoration: "none", padding: "0.2em 0.9em", borderRadius: "8px", transition: "background 0.18s, color 0.18s" }} className="navbar-link-hover">Home</Link>
        <Link to="/search" style={{ color: "var(--black)", fontWeight: 600, fontSize: "1.22rem", textDecoration: "none", padding: "0.2em 0.9em", borderRadius: "8px", transition: "background 0.18s, color 0.18s" }} className="navbar-link-hover">Search</Link>
        <Link to="/routes" style={{ color: "var(--black)", fontWeight: 600, fontSize: "1.22rem", textDecoration: "none", padding: "0.2em 0.9em", borderRadius: "8px", transition: "background 0.18s, color 0.18s" }} className="navbar-link-hover">View Routes</Link>
        <Link to="/about" style={{ color: "var(--black)", fontWeight: 600, fontSize: "1.22rem", textDecoration: "none", padding: "0.2em 0.9em", borderRadius: "8px", transition: "background 0.18s, color 0.18s" }} className="navbar-link-hover">About</Link>
      </div>
      <div style={{ flex: 1 }} />
      <span className="navbar-tagline-animated" style={{
        color: "var(--primary-red)",
        fontWeight: 600,
        fontSize: "1.18rem",
        marginLeft: "1.2em",
        letterSpacing: "0.18em",
        fontFamily: "'Pacifico', 'Caveat', cursive, 'Montserrat', sans-serif",
        whiteSpace: "nowrap",
        alignSelf: "center",
        animation: "taglineFadeIn 1.5s cubic-bezier(0.4,0,0.2,1) both"
      }}>
        Making your trip easier
      </span>
    </nav>
  );
};

export default Navbar;
