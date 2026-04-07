import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming',
    icon: '{ }',
    skills: [
      { name: 'Python',   level: 90 },
      { name: 'Java',     level: 85 },
      { name: 'C#',       level: 80 },
      { name: 'VB.NET',   level: 85 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    skills: [
      { name: 'AWS (Lambda, S3, DynamoDB)', level: 88 },
      { name: 'Serverless Architecture',    level: 85 },
      { name: 'Linux',                      level: 82 },
      { name: 'Git / Bitbucket',            level: 87 },
    ],
  },
  {
    title: 'Data & Databases',
    icon: '⊞',
    skills: [
      { name: 'MySQL',                      level: 90 },
      { name: 'MongoDB',                    level: 82 },
      { name: 'Power BI',                   level: 85 },
      { name: 'Google Sheets / App Scripts', level: 92 },
    ],
  },
  {
    title: 'Security & Tools',
    icon: '⚔',
    skills: [
      { name: 'TrendMicro / Wazuh',         level: 88 },
      { name: 'OpenSearch / Graylog',       level: 85 },
      { name: 'MISP / Threat Intelligence', level: 80 },
      { name: 'VirusTotal / AbuseIPDB',     level: 82 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-desc">Technologies and tools I work with regularly.</p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              className="skill-group"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <div className="skill-group__header">
                <span className="skill-group__icon">{cat.icon}</span>
                <h3 className="skill-group__title">{cat.title}</h3>
              </div>

              <div className="skill-group__list">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item__meta">
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__pct">{skill.level}%</span>
                    </div>
                    <div className="skill-item__track">
                      <motion.div
                        className="skill-item__fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.1 + skillIdx * 0.08 + 0.2,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
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
