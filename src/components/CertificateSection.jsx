import React, { useEffect } from 'react';
import AOS from 'aos';
import { certifications } from './../data.js';
import { FaAward } from 'react-icons/fa';
import 'aos/dist/aos.css';
import './Certificates.css';

const CertificateSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  return (
    <section className="certificates-section">
      <div className="s-container">
        <div className="section-heading-line" data-aos="fade-up">
          <h2 className="section-heading">Certifications</h2>
        </div>
        <div className="certificates-container">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <FaAward className="cert-icon" />
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
