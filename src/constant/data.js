import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
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
    description:
      " A comprehensive web application for managing and showcasing the activities of Caalami Group.",
    icons: [RiReactjsLine, RiTailwindCssFill, RiSupabaseFill],
  },
];
