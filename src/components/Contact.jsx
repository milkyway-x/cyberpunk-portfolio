import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message, title: 'Portfolio Contact Form' },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-desc">Have a project or opportunity? I'd love to hear from you.</p>
        </motion.div>

        <div className="contact__layout">
          {/* Left — info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="contact__heading">Let's build something amazing</h3>
            <p className="contact__body">
              I'm open to discussing new opportunities in cloud engineering,
              security operations, or full-stack development. Drop me a message
              and I'll get back to you within 24 hours.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Email</div>
                  <div className="contact__detail-value">ronand.almazar.official@gmail.com</div>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Location</div>
                  <div className="contact__detail-value">Camarines Sur, Philippines</div>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Response time</div>
                  <div className="contact__detail-value">Within 24 hours</div>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <motion.a
                href="https://github.com/ronandalmazar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ronandalmazar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:ronand.almazar.official@gmail.com"
                className="contact__social"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email
              </motion.a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
              />
            </div>

            {status === 'success' && (
              <div className="form-feedback form-feedback--success">
                Message sent successfully. I'll be in touch soon!
              </div>
            )}
            {status === 'error' && (
              <div className="form-feedback form-feedback--error">
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <motion.button
              type="submit"
              className="form-submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status !== 'sending' ? 1.02 : 1 }}
              whileTap={{ scale: status !== 'sending' ? 0.98 : 1 }}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
