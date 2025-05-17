// import meLego from './../profile-images/lego-ph.png';
import React, { useEffect } from "react";

import meReal from "./../profile-images/phtoo.png";
import { socialLinks } from "./../data.js";
import AOS from "aos";
import "./Header.css";
const Header = () => {
  useEffect(() => {
    AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    delay: 0,
    anchorPlacement: 'top-bottom',
    useClassNames: true,
    disableMutationObserver: false,
    offset: 120
    });
      window.addEventListener('scroll', function() {
    AOS.refresh();
  });
  }, []);

  return (
    <header className="header-wrapper">
      <section className="hero-section">
        <div className="container hero-container">
          <div
            className="hero-text"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <h1>
              Hello I'm <span className="bold">Mafrook.</span>
              <br />
              <span className="bold">
                Software{" "}
                <span
                  className="stroke-text"
                  data-aos="fade-down"
                  data-aos-duration="5000"
                >
                  Developer
                </span>
              </span>
            </h1>
            <p>
              I'm an enthusiastic developer with a solid foundation in
              programming and problem-solving. I enjoy crafting innovative and
              user-friendly applications while continuously exploring new
              technologies to enhance my skills. I'm dedicated to bringing ideas
              to life with technology.
            </p>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button data-aos="zoom-in-right">
                    <img
                      src={social.img}
                      alt={social.name}
                      className="social-icon"
                    />
                  </button>
                </a>
              ))}
              <a
                href="/logos/resume-mafrook.pdf"
                download="Mafrook_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="resume-btn">
                  <b className="resu-text">Resume</b>
                </button>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              {/* <img src={meLego} alt="Madesh LEGO" className="lego-img transition-img" /> */}
              <img
                src={meReal}
                alt="Madesh Real"
                data-aos="fade-down-left"
                data-aos-duration="5000"
                 data-aos-mirror="true"
                data-aos-offset="300"
                className="real-img transition-img"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
