import React from 'react';
import Contact from './Contact';
import ReactionTimer from './ReactionTimer';
import './ContactAndGame.css';
import { socialLinks } from './../data.js';

const ContactAndGame = () => {
return (
    <>
        <h2 className='tex'>Contact Me</h2>
        <div className="container-wrapper">
            <Contact   />
            <ReactionTimer  />
        </div>
        <div className="footer">
            <span>&copy; Mafrooktkc@gmail.com</span>
            <div className="social-links-f">
         {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button>
                    <img 
                      src={social.img} 
                      alt={social.name} 
                      className="social-icon-f" 
                    />
                  </button>
                </a>
                
              ))}
            </div>
        </div>
    </>
);
};

export default ContactAndGame;
