import React from "react";
// React Icons
import {
  RiReactjsLine,
  RiTailwindCssFill,
  RiSupabaseFill,
  RiNodejsLine,
} from "react-icons/ri";
import { SiFigma, SiMongodb, SiExpress, SiPostgresql } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiPython, SiMysql } from "react-icons/si";

// Project images
import caalamiWeb from "../assets/caalamiWeb.jpg";
import furniture from "../assets/furniture.jpg";
import taskmanagement from "../assets/taskmanagement.png";
import giovanco from "../assets/Giovanco.png";

// Navigation
export const navigation = [
  { id: 0, name: "Home", href: "/" },
  { id: 1, name: "About me", href: "/about" },
  { id: 2, name: "Projects", href: "/projects" },
  { id: 3, name: "Contact", href: "/contact" },
];

// Tech Stack
export const techStack = [
  { id: 0, name: "Figma", icon: SiFigma },
  { id: 12, name: "Python", icon: SiPython },
  { id: 1, name: "React", icon: RiReactjsLine },
  { id: 2, name: "Node.js", icon: RiNodejsLine },
  { id: 3, name: "Express.js", icon: SiExpress },
  { id: 4, name: "MongoDB", icon: SiMongodb },
  { id: 8, name: "Git", icon: FaGitAlt },
  { id: 9, name: "GitHub", icon: FaGithub },
  { id: 10, name: "Spring Boot", icon: BiLogoSpringBoot },
  { id: 13, name: "MySQL", icon: SiMysql },
  { id: 11, name: "SQL Server", icon: SiPostgresql },
];

// Project Stack
export const projectStack = [
  {
    id: 0,
    name: "Caalami Group",
    img: caalamiWeb,
    description:
      "A comprehensive web application for managing and showcasing the activities of Caalami Group.",
    link: "https://caalamigroup.com/",
    icons: [SiFigma, RiReactjsLine, RiTailwindCssFill, RiSupabaseFill],
  },
  {
    id: 1,
    name: "Furniture E-commerce",
    img: furniture,
    description:
      "A modern and responsive e-commerce website design for a furniture store, focusing on user experience and visual appeal.",
    link: "https://www.behance.net/gallery/233077347/Furniture-e-commerce-web-design",
    icons: [
      SiFigma,
      RiReactjsLine,
      RiTailwindCssFill,
      RiNodejsLine,
      SiMongodb,
      SiExpress,
    ],
  },
  {
    id: 3,
    name: "Giovanco E-commerce",
    img: giovanco,
    description:
      "A modern and responsive e-commerce website design, focusing on user experience and visual appeal.",
    // link: "https://www.behance.net/gallery/233077347/Furniture-e-commerce-web-design",
    icons: [
      SiFigma,
      RiReactjsLine,
      RiTailwindCssFill,
      RiNodejsLine,
      SiMongodb,
      SiExpress,
    ],
  },
  {
    id: 2,
    name: "Task Management Web-App",
    img: taskmanagement,
    description:
      "A task management web application that helps users organize, prioritize, and track their tasks efficiently.",
    icons: [
      SiFigma,
      RiReactjsLine,
      RiTailwindCssFill,
      RiNodejsLine,
      SiMongodb,
      SiExpress,
    ],
  },
];
