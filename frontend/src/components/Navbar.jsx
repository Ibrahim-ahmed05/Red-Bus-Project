import { Link, useLocation } from "react-router-dom";
import redbusLogo from "../assets/redbus3.jpg";

const Navbar = () => {
  const location = useLocation();

  const navLinkStyle = (path) => ({
    color: location.pathname === path ? "var(--primary)" : "var(--text-main)",
    fontWeight: location.pathname === path ? "700" : "500",
    fontSize: "0.95rem",
    textDecoration: "none",
    padding: "0.5rem 0.75rem",
    borderRadius: "var(--radius-sm)",
    transition: "var(--transition)",
    whiteSpace: "nowrap"
  });

  return (
    <nav style={{
      background: "rgba(15, 17, 21, 0.8)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      padding: "0.75rem 0",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      borderBottom: "1px solid var(--border-subtle)"
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <div style={{
            height: "36px",
            width: "36px",
            borderRadius: "8px",
            background: "var(--primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 15px rgba(230, 57, 70, 0.3)",
            overflow: "hidden"
          }}>
            <img
              src={redbusLogo}
              alt="EZTrip"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
          <span style={{
            fontWeight: 800,
            fontSize: "1.25rem",
            color: "var(--text-main)",
            letterSpacing: "-0.02em",
            fontFamily: "Outfit, sans-serif"
          }}>
            EZ<span style={{ color: "var(--primary)" }}>Trip</span>
          </span>
        </Link>

        <div style={{
          display: "flex",
          gap: "0.25rem",
          alignItems: "center",
          overflowX: "auto",
          maxWidth: "100%",
          paddingBottom: "2px"
        }} className="no-scrollbar">
          <Link to="/" style={navLinkStyle("/")}>Home</Link>
          <Link to="/search" style={navLinkStyle("/search")}>Search</Link>
          <Link to="/routes" style={navLinkStyle("/routes")}>Routes</Link>
          <Link to="/about" style={navLinkStyle("/about")}>About</Link>

          <div style={{
            width: "1px",
            height: "16px",
            background: "var(--border-subtle)",
            margin: "0 0.5rem",
            flexShrink: 0
          }} />

          <span style={{
            color: "var(--text-muted)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            whiteSpace: "nowrap"
          }}>
            Karachi
          </span>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;

