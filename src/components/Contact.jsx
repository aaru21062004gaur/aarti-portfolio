import { useState } from 'react';
import Footer from './Footer';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="page">
      <div className="contact-wrap">
        <div className="contact-left">
          <h2 className="contact-heading">
            Let's create something
            <br />
            <em>meaningful</em>
            <br />
            together.
          </h2>

          <div className="contact-taglines">
            <p className="contact-tagline">
              I'm open to internships and UI/UX opportunities.
            </p>
            <p className="contact-tagline">If you like my work, feel free to reach out.</p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <span className="contact-value">
                <a href="tel:+916376119816">+91 6376119816</a>
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">
                <a href="mailto:aarti@example.com">aarti@example.com</a>
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">
                <a
                  href="https://www.linkedin.com/in/aarti-gaur-ab910836b/details/skills/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aarti-gaur
                </a>
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Availability</span>
              <span className="contact-value">Open for internships & freelance</span>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <p className="section-label" style={{ marginBottom: '40px' }}>
            Send a message
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                className="form-input"
                type="text"
                name="subject"
                placeholder="Internship, Freelance, Collaboration..."
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                name="message"
                placeholder="Tell me about the opportunity..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="form-submit">
              {submitted ? 'Message Sent! ✓' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
