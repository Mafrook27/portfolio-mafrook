import React, { useEffect, useRef } from 'react';
import AOS from 'aos'; // Update import to use capital AOS
import { certifications } from './../data.js';
import { FaAward } from 'react-icons/fa';
import 'aos/dist/aos.css';
import './Certificates.css';

const CertificateSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initialize AOS only for elements within this component
    const elements = sectionRef.current.querySelectorAll('[data-aos]');
    elements.forEach(element => {
      AOS.init({
        duration: 1000,
        once: false, // Animation will repeat
        mirror: true,
        startEvent: 'DOMContentLoaded',
        offset: 120,
        delay: 100,
      });
    });

    // Cleanup function
    return () => {
      elements.forEach(element => {
        element.removeAttribute('data-aos-init');
      });
    };
  }, []);

  return (
    <section className="certificates-section" ref={sectionRef}>
      <h2>🎓 Certifications</h2>
      <div className="certificates-container">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
            data-aos="fade-right"
            data-aos-duration="1000"
  data-aos-delay={index * 300} // Stagger effect
  data-aos-once="false">
            <FaAward className="cert-icon" />
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
