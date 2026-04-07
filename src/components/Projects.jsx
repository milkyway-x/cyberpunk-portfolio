import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'AWS Serverless Architecture',
    description:
      'Developed and deployed serverless solutions using AWS Lambda, Step Functions, DynamoDB, and Neptune for scalable cloud applications with automated workflows.',
    tech: ['AWS Lambda', 'DynamoDB', 'Step Functions', 'S3'],
    accent: '#6366f1',
  },
  {
    id: 2,
    title: 'Security Operations Platform',
    description:
      'Implemented comprehensive security monitoring using TrendMicro, Wazuh, OpenSearch, and threat intelligence tools for real-time incident detection and response.',
    tech: ['Wazuh', 'OpenSearch', 'Python', 'MISP'],
    accent: '#06b6d4',
  },
  {
    id: 3,
    title: 'Business Intelligence Dashboard',
    description:
      'Created automated reporting systems with Power BI and Google Sheets integration, streamlining financial tracking and data visualization for decision-making.',
    tech: ['Power BI', 'Google Sheets', 'MySQL', 'Python'],
    accent: '#8b5cf6',
  },
  {
    id: 4,
    title: 'Fullstack Inventory System',
    description:
      'Built a complete inventory management system for JL FarmStation Agri-Vet using Visual Basic .NET with database integration and real-time tracking capabilities.',
    tech: ['VB.NET', 'MySQL', 'Windows Forms', 'Crystal Reports'],
    accent: '#10b981',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">A selection of things I've built and shipped.</p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className="project-card__accent"
                style={{ background: project.accent }}
              />
              <div className="project-card__body">
                <span className="project-card__num">0{project.id}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tech.map((t) => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
