import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        Aarti Gaur
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/works" className={isActive('/works') ? 'active' : ''}>
            Works
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {menuOpen && (
        <div className="mobile-menu open">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/works" onClick={closeMenu}>
            Works
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
