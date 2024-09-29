import html from "../Assets/svg/html.svg";
import css from "../Assets/svg/css.svg";
import javascript from "../Assets/svg/javascript.svg";
import react from "../Assets/svg/react.svg";
import typescript from "../Assets/svg/typescript.svg";
import materialui from "../Assets/svg/materialui.svg";
import c from "../Assets/svg/c.svg";
import cpp from "../Assets/svg/cplusplus.svg";
import java from "../Assets/svg/java.svg";
import git from "../Assets/svg/git.svg";
import mysql from "../Assets/svg/mysql.svg";
import vite from "../Assets/svg/vitejs.svg";
import csharp from "../Assets/svg/csharp.svg";

import portfolioImage from "../Assets/projectImages/portfolioImage.jpg";
import todoappImage from "../Assets/projectImages/todoappImage.jpg";
import quoteGeneratorImage from "../Assets/projectImages/quoteGeneratorImage.png";

export const sections = [
    {
        id: 1,
        name: "Home",
        url: "home",
    },
    {
        id: 2,
        name: "About",
        url: "about",
    },
    {
        id: 3,
        name: "Skills",
        url: "skills",
    },
    {
        id: 4,
        name: "Projects",
        url: "projects",
    }
];

export const skills = [
    {
        id: 1,
        name: "HTML",
        image: html, 
    },
    {
        id: 2,
        name: "CSS",
        image: css, 
    },
    {
        id: 3,
        name: "JavaScript",
        image: javascript, 
    },
    {
        id: 4,
        name: "React",
        image: react, 
    },
    {
        id: 5,
        name: "TypeScript",
        image: typescript, 
    },
    {
        id: 6,
        name: "MaterialUI",
        image: materialui, 
    },
    {
        id: 7,
        name: "C",
        image: c, 
    },
    {
        id: 8,
        name: "C++",
        image: cpp, 
    },
    {
        id: 9,
        name: "C#",
        image: csharp, 
    }, 
    {
        id: 10,
        name: "Java",
        image: java, 
    },
    {
        id: 11,
        name: "Git",
        image: git, 
    },
    {
        id: 12,
        name: "MySQL",
        image: mysql, 
    },
    {
        id: 13,
        name: "Vite",
        image: vite, 
    },
];


export const projects = [
    {
      id: 1,
      image: portfolioImage,
      title: "Portfolio",
      detail: "A portfolio website built using Vite-React in TypeScript and used MUI, framer.motion and other packages.",
      demo: "https://adithyay19.github.io/portfolio/",
      github: "https://github.com/adithyay19/portfolio",
    },
    {
      id: 2,
      image: todoappImage,
      title: "To-Do App",
      detail: "A to-do website build using React and vanilla CSS.",
      demo: "https://adithyay19.github.io/toDoApp/",
      github: "https://github.com/adithyay19/toDoApp",
    },
    {
      id: 3,
      image: quoteGeneratorImage,
      title: "Quote Generator",
      detail: "A random quote generator website build using React and vanilla CSS.",
      demo: "https://adithyay19.github.io/quoteGenerator/",
      github: "https://github.com/adithyay19/quoteGenerator",
    }
  ];