import { useState, type FormEvent } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder — integrate with a backend or email service later
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Got a project in <span className="accent">mind?</span>
          </h2>
        </div>

        <div className="contact-body">
          {/* Left — Info & Socials */}
          <div className="contact-info">
            <p className="contact-desc">
              Feel free to reach out through any of my socials or drop me a message using the form. I'd love to hear from you!
            </p>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/kyrellos-sameh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="link-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div>
                  <span className="link-label">LinkedIn</span>
                  <span className="link-value">Kyrellos Sameh</span>
                </div>
              </a>

              <a
                href="https://github.com/KyrellosSameh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="link-icon">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div>
                  <span className="link-label">GitHub</span>
                  <span className="link-value">kyrellos-sameh</span>
                </div>
              </a>

              <a
                href="mailto:kerlis447509@feng.bu.edu.eg"
                className="contact-link"
              >
                <div className="link-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <span className="link-label">Email</span>
                  <span className="link-value">kerlis447509@feng.bu.edu.eg</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Leave a Message Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Leave a Message</h3>

            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-send">
              <span>Send Message</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>

            {submitted && (
              <p className="form-success">
                <i className="fa-solid fa-circle-check"></i> Message sent! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
