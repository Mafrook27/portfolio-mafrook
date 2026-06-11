import React from 'react';
import './Education.css';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import TiltCard from './TiltCard';

const Education = () => {
  return (
    <section className="education-section">
      <div className="s-container">
        <div className="section-heading-line">
          <h2 className="section-heading">Education</h2>
        </div>

        <TiltCard className="education-card" maxTilt={4} scaleOnHover={1.01}>
          <div className="edu-top">
            <div className="edu-icon-col">
              <div className="edu-icon-wrap">
                <FaGraduationCap />
              </div>
              <div className="edu-timeline-line" />
            </div>

            <div className="edu-body">
              <div className="edu-header-row">
                <div>
                  <h3 className="education-title">Bachelor of Engineering</h3>
                  <p className="edu-field">Computer Science & Engineering</p>
                </div>
                <div className="education-badge">🎓 First Class</div>
              </div>

              <p className="education-description">
                First class graduate with a strong focus on software development, web technologies,
                and cloud fundamentals. Completed B.E. in Computer Science and Engineering in 2024.
              </p>

              <div className="education-meta">
                <span className="education-meta-item">
                  <FaUniversity className="meta-icon" />
                  E.G.S. Pillay Engineering College
                </span>
                <span className="education-meta-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  Nagapattinam, Tamil Nadu, India
                </span>
                <span className="education-meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  Graduated 2024
                </span>
              </div>

              <div className="edu-gpa-row">
                <div className="edu-gpa-bar-wrap">
                  <div className="edu-gpa-label">GPA</div>
                  <div className="edu-gpa-track">
                    <div className="edu-gpa-fill" style={{ '--gpa-width': '81%' }} />
                  </div>
                  <div className="edu-gpa-value">8.1 / 10</div>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default Education;
