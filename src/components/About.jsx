import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">About</span>
          <h2 className="section-title">A bit about me</h2>
        </motion.div>

        <div className="about__layout">
          <motion.div
            className="about__text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about__block" variants={itemVariants}>
              <p>
                Analytical and tech-driven professional with extensive experience in
                software engineering, cybersecurity, and data analysis. Proficient in
                cloud technologies (AWS), Python, and full-stack development with a
                strong foundation in financial analysis and business intelligence.
              </p>
            </motion.div>

            <motion.div className="about__block" variants={itemVariants}>
              <p>
                As a Software Engineer, I specialized in serverless architecture,
                security operations, and developing scalable solutions using AWS services
                (S3, Lambda, DynamoDB). My work focuses on generating actionable insights
                and optimizing reporting processes.
              </p>
            </motion.div>

            <motion.div className="about__block" variants={itemVariants}>
              <p>
                IT Associate at the Universidad de Sta. Isabel de Naga, specializing in
                desktop deployment, system administration, and IT infrastructure support.
                Experienced in batch provisioning, BIOS configuration, domain integration,
                and application deployment across constrained operational environments.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {[
              { number: '3+',  label: 'Years of experience' },
              { number: '15+', label: 'Technologies mastered' },
              { number: '5+',  label: 'Organizations served' },
            ].map((stat) => (
              <div className="about__stat" key={stat.label}>
                <div className="about__stat-number">{stat.number}</div>
                <div className="about__stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
