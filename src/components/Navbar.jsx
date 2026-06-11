import React, { useState, useEffect, useRef, createRef } from 'react';
import './Navbar.css';

const Navbar = ({items}) => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    const next = !mobileMenuOpen;
    setMobileMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 68;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    if (mobileMenuOpen) toggleMobileMenu();
  };

  return (
    <>
      <nav className={`nav-menu ${visible ? 'nav-visible' : 'nav-hidden'}`}>
        <div className="nav-inner">
          <div className="desktop-menu-logo">
            <span className="logo-text">
              &lt;Mafrook <span className="wave">👋</span> /&gt;
            </span>
          </div>

          <div className="desktop-menu">
            {items.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  className={`nav-link ${active === index ? 'active' : ''}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(index);
                    scrollToSection(sectionId);
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {items.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              return (
                <a
                  key={`mobile-${item.name}`}
                  className={`mobile-nav-link ${active === index ? 'active' : ''}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(index);
                    scrollToSection(sectionId);
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
