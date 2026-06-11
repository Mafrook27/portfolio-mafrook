import React, { useEffect } from 'react';
import './Skills.css';
import Aurora from './Aurora';
import TiltCard from './TiltCard';
import { programming, frameworks, tools } from './../data.js';

const getLevelInfo = (pct) => {
  if (pct >= 80) return { label: 'Expert',       dotClass: 'level-expert',    textClass: 'level-expert-text'   };
  if (pct >= 65) return { label: 'Advanced',     dotClass: 'level-advanced',  textClass: 'level-advanced-text' };
  if (pct >= 50) return { label: 'Intermediate', dotClass: 'level-mid',       textClass: 'level-mid-text'      };
  return            { label: 'Learning',         dotClass: 'level-beginner',  textClass: 'level-beginner-text' };
};

const SkillCard = ({ skill, catClass, featured }) => {
  const Icon = skill.icon;
  const { label, dotClass, textClass } = getLevelInfo(skill.percentage);

  return (
    <TiltCard
      className={`skill-card ${catClass} ${featured ? 'skill-card--featured' : ''}`}
      maxTilt={featured ? 5 : 8}
      scaleOnHover={1.03}
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
        <div className="progress-fill" style={{ '--target-width': `${skill.percentage}%` }} />
      </div>
      {featured && <div className="skill-featured-shine" />}
    </TiltCard>
  );
};

const SkillSection = ({ title, skills, catClass, badgeClass, emoji }) => {
  const sorted = [...skills].sort((a, b) => b.percentage - a.percentage);

  return (
    <div className={`skill-category ${catClass}`}>
      <div className="skill-category-header">
        <span className={`skill-category-badge ${badgeClass}`}>
          <span>{emoji}</span> {title}
        </span>
        <div className="skill-category-line" />
        <span className="skill-category-count">{skills.length} skills</span>
      </div>

      <div className="skills-bento">
        {sorted.map((skill, i) => (
          <SkillCard
            key={i}
            skill={skill}
            catClass={catClass}
            featured={i === 0}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section">
      <Aurora opacity={0.3} />
      <div className="s-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-heading-line">
          <h2 className="section-heading">Skills & Technologies</h2>
        </div>
        <SkillSection title="Languages"        emoji="🧑‍💻" skills={programming} catClass="cat-lang"  badgeClass="lang"  />
        <SkillSection title="Frameworks"       emoji="⚙️"  skills={frameworks}  catClass="cat-frame" badgeClass="frame" />
        <SkillSection title="Tools & Platforms" emoji="🛠"  skills={tools}       catClass="cat-tools" badgeClass="tools" />
      </div>
    </section>
  );
};

export default Skills;
