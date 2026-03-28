import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Footer from './Footer';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-left">
          <p className="hero-tag">UI/UX Designer — Portfolio 2024</p>
          <h1 className="hero-name">
            Aarti<br />
            <em>Gaur</em>
          </h1>
        </div>
        <div className="hero-right">
          <img
            className="hero-photo-thumb"
            src="https://framerusercontent.com/images/cRuucawHvCNhol5PVFbP8vEbde0.jpeg?width=900&height=1200"
            alt="Aarti Gaur"
            onError={(e) => (e.target.style.display = 'none')}
          />
          <p className="hero-desc">
            Focused on creating simple and user-friendly digital experiences.
            Solving user problems through design.
          </p>
          <Link to="/works" className="hero-cta">
            Selected Works
          </Link>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          <span className="marquee-item">
            <span>✦</span> UI Design
          </span>
          <span className="marquee-item">
            <span>✦</span> UX Research
          </span>
          <span className="marquee-item">
            <span>✦</span> Figma
          </span>
          <span className="marquee-item">
            <span>✦</span> Prototyping
          </span>
          <span className="marquee-item">
            <span>✦</span> User Testing
          </span>
          <span className="marquee-item">
            <span>✦</span> Interaction Design
          </span>
          <span className="marquee-item">
            <span>✦</span> UI Design
          </span>
          <span className="marquee-item">
            <span>✦</span> UX Research
          </span>
          <span className="marquee-item">
            <span>✦</span> Figma
          </span>
          <span className="marquee-item">
            <span>✦</span> Prototyping
          </span>
          <span className="marquee-item">
            <span>✦</span> User Testing
          </span>
          <span className="marquee-item">
            <span>✦</span> Interaction Design
          </span>
        </div>
      </div>

      <section className="home-works">
        <div className="section-header">
          <span className="section-label">Selected Works</span>
          <span className="section-count">02</span>
        </div>
        <div className="project-cards">
          {Object.entries(projects).map(([id, project]) => (
            <Link
              key={id}
              to={`/works/${id}`}
              className="project-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="project-card-img-wrap">
                <img
                  src={project.img}
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.background = '#d8d4cc';
                    e.target.style.height = '400px';
                  }}
                />
              </div>
              <div className="project-card-cat">{project.cat}</div>
              <div className="project-card-title">{project.title}</div>
              <div className="project-card-desc">{project.desc}</div>
              <span className="project-card-link">View Project</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="view-all-wrap">
        <Link to="/works" className="hero-cta">
          All Works
        </Link>
      </div>

      <Footer />
    </div>
  );
}
