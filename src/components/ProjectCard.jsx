import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="outline outline-gray-300 p-4 w-80 h-[450px] flex flex-col justify-between rounded-lg">
      {/* Project Link with Image */}
      <Link
        to={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="rounded-lg outline outline-gray-100 overflow-hidden">
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-48 object-cover hover:scale-105 transition-transform"
          />
        </div>
      </Link>

      {/* Text Section */}
      <div className="text-start px-2 flex-grow">
        <h3 className="text-lg font-semibold mt-4">{project.name}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Icons */}
      <div className=" rounded-md mt-4 p-2">
        <span className="flex justify-center gap-4 text-2xl text-gray-900">
          {project.icons.map((Icon, index) => (
            <Icon key={index} className="w-8 h-8" />
          ))}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
