import React from 'react';
import Contact from './Contact';
import ReactionTimer from './ReactionTimer';
import './ContactAndGame.css';
import { socialLinks } from './../data.js';

const ContactAndGame = () => {
  return (
    <>
      <section className="contact-section">
        <div className="s-container">
          <div className="section-heading-line" data-aos="fade-up">
            <h2 className="section-heading">Get In Touch</h2>
          </div>
          <div className="contact-grid">
            <Contact />
            <ReactionTimer />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">&lt;Mafrook /&gt;</div>
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
              >
                <button aria-label={social.name}>
                  <img src={social.img} alt={social.name} className="social-icon-f" />
                </button>
              </a>
            ))}
          </div>
          <div className="footer-divider" />
          <span className="footer-email">mafrooktkc@gmail.com</span>
          <span className="footer-copy">© {new Date().getFullYear()} Mafrook. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};

export default ContactAndGame;
