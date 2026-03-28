import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import Footer from './Footer';
import '../styles/WorkDetail.css';

export default function WorkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) {
    return (
      <div className="page">
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h1>Project not found</h1>
          <button onClick={() => navigate('/works')} className="back-btn">
            ← Back to Works
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="work-detail-header">
        <button className="back-btn" onClick={() => navigate('/works')}>
          ← Back to Works
        </button>
        <h1 className="work-detail-title">{project.title}</h1>
        <div className="work-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="detail-hero">
        <img src={project.img} alt={project.title} />
      </div>

      <div className="detail-body">
        <div className="detail-sidebar">
          <div className="meta-item">
            <p className="meta-label">Project</p>
            <p className="meta-value">{project.client}</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">Category</p>
            <p className="meta-value">{project.cat}</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">Year</p>
            <p className="meta-value">{project.year}</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">Tools</p>
            <p className="meta-value">{project.tools}</p>
          </div>
        </div>
        <div className="detail-content">
          <p className="detail-desc">{project.desc}</p>
          <div
            className="detail-text"
            dangerouslySetInnerHTML={{ __html: project.body }}
          />
          <a
            className="figma-link"
            href={project.figma}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Figma →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
