
import popcorn from "../image/popcorn.png";
import project from "../image/project.png";
import tailwind from "../image/tailwind.svg";
import mysql from "../image/mysql.svg";
import nodejs from "../image/nodejs.svg";
import react from "../image/react.svg";
import python from "../image/python.svg";
import firebase from "../image/firebase.svg";
import flask from "../image/Flask.svg";
import express from "../image/express.svg";
import ssems from "../image/ssems.png";
import visitsafe from "../image/visitsafe.png";
import mediReminder from "../image/mediReminder.png";
import emailjs from "../image/EmailJS.svg";
import onesignal from "../image/icons8-onesignal.svg";

export const projects = [
  {
    id: 1,
    title: "Medi-Payment Reminder",
    description: "An AI-powered automated payment reminder system for wholesale medical businesses. It integrates real-time transaction data to track pending payments and automates follow-ups via WhatsApp, SMS, and voice calls, significantly reducing manual effort and operational costs.",
    technologies: [
      { name: "Python", icon: python },
      { name: "Flask", icon: flask },
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Firebase", icon: firebase },
    ],
    link: "https://medi-payment-reminder.vercel.app/",
    image: mediReminder,
    logo: popcorn,
  },
  {
    id: 2,
    title: "SSEMS",
    description: "Smart Seminar & Event Management System - A full-stack web application to digitize and automate seminar and academic event management in educational institutions with real-time data management.",
    technologies: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Node.js", icon: nodejs },
      { name: "Firebase", icon: firebase },
      { name: "EmailJS", icon: emailjs },
    ],
    link: "https://ssems.qzz.io",
    image: ssems,
    logo: popcorn,
  },
  {
    id: 3,
    title: "VisitSafe",
    description: "A smart, cloud-based visitor management and society security system for residential societies and gated communities. Features digital visitor entry, real-time approval notifications, and centralized admin dashboard.",
    technologies: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Node.js", icon: nodejs },
      { name: "Firebase", icon: firebase },
      { name: "OneSignal", icon: onesignal },
    ],
    link: "https://visitsafe.qzz.io",
    image: visitsafe,
    logo: popcorn,
  },
  {
    id: 4,
    title: "ActionVerse",
    description: "ActionVerse is a movie and series booking platform built with the MERN stack. It features a modern UI, smooth navigation, and a real-world ticket booking experience.",
    technologies: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Node.js", icon: nodejs },
      { name: "MySQL", icon: mysql },
    ],
    link: "https://actionverse-sand.vercel.app/",
    image: project,
    logo: popcorn,
  },
];
