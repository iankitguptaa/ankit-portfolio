import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Ankit Kumar</h2>

          {/* hamburger */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </div>

          <ul className={open ? "nav-links active" : "nav-links"}>
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
            <li><Link to="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
            <li><Link to="/certificates" onClick={() => setOpen(false)}>Certificates</Link></li>
            <li><Link to="/resume" onClick={() => setOpen(false)}>Resume</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}