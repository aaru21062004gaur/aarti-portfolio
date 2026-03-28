import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copy">© 2024 Aarti Gaur</span>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/aarti-gaur-ab910836b/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a href="mailto:aarti21gaur@gmail.com" className="footer-link">
          Email
        </a>
      </div>
    </footer>
  );
}
