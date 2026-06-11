import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects } from './../data.js';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  return (
    <section className="projects-section">
      <div className="s-container">
        <div className="section-heading-line" data-aos="fade-up">
          <h2 className="section-heading">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
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
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-footer">
                  <ul className="tech">
                    {project.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn1"
                  >
                    Source
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
