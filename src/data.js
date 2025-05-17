
import { FaJava, FaJs,  FaPython, FaReact, FaBootstrap, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiFirebase, SiMysql, SiExpress } from 'react-icons/si';
import { BsFileBarGraph } from "react-icons/bs";
import { IoLogoHtml5,IoLogoCss3  } from "react-icons/io";

import img1 from '../src/project-images/png-port.PNG';
import img2 from '../src/project-images/form.PNG';
import img3 from '../src/project-images/bank.png';



export const socialLinks = [
    {
        name: 'GitHub',
        img: './logos/github.svg',
        link: 'https://github.com/Mafrook27'
    }
    ,
    {
        name: 'LinkedIn',
        img: './logos/linkedin.svg',
        link: 'https://www.linkedin.com/in/k-mafrook/'
    },

 
    {
        name: 'Reddit',
         img: './logos/reddit.svg',
        link: 'https://www.reddit.com/user/No_Instruction7681'
    }
    ,
    {
       name:'whatsapp',
       img:'./logos/what.svg',
       link:'https://wa.me/918925661541'


    }
  
  
  
  ];



// skillsData.js

export const programming = [
  { label: 'Java', percentage: 85, icon: FaJava },
  { label: 'JavaScript', percentage: 70, icon: FaJs },
  { label: 'HTML', percentage: 90, icon: IoLogoHtml5},
  { label: 'CSS', percentage: 85, icon: IoLogoCss3  },
  { label: 'Python', percentage: 50, icon: FaPython },
  { label: 'SQL (MySQL)', percentage: 50, icon: SiMysql }
];

export const frameworks = [
  { label: 'React.js', percentage: 70, icon: FaReact },
  { label: 'Express.js', percentage: 55, icon: SiExpress },
  { label: 'MongoDB', percentage: 70, icon: SiMongodb },
  { label: 'Tailwind CSS', percentage: 70, icon: SiTailwindcss },
  { label: 'Bootstrap', percentage: 70, icon: FaBootstrap }
];

export const tools = [
  { label: 'Git', percentage: 70, icon: FaGitAlt },
  { label: 'Firebase', percentage: 70, icon: SiFirebase },
  { label: 'Linux (Parrot OS)', percentage: 70, icon: FaLinux },
  { label: 'Power BI + MS Office Suite', percentage: 75, icon:BsFileBarGraph }
];

export const projects = [
  {
    title: 'porofolio website',
    desc: 'A stylish and responsive event management website designed to facilitate event bookings and information sharing.',
    src: img1,
    github: '#home',
    technologies: ['HTML', 'CSS', 'JavaScript','react']
  
  },
 {
    title: 'Form Designer',
    desc:'A dynamic web app that lets users create and customize HTML form elements interactively using DOM manipulation.and genrate customizable layout',
    src:img2,
    github: 'https://github.com/Mafrook27/formdesigner-tool/tree/main/webpage1',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
 {
    title: 'Banking System',
    desc:
      'A secure banking app using Python, Flask, OpenCV for face login. Features account creation, transactions & auth.',
    src: img3,
    github: 'https://github.com/Mafrook27/banksystem/blob/main/App.py',
    technologies: ['Python', 'Flask', 'OpenCV', 'MySQL']
  },
];












export const certifications = [
  {
    title: 'AWS Cloud Essentials',
    description: 'AWS Cloud Essentials certification demonstrating foundational cloud knowledge.',
    url: 'https://www.credly.com/badges/0eb03415-0196-484c-8669-9705d01fd3f1/linked_in_profile',
  },
    {
    title: 'Web Development Certificate',
    description: 'Completed the Responsive Web Design certification from freeCodeCamp, covering HTML, CSS, Flexbox, Grid, accessibility, and responsive design principles.',
    url: 'https://www.linkedin.com/in/k-mafrook/', // Replace with your real URL
  },
  {
    title: 'Java (Gold Badge) – HackerRank',
    description: 'Earned a Gold Badge in Java on HackerRank, showcasing advanced problem-solving skills and object-oriented programming proficiency.',
    url: 'https://www.hackerrank.com/profile/mafrooktkc', // Replace with your real URL
  }
];

