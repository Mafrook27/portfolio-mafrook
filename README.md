# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

 Developer Portfolio – React + Vite
This is a fully responsive animated developer portfolio built using React and Vite. It’s designed to be lightweight, fast, and visually appealing while showcasing my skills, projects, and achievements.

🌟 Key Features
⚡ Fast & Modern Stack: Built with React + Vite for optimal performance

🎨 Hero Section: Eye-catching intro with background animations and scroll-down effects

💬 About Me: Personal bio and summary of my developer journey

📊 Skills: Anime.js-powered live progress bars to highlight tech proficiency

🛠️ Projects: Cards displaying recent projects with brief descriptions and tech used

🏅 Certificates: List of achievements and certifications

📞 Contact Me: Includes phone, social media links, and other contact details

❤️ Like Button: Heart icon with an animated counter effect

📄 Resume Download: Resume available via button in navbar

🧭 Single Page Navigation: No React Router — smooth scroll-based section jumps

✨ Custom Animations: Enhanced UI using libraries like Anime.js or GSAP

🧑‍💻 Tech Stack
React.js (Vite)

Tailwind CSS (offline setup)

Anime.js / GSAP

Icons (Lucide, Font Awesome, etc.)

🔧 Project Setup
bash
Copy
Edit
npm install
npm run dev
📂 Project Structure (Simplified)
bash
Copy
Edit
src/
├── assets/             # Images, icons, resume PDF
├── components/         # Navbar, Hero, Skills, Projects, Contact, etc.
├── data/               # Skill and project data (JSON/JS)
├── App.jsx             # Root component
├── main.jsx            # Entry point
└── index.css           # Tailwind base styles
