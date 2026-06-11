import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects } from './../data.js';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  const [featured, ...rest] = projects;

  return (
    <section className="projects-section">
      <div className="s-container">
        <div className="section-heading-line" data-aos="fade-up">
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        {/* ── Featured (first) project ── */}
        <div className="project-featured" data-aos="fade-up">
          <div className="project-featured-image">
            <img src={featured.src} alt={featured.title} />
          </div>
          <div className="project-featured-content">
            <span className="project-featured-tag">⭐ Featured Work</span>
            <span className="project-number">01</span>
            <h2>{featured.title}</h2>
            <p>{featured.desc}</p>
            <div className="project-featured-footer">
              <ul className="project-featured-tech">
                {featured.technologies.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-arrow"
              >
                View Source ↗
              </a>
            </div>
          </div>
          <span className="project-featured-bg-num" aria-hidden>01</span>
        </div>

        {/* ── Remaining projects grid ── */}
        <div className="projects-grid">
          {rest.map((project, index) => (
            <div
              className="project-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image-wrapper">
                <img src={project.src} alt={project.title} className="project-image" />
                <div className="project-image-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-overlay-link"
                    onClick={e => e.stopPropagation()}
                  >
                    View Source ↗
                  </a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-info-top">
                  <h3>{project.title}</h3>
                  <span className="project-number">0{index + 2}</span>
                </div>
                <p>{project.desc}</p>
                <div className="project-footer">
                  <ul className="tech">
                    {project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}
                  </ul>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn1"
                  >
                    Source ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
