import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="about">
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
            ABOUT ME
            <span className="title-bracket">{']'}</span>
          </h2>
          <div className="title-underline" />
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-block" variants={itemVariants}>
              <div className="text-icon">▸</div>
              <p>
                Analytical and tech-driven professional with extensive experience in 
                software engineering, cybersecurity, and data analysis. Proficient in 
                cloud technologies (AWS), Python, and full-stack development with a 
                strong foundation in financial analysis and business intelligence.
              </p>
            </motion.div>

            <motion.div className="text-block" variants={itemVariants}>
              <div className="text-icon">▸</div>
              <p>
                As a Software Engineer, I specialized 
                in serverless architecture, security operations, and developing scalable 
                solutions using AWS services (S3, Lambda, DynamoDB). My work focuses on 
                generating actionable insights and optimizing reporting processes.
              </p>
            </motion.div>

            <motion.div className="text-block" variants={itemVariants}>
              <div className="text-icon">▸</div>
              <p>
                IT Associate at the Universidad de Sta. Isabel de Naga, specializing in desktop deployment, system administration, and IT infrastructure support. Experienced in batch provisioning of Windows workstations, BIOS configuration, disk management, network setup (static IP/DNS), domain integration, and application deployment. Adept at working under physical and operational constraints while maintaining consistent system standards and supporting regional agricultural operations.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Organizations Served</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
