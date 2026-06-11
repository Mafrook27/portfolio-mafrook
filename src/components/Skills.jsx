import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { programming, frameworks, tools } from './../data.js';

const getLevelInfo = (pct) => {
  if (pct >= 80) return { label: 'Expert',      dotClass: 'level-expert',   textClass: 'level-expert-text' };
  if (pct >= 65) return { label: 'Advanced',    dotClass: 'level-advanced', textClass: 'level-advanced-text' };
  if (pct >= 50) return { label: 'Intermediate',dotClass: 'level-mid',      textClass: 'level-mid-text' };
  return           { label: 'Learning',         dotClass: 'level-beginner', textClass: 'level-beginner-text' };
};

const SkillSection = ({ title, skills, catClass, badgeClass }) => (
  <div className={`skill-category ${catClass}`} data-aos="fade-up">
    <div className="skill-category-header">
      <span className={`skill-category-badge ${badgeClass}`}>{title}</span>
      <div className="skill-category-line" />
    </div>
    <div className="skills-grid">
      {skills.map((skill, i) => {
        const Icon = skill.icon;
        const { label, dotClass, textClass } = getLevelInfo(skill.percentage);
        return (
          <div
            key={i}
            className="skill-card"
            data-aos="fade-up"
            data-aos-delay={i * 40}
          >
            <div className="skill-card-top">
              <div className="skill-icon-wrap">
                <Icon className="skill-icon" />
              </div>
              <span className={`skill-level-dot ${dotClass}`} title={label} />
            </div>
            <span className="skill-label">{skill.label}</span>
            <div className="skill-meta">
              <span className={`skill-level-label ${textClass}`}>{label}</span>
              <span className="skill-pct">{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ '--target-width': `${skill.percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  return (
    <section className="skills-section">
      <div className="s-container">
        <div className="section-heading-line" data-aos="fade-up">
          <h2 className="section-heading">Skills & Technologies</h2>
        </div>
        <SkillSection
          title="Programming Languages"
          skills={programming}
          catClass="cat-lang"
          badgeClass="lang"
        />
        <SkillSection
          title="Frameworks & Libraries"
          skills={frameworks}
          catClass="cat-frame"
          badgeClass="frame"
        />
        <SkillSection
          title="Tools & Platforms"
          skills={tools}
          catClass="cat-tools"
          badgeClass="tools"
        />
      </div>
    </section>
  );
};

export default Skills;
