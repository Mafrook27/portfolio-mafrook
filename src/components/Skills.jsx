


import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { programming, frameworks, tools } from './../data.js';
const Skills = () => {

    AOS.init({
      duration: 800,
      offset: 120,
      delay: 100,
      
    
      anchorPlacement: 'top-bottom'
    },[]);

    
 

    


  return (
    <section className="skills-section" id="skills">
      <div className="s-container">
        <h2 data-aos="fade-right">Skills</h2>
        <SkillSection 
          title="Programming Languages" 
          skills={programming} 
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <SkillSection 
          title="Frameworks & Libraries" 
          skills={frameworks}
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <SkillSection 
          title="Tools & Platforms" 
          skills={tools}
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>
    </section>
  );
};

export default Skills;








const SkillSection = ({ title, skills }) => (
  <div className="skill-category">
    <h3   data-aos="fade-right">{title}</h3>
    <div className="skills-grid">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={index}
            className="skill-card white-box"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Icon className="skill-icon" />
            <span className="skill-label">{skill.label}</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                 style={{ "--target-width": `${skill.percentage}%` }}
              />
            </div>
            <span className="skill-percent">{skill.percentage}%</span>
          </div>
        );
      })}
    </div>
  </div>
);


