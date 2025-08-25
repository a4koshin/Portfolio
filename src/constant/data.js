import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import caalamiWeb from "../assets/caalamiWeb.jpg";
import furniture from "../assets/furniture.jpg";
import taskmanagement from "../assets/taskmanagement.png";
import ecoRestaurant from "../assets/eco-restaurant.png";
import { SiFigma } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export const navigation = [
  { id: 0, name: "Home", href: "/" },
  { id: 1, name: "About me", href: "/about" },
  { id: 2, name: "Projects", href: "/projects" },
  { id: 3, name: "Contact", href: "/contact" },
];

export const techStack = [
  {
    id: 0,
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },

  {
    id: 1,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 2,
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 3,
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    id: 4,
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  {
    id: 8,
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 9,
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    id: 13,
    name: "SQL Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
  },
];

export const projectStack = [
  {
    id: 0,
    name: "Caalami Group",
    img: caalamiWeb,
    description:
      " A comprehensive web application for managing and showcasing the activities of Caalami Group.",
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
    id: 2,
    name: "Task Management web-App",
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
  // {
  //   id: 3,
  //   name: "Eco Restaurant",
  //   img: ecoRestaurant,
  //   description:
  //     "A sustainable restaurant website design that highlights eco-friendly practices and menu options.",
  //   // link: "https://www.behance.net/gallery/233077347/Furniture-e-commerce-web-design",
  //   icons: [SiFigma, RiReactjsLine, RiTailwindCssFill],
  // },
];
