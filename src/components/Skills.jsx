import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'PROGRAMMING',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C#', level: 80 },
        { name: 'VB.NET', level: 85 },
      ],
      color: 'cyan',
    },
    {
      title: 'CLOUD & DEVOPS',
      skills: [
        { name: 'AWS (Lambda, S3, DynamoDB)', level: 88 },
        { name: 'Serverless Architecture', level: 85 },
        { name: 'Linux', level: 82 },
        { name: 'Git / Bitbucket', level: 87 },
      ],
      color: 'pink',
    },
    {
      title: 'DATA & DATABASES',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 82 },
        { name: 'Power BI', level: 85 },
        { name: 'Google Sheets / App Scripts', level: 92 },
      ],
      color: 'purple',
    },
    {
      title: 'SECURITY & TOOLS',
      skills: [
        { name: 'TrendMicro / Wazuh', level: 88 },
        { name: 'OpenSearch / Graylog', level: 85 },
        { name: 'MISP / Threat Intelligence', level: 80 },
        { name: 'VirusTotal / AbuseIPDB', level: 82 },
      ],
      color: 'cyan',
    },
  ];

  return (
    <section id="skills" className="skills">
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
            TECH ARSENAL
            <span className="title-bracket">{']'}</span>
          </h2>
          <div className="title-underline" />
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`skill-category ${category.color}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
