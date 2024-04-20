import React from "react";
import {BsBank, BsPersonArmsUp} from 'react-icons/bs'
import { LuGraduationCap } from "react-icons/lu";
import Siahva from "@/public/Siahva.png";
import MapLocation from "@/public/MapLocation.png";
import SiahvaApp from "@/public/SiahvaApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "My First Steps in Programming",
    location: "Morelos, MX",
    description:
      "I began programming in C++ and Java during high school. After numerous projects, I graduated with an degree in computing, specializing in the Physical-Mathematical field.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "University Enrollment",
    location: "Morelos, MX",
    description:
      "I started on my professional career as a Software Developer, gaining experience in languages such as Java and JavaScript.",
    icon: React.createElement(BsBank),
    date: "2022 - 2023",
  },
  {
    title: "Professional Internship",
    location: "Morelos, MX",
    description:
      "Following numerous projects and experiences in web/mobile development, I am currently available for part-time opportunities where I can apply what I've learned.",
    icon: React.createElement(BsPersonArmsUp),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Siahva",
    description:
      "This project allows users   make reservations and purchases available at the hotel, while administrators can manage all content.",
    tags: ["React", "JavaScript", "Tailwind", "Java", "SpringBoot"],
    imageUrl: Siahva,
  },
  {
    title: "MapLocation",
    description:
      "This website manages locations in a database and displays them on a map. It integrates various APIs for its functionality.",
    tags: ["HTML", "Css", "JavaScript", "Java", "SpringBoot"],
    imageUrl: MapLocation,
  },
  {
    title: "Siahva App",
    description:
      "A mobile application that enables users to reserve hotel rooms and purchase products. The app utilizes Firebase as a database to manage these products.",
    tags: ["React Native", "Expo", "FireBase", "Java", "SpringBoot"],
    imageUrl: SiahvaApp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Java",
  "MongoDB",
  "MySQL",
  "SpringBoot",
  "Tailwind",
  "Git",
  
] as const;