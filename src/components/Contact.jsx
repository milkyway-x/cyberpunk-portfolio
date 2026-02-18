import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: 'Portfolio Contact Form', // optional (remove if your template doesn't use it)
        },
        { publicKey }
      );

      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' }); // optional reset
        } catch (error) {
      console.error('EmailJS error:', error);

      // EmailJS often returns useful info here:
      const msg =
        error?.text ||
        error?.message ||
        JSON.stringify(error);

      alert(`Failed to send: ${msg}`);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="title-bracket">{'['}</span>
            GET IN TOUCH
            <span className="title-bracket">{']'}</span>
          </h2>
          <div className="title-underline" />
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="info-title">LET'S BUILD SOMETHING AMAZING</h3>
            <p className="info-text">
              Have a project in mind? Need a software engineer with expertise in 
              cloud technologies, security, or data analysis? I'm always open to 
              discussing new opportunities and innovative solutions.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">✉</div>
                <div className="method-content">
                  <div className="method-label">EMAIL</div>
                  <div className="method-value">ronand.almazar.official@gmail.com</div>
                </div>
              </div>

              {/* <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-content">
                  <div className="method-label">PHONE</div>
                  <div className="method-value">0970-160-3282</div>
                </div>
              </div> */}

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-content">
                  <div className="method-label">LOCATION</div>
                  <div className="method-value">Camarines Sur, PH</div>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">◆</div>
                <div className="method-content">
                  <div className="method-label">RESPONSE TIME</div>
                  <div className="method-value">Within 24 hours</div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <motion.a
                href="https://github.com/ronandalmazar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                GITHUB
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ronandalmazar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                LINKEDIN
              </motion.a>
              <motion.a
                href="mailto:ronand.almazar.official@gmail.com"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                EMAIL ME
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>SEND MESSAGE</span>
              <span className="button-glow" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
