import React, { useEffect } from "react";
import meReal from "./../profile-images/phtoo.png";
import { socialLinks } from "./../data.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  return (
    <header className="header-wrapper">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text" data-aos="fade-right">
            <div className="hero-eyebrow">Available for opportunities</div>
            <h1>
              Hello, I'm <span className="name-accent">Mafrook.</span>
              <br />
              <span className="stroke-text">Software Developer</span>
            </h1>
            <p>
              I'm an enthusiastic developer with a solid foundation in
              programming and problem-solving. I enjoy crafting innovative and
              user-friendly applications while continuously exploring new
              technologies to enhance my skills.
            </p>
            <div className="hero-actions">
              <div className="social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                  >
                    <button aria-label={social.name}>
                      <img src={social.img} alt={social.name} />
                    </button>
                  </a>
                ))}
              </div>
              <a
                href="/logos/resume-mafrook.pdf"
                download="Mafrook_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-image" data-aos="fade-left">
            <div className="hero-image-frame">
              <img src={meReal} alt="Mafrook" className="real-img" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
