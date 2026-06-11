import { useEffect } from 'react';
import CertificateSection from './components/CertificateSection';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactAndGame from './components/ContactAndGame';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 50,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
    });
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <Navbar items={navItems} />
      <main>
        <section id="home">
          <Header />
        </section>
        <section id="skills">
          <Skills />
          <CertificateSection />
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactAndGame />
        </section>
      </main>
    </>
  );
};

export default App;
