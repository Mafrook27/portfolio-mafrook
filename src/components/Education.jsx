
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Education = () => {
  return (
  
    <section className="education-section" id="education">
         <h2>🎓 Education</h2>
      <div className="education-container" data-aos="fade-up">

        <div className="education-info">
          <h3 className="education-title">Bachelor of Engineering (CSE) - 2024</h3>
          <p className="education-description">
            First class Graduate, completed B.E. in Computer Science and Engineering in 2024.</p>
     <p className="education-description">
  Graduated from college with a strong focus on software development, web technologies, and cloud fundamentals.
   </p>
   <p className="education-desc">E.G.S. Pillay Engineering College</p>
      <p className="education-desc">Nagapattinam, Tamil Nadu, India</p>
       <p className="education-desc">GPA: 8.1</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
