import { assets } from "../../assets/assets";
export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: assets.project1,
    desc: "Personal portfolio",
    tech: ["HTML5", "CSS3", "ReactJS", "Motion"],
    live: "",
    github: "",
  },
  {
    id: 2,
    title: "Cyborg Gaming Website",
    image: assets.project2,
    desc: "Gaming website with multiple pages",
    tech: ["HTML5", "CSS3", "ReactJS", "react-router"],
    live: "",
    github: "",
  },
  {
    id: 3,
    title: "agency website",
    image: assets.project3,
    desc: "Creative agency website with Dark Mode",
    tech: ["HTML5", "CSS3", "ReactJS", "Tailwind", "Motion", "Web3Forms"],
    live: "https://agenct-ai.netlify.app/",
    github: "https://github.com/karim1safan/agency.ai",
  },
  {
    id: 6,
    title: "Todo List App",
    image: assets.project6,
    desc: "A simple todo list app built with ReactJS with Local Storage",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://react-todo-app-tasks.netlify.app/",
    github: "https://github.com/karim1safan/React-Todo-App",
  }
];
