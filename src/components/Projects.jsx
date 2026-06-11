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

        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              className={`project-featured ${index % 2 === 1 ? 'project-featured--reverse' : ''}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="project-featured-image">
                <img src={project.src} alt={project.title} />
              </div>

              <div className="project-featured-content">
                <div className="project-featured-meta">
                  <span className="project-featured-tag">
                    {index === 0 ? '⭐ Featured Work' : index === 1 ? '🛠 Side Project' : '🔐 Backend Project'}
                  </span>
                  <span className="project-number">0{index + 1}</span>
                </div>

                <h2>{project.title}</h2>
                <p>{project.desc}</p>

                <div className="project-featured-footer">
                  <ul className="project-featured-tech">
                    {project.technologies.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-arrow"
                  >
                    View Source ↗
                  </a>
                </div>
              </div>

              <span className="project-featured-bg-num" aria-hidden>0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
