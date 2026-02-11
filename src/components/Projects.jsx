import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AWS SERVERLESS ARCHITECTURE',
      description: 'Developed and deployed serverless solutions using AWS Lambda, Step Functions, DynamoDB, and Neptune for scalable cloud applications with automated workflows.',
      tech: ['AWS Lambda', 'DynamoDB', 'Step Functions', 'S3'],
      color: 'cyan',
    },
    {
      id: 2,
      title: 'SECURITY OPERATIONS PLATFORM',
      description: 'Implemented comprehensive security monitoring using TrendMicro, Wazuh, OpenSearch, and threat intelligence tools for real-time incident detection and response.',
      tech: ['Wazuh', 'OpenSearch', 'Python', 'MISP'],
      color: 'pink',
    },
    {
      id: 3,
      title: 'BUSINESS INTELLIGENCE DASHBOARD',
      description: 'Created automated reporting systems with Power BI and Google Sheets integration, streamlining financial tracking and data visualization for decision-making.',
      tech: ['Power BI', 'Google Sheets', 'MySQL', 'Python'],
      color: 'purple',
    },
    {
      id: 4,
      title: 'FULLSTACK INVENTORY SYSTEM',
      description: 'Built complete inventory management system for JL FarmStation Agri-Vet using Visual Basic .NET with database integration and real-time tracking capabilities.',
      tech: ['VB.NET', 'MySQL', 'Windows Forms', 'Crystal Reports'],
      color: 'cyan',
    },
  ];

  return (
    <section id="projects" className="projects">
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
            FEATURED PROJECTS
            <span className="title-bracket">{']'}</span>
          </h2>
          <div className="title-underline" />
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.color}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-number">0{project.id}</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <button className="project-link">
                    <span>VIEW PROJECT</span>
                    <span className="link-arrow">→</span>
                  </button>
                  <button className="project-link">
                    <span>GITHUB</span>
                    <span className="link-arrow">↗</span>
                  </button>
                </div>
              </div>
              <div className="project-overlay" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
