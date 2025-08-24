import React from "react";
import caalamiWeb from "../assets/caalamiWeb.jpg";

const ProjectCard = ({ project }) => {
  return (
    <div className="border-2 border-gray-300 p-4 w-80 rounded-lg text-center">
      <div className="rounded-lg shadow-2xl overflow-hidden">
        <img
          src={caalamiWeb}
          alt={project.name}
          className="w-80 h-auto hover:scale-105 transition-transform"
        />
      </div>

      <h3 className="text-lg font-semibold mt-6">{project.name}</h3>
      <p className="text-sm text-gray-600 mt-4">{project.description}</p>

      {/* Tech Stack Icons */}
      <div className="bg-blue-500 rounded-md mt-4 p-2">
        <span className="flex justify-center gap-4 text-2xl text-white">
          {project.icons.map((Icon, index) => (
            <Icon key={index} className="w-8 h-8" />
          ))}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
