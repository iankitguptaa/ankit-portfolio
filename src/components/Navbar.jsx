import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Ankit Kumar</h2>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
