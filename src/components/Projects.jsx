import React from 'react';


import './Projects.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { projects } from './../data.js';


const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="head">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up">
            <div className="project-image-wrapper">
              <img src={project.src} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
             <div className="tec-wrapper">
              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn1"
                >
                  <i className="fa-brands fa-github" style={{ marginRight: '8px' }}></i>
                  Source
                </a>
            
                </div>
            
               <ul className='tech'>
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
