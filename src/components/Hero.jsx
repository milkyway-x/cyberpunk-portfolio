import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-glitch-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="hero-title">
            <span className="glitch" data-text="RONAND D. ALMAZAR">RONAND D. ALMAZAR</span>
          </h1>
          <h2 className="hero-name">
            <span className="glitch-name" data-text="SOFTWARE ENGINEER">SOFTWARE ENGINEER</span>
          </h2>
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Full Stack Developer | Cloud & Security Specialist | Data Analyst
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button className="cta-button primary" onClick={() => scrollToSection('projects')}>
            <span>VIEW PROJECTS</span>
            <span className="button-glow" />
          </button>
          <button className="cta-button secondary" onClick={() => scrollToSection('contact')}>
            <span>CONTACT ME</span>
            <span className="button-glow" />
          </button>
        </motion.div>

        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="scroll-line" />
          <span></span>
        </motion.div>
      </div>

      <div className="hero-bg-shapes">
        <motion.div
          className="shape shape-1"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="shape shape-2"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="shape shape-3"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
