import css from "./image/css.svg";
import tailwind from "./image/tailwind.svg";
import js from "./image/js.svg";
import react from "./image/react.svg";
import python from "./image/python.svg";
import nodejs from "./image/nodejs.svg";
import express from "./image/express.svg";
import flask from "./image/Flask.svg";
import mysql from "./image/mysql.svg";
import mongodb from "./image/mongodb.svg";
import firebase from "./image/firebase.svg";
import git from "./image/icons8-git.svg";
import github from "./image/icons8-github.svg";
import vercel from "./image/vercel-icon-svgrepo-com.svg";
import render from "./image/Render Symbol SVG.svg";
import onesignal from "./image/icons8-onesignal.svg";
import emailjs from "./image/EmailJS.svg";

export const Frontend = [
    {
      imageLink: css,
      h1Title: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      imageLink: tailwind,
      h1Title: "TailwindCSS",
      link: "https://tailwindcss.com/"
    },
    {
      imageLink: js,
      h1Title: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      imageLink: react,
      h1Title: "React",
      link: "https://react.dev/"
    }
  ];

export const Backend = [
    {
      imageLink: python,
      h1Title: "Python",
      link: "https://www.python.org/"
    },
        
    {
      imageLink: flask,
      h1Title: "Flask",
      link: "https://flask.palletsprojects.com/",
      shouldInvert: false
    },
    {
      imageLink: nodejs,
      h1Title: "NodeJS",
      link: "https://nodejs.org/en"
    }
    ];
    
    export const Database = [
    {
      imageLink: mysql,
      h1Title: "MySQL",
      link: "https://www.mysql.com/"
    },
    {
      imageLink: mongodb,
      h1Title: "MongoDB",
      link: "https://www.mongodb.com/"
    },
    {
      imageLink: firebase,
      h1Title: "Firebase",
      link: "https://firebase.google.com/"
    }
  ];

export const Tools = [
    {
      imageLink: git,
      h1Title: "Git",
      link: "https://git-scm.com/"
    },
    {
      imageLink: github,
      h1Title: "GitHub",
      link: "https://github.com/",
      shouldInvert: true
    },
    {
      imageLink: vercel,
      h1Title: "Vercel",
      link: "https://vercel.com/",
      shouldInvert: true
    },
    {
      imageLink: render,
      h1Title: "Render",
      link: "https://render.com/",
      shouldInvert: true
    },
    {
      imageLink: onesignal,
      h1Title: "OneSignal",
      link: "https://onesignal.com/"
    },
    {
      imageLink: emailjs,
      h1Title: "EmailJS",
      link: "https://www.emailjs.com/"
    }
  ];
