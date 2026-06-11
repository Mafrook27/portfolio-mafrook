import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { programming, frameworks, tools } from './../data.js';

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
        <SkillSection title="Programming Languages" skills={programming} />
        <SkillSection title="Frameworks & Libraries" skills={frameworks} />
        <SkillSection title="Tools & Platforms" skills={tools} />
      </div>
    </section>
  );
};

const SkillSection = ({ title, skills }) => (
  <div className="skill-category" data-aos="fade-up">
    <h3 className="skill-category-title">{title}</h3>
    <div className="skills-grid">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div key={index} className="skill-card" data-aos="fade-up" data-aos-delay={index * 50}>
            <Icon className="skill-icon" />
            <span>{skill.label}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ "--target-width": `${skill.percentage}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Skills;
