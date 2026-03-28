import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Footer from './Footer';
import '../styles/Works.css';

export default function Works() {
  return (
    <div className="page">
      <div className="works-page-header">
        <h1 className="page-title">Works</h1>
        <p className="page-subtitle">UI/UX projects — 2024</p>
      </div>

      <div className="works-full-list">
        {Object.entries(projects).map(([id, project], index) => (
          <Link
            key={id}
            to={`/works/${id}`}
            className="work-item"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span className="work-num">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <div className="work-cat">{project.cat}</div>
              <div className="work-title">{project.title}</div>
            </div>
            <div className="work-right">
              <span className="work-year">{project.year}</span>
              <span className="work-arrow">→</span>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
