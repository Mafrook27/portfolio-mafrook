import React, { useEffect } from "react";
import meReal from "./../profile-images/phtoo.png";
import { socialLinks } from "./../data.js";
import Aurora from "./Aurora";
import BlurText from "./BlurText";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-wrapper">
      <section className="hero-section">
        <Aurora opacity={0.55} />

        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot" />
              Available for opportunities
            </div>

            <h1>
              <BlurText text="Hello, I'm" tag="span" className="hero-line-plain" delayMs={55} />
              {' '}
              <BlurText text="Mafrook." tag="span" className="name-accent hero-line-name" delayMs={55} threshold={0.05} />
              <br />
              <BlurText text="Software Developer" tag="span" className="stroke-text" delayMs={48} threshold={0.05} />
            </h1>

            <p className="hero-desc">
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
                <span className="resume-btn-arrow">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-ring hero-ring-outer" />
            <div className="hero-ring hero-ring-inner" />
            <div className="hero-image-frame">
              <img src={meReal} alt="Mafrook" className="real-img" />
            </div>
            <div className="hero-image-badge">
              <span>💻</span>
              <span>Open to Work</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden>
          <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        </div>
      </section>
    </header>
  );
};

export default Header;
