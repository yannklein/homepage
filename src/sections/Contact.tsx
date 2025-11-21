import { useState, FormEvent } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaVideo, FaCalendarAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c4db6142-821e-40bb-8ec5-6cf9493d6f64',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/yannklein', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/yannklein', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="section contact-section" itemScope itemType="https://schema.org/ContactPage">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Yann Klein" />
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects, collaboration opportunities, or just having a chat about technology and education. Feel free to reach out through any of these channels.
            </p>
            <div className="social-links">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <div className="contact-details">
              <div className="detail-item" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span itemProp="addressLocality">Europe</span>
              </div>
              <a
                href="https://cal.com/yannklein/30min?user=yannklein"
                target="_blank"
                rel="noopener noreferrer"
                className="zoom-call-btn"
              >
                <div className="zoom-call-icon">
                  <FaVideo />
                </div>
                <div className="zoom-call-content">
                  <span className="zoom-call-title">Schedule a Call</span>
                  <span className="zoom-call-subtitle">Let's chat</span>
                </div>
                <FaCalendarAlt className="zoom-call-arrow" />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="form-message success">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="form-message error">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
