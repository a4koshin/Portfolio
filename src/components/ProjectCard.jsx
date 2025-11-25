import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white border border-gray-200 p-6 w-80 max-w-sm flex flex-col justify-between rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Project Image with Overlay Effect */}
      <Link
        to={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden rounded-lg"
      >
        <div className="relative rounded-lg overflow-hidden border border-gray-50 bg-gray-100">
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        </div>
      </Link>

      {/* Text Content */}
      <div className="flex-grow pt-5 px-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech Stack with Better Spacing */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-center gap-5">
          {project.icons.map((Icon, index) => (
            <Icon 
              key={index} 
              className="w-7 h-7 text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-110" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;