
import CertificateSection from './components/CertificateSection';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects  from './components/Projects';
import ContactAndGame from'./components/ContactAndGame';
const App = () => {

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },

    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

return (
<>
<section className="app-wrapper">

<Navbar items={navItems}/>
      <section id='home'>
    

        <Header/>

      </section>
      
      <section id='skills'>
     
   <Skills/>

    
   
      <CertificateSection/>
      <Education/>
      </section>
      <section id='projects'>
    <Projects/>
      </section>
      <section id='contact'>
        <ContactAndGame/>
       
      </section>

</section>
</> 
  
  )
}

export default App