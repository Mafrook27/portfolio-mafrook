import React from 'react';
import './Skills.css';
import Aurora from './Aurora';
import BounceCard from './BounceCard';
import { programming, frameworks, tools } from './../data.js';

const getLevelInfo = (pct) => {
  if (pct >= 80) return { label: 'Expert',       color: '#0d9488', bg: 'rgba(13, 148, 136, 0.1)' };
  if (pct >= 65) return { label: 'Advanced',     color: '#059669', bg: 'rgba(5, 150, 105, 0.1)' };
  if (pct >= 50) return { label: 'Intermediate', color: '#57534e', bg: 'rgba(87, 83, 78, 0.1)' };
  return            { label: 'Learning',         color: '#78716c', bg: 'rgba(120, 113, 108, 0.1)' };
};

const ProgressRing = ({ pct, color, size = 40 }) => {
  const r = (size - 5) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <svg width={size} height={size} className="progress-ring" style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="4" />
      <circle
        cx={size/2} cy={size/2} r={r}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={`${circ}`}
        strokeDashoffset={circ - dash}
        style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s' }}
      />
    </svg>
  );
};

const SkillCard = ({ skill, catConfig, index }) => {
  const Icon = skill.icon;
  const level = getLevelInfo(skill.percentage);

  return (
    <BounceCard
      className={`skill-bc ${catConfig.cardClass}`}
      rotation={0}
    >
      <div className="skill-bc-icon-zone" style={{ background: catConfig.iconBg }}>
        <Icon className="skill-bc-icon" style={{ color: catConfig.iconColor }} />
        <div className="skill-bc-ring-wrap">
          <ProgressRing pct={skill.percentage} color={catConfig.ringColor} size={38} />
          <span className="skill-bc-pct" style={{ color: catConfig.iconColor }}>{skill.percentage}%</span>
        </div>
      </div>

      <div className="skill-bc-body">
        <span className="skill-bc-name">{skill.label}</span>
        <span
          className="skill-bc-level"
          style={{ color: level.color, background: level.bg }}
        >
          {level.label}
        </span>
      </div>
    </BounceCard>
  );
};

const catConfigs = {
  lang: {
    cardClass:  'bc-lang',
    iconBg:     'linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)',
    iconColor:  '#0d9488',
    ringColor:  '#14b8a6',
    accent:     '#0d9488',
    label:      'Languages',
  },
  frame: {
    cardClass:  'bc-frame',
    iconBg:     'linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 100%)',
    iconColor:  '#57534e',
    ringColor:  '#78716c',
    accent:     '#57534e',
    label:      'Frameworks',
  },
  tools: {
    cardClass:  'bc-tools',
    iconBg:     'linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)',
    iconColor:  '#0891b2',
    ringColor:  '#06b6d4',
    accent:     '#0891b2',
    label:      'Tools & Platforms',
  },
};

const CategoryBlock = ({ config, skills }) => {
  return (
    <div className="skill-category-block" data-aos="fade-up">
      <div className="skill-cat-header">
        <div className="skill-cat-title-row">
          <span className="skill-cat-dot" style={{ background: config.accent }} />
          <h3 className="skill-cat-title">{config.label}</h3>
          <span className="skill-cat-count">{skills.length}</span>
        </div>
      </div>

      <div className="skill-bc-grid">
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} catConfig={config} index={i} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const total = programming.length + frameworks.length + tools.length;
  const allSkills = [...programming, ...frameworks, ...tools];
  const topAvg = Math.round(allSkills.reduce((s, x) => s + x.percentage, 0) / allSkills.length);

  return (
    <section className="skills-section">
      <Aurora opacity={0.15} />
      <div className="s-container" style={{ position: 'relative', zIndex: 1 }}>

        <div className="section-heading-line" data-aos="fade-up">
          <h2 className="section-heading">Skills & Technologies</h2>
        </div>

        <div className="skills-stats-row" data-aos="fade-up" data-aos-delay="100">
          <div className="skills-stat">
            <span className="skills-stat-num">{total}</span>
            <span className="skills-stat-lbl">Technologies</span>
          </div>
          <div className="skills-stat-divider" />
          <div className="skills-stat">
            <span className="skills-stat-num">{topAvg}%</span>
            <span className="skills-stat-lbl">Avg. Proficiency</span>
          </div>
          <div className="skills-stat-divider" />
          <div className="skills-stat">
            <span className="skills-stat-num">3</span>
            <span className="skills-stat-lbl">Categories</span>
          </div>
        </div>

        <CategoryBlock config={catConfigs.lang}  skills={programming} />
        <CategoryBlock config={catConfigs.frame} skills={frameworks}  />
        <CategoryBlock config={catConfigs.tools} skills={tools}       />
      </div>
    </section>
  );
};

export default Skills;
