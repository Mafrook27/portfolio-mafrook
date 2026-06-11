import React, { useEffect } from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  return (
    <section className="education-section">
      <div className="s-container">
        <div className="section-heading-line" data-aos="fade-up">
          <h2 className="section-heading">Education</h2>
        </div>
        <div className="education-container" data-aos="fade-up" data-aos-delay="100">
          <div className="education-icon-wrapper">
            <FaGraduationCap />
          </div>
          <div className="education-info">
            <h3 className="education-title">Bachelor of Engineering — Computer Science</h3>
            <p className="education-description">
              First class graduate with a strong focus on software development, web technologies,
              and cloud fundamentals. Completed B.E. in Computer Science and Engineering in 2024.
            </p>
            <div className="education-meta">
              <span className="education-meta-item">
                <span className="meta-label">Institution:</span>
                E.G.S. Pillay Engineering College
              </span>
              <span className="education-meta-item">
                <span className="meta-label">Location:</span>
                Nagapattinam, Tamil Nadu, India
              </span>
              <span className="education-meta-item">
                <span className="meta-label">Year:</span>
                2024
              </span>
            </div>
            <div className="education-badge">
              🎓 GPA: 8.1 / 10 — First Class
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
