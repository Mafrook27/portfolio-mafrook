import React, { useState, useEffect, useRef, createRef } from 'react';
import gsap from 'gsap';
import './Navbar.css';

const Navbar = ({items}) => {

    const menuRef = useRef();
  const indicatorRef = useRef();
  const itemRefs = useRef(items.map(() => createRef()));
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
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
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const scrollToSection = (id, duration = 1000) => {
    const element = document.getElementById(id);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  const animate = () => {
    if (!menuRef.current || !indicatorRef.current || 
        !itemRefs.current[active] || !itemRefs.current[active].current) return;
        
    const menuOffset = menuRef.current.getBoundingClientRect();
    const activeItem = itemRefs.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();
    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: '#000',
      ease: 'power3.out',
      duration: 0.4,
    };
    gsap.to(indicatorRef.current, settings);
  };

  useEffect(() => {
    animate();
    window.addEventListener('resize', animate);
    return () => window.removeEventListener('resize', animate);
  }, [active]);
  return (
    <>
      <nav 
        className={`nav-menu ${visible ? 'nav-visible' : 'nav-hidden'}`} 
        ref={menuRef}
      >
        {/* Mobile menu toggle button */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        {/* Desktop menu */}
        <div className="desktop-menu-wrapper">
        <div className="desktop-menu-logo">
         <h1 className="logo-text">{"<Mafrook👋/>"}</h1>
        </div>
        <div className="desktop-menu">
          {items.map((item, index) => {
            const sectionId = item.href.replace('#', '');
            return (
              <a
                key={item.name}
                ref={itemRefs.current[index]}
                className={`nav-link ${active === index ? 'active' : ''}`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(index);
                  scrollToSection(sectionId);
                }}
                onMouseEnter={() => setActive(index)}
              >
                {item.name}
              </a>
            );
          })}
         
        </div>

         {/* <div ref={indicatorRef} className="nav-indicator" /> */}
        </div>
        
        {/* Mobile menu overlay */}
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
  )
}

export default Navbar

