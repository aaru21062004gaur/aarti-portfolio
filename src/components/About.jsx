import Footer from './Footer';
import '../styles/About.css';

export default function About() {
  const skills = [
    { name: 'UI Design', level: 5 },
    { name: 'UX Research', level: 4 },
    { name: 'Figma', level: 5 },
    { name: 'Prototyping', level: 4 },
    { name: 'Interaction Design', level: 3 },
  ];

  return (
    <div className="page">
      <div className="about-grid">
        <div className="about-left">
          <p className="section-label">About</p>
          <div className="about-portrait">
            <img
              src="https://framerusercontent.com/images/cRuucawHvCNhol5PVFbP8vEbde0.jpeg?width=900&height=1200"
              alt="Aarti Gaur"
              onError={(e) => (e.parentElement.style.background = '#d8d4cc')}
            />
          </div>
        </div>
        <div className="about-right">
          <p className="about-intro">
            Design for me is not just about <em>visuals</em> — it's about solving
            real problems and making experiences <em>simple and meaningful.</em>
          </p>

          <div className="about-bio">
            <p>
              Hello, I'm a UI/UX designer focused on creating simple and
              user-friendly digital experiences. I enjoy solving user problems
              through design and continuously improving my skills.
            </p>
            <p>
              I love turning ideas into user-friendly designs that people enjoy
              using. I believe good design is simple, clear, and focused on
              users.
            </p>
            <p>I am always learning and improving my skills to create better experiences.</p>
          </div>

          <div>
            <p className="section-label" style={{ marginBottom: '16px' }}>
              Skills
            </p>
            <div>
              {skills.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-dots">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`dot ${i < skill.level ? 'on' : ''}`}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            className="linkedin-btn"
            href="https://www.linkedin.com/in/aarti-gaur-ab910836b/details/skills/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
