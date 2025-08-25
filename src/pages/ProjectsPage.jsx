import React from "react";
import { projectStack } from "../constant/data";
import ProjectCard from "../components/ProjectCard";
const ProjectsPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mt-6 mb-12">
        <h1 className="text-2xl font-bold text-start text-blue-500">
          Projects
        </h1>
        <p className="sm:text-sm text-gray-600 text-start max-w-4xl text-base leading-relaxed md:text-start">
          Here are some of my projects that showcase my skills in web
          development and design. Each project reflects my commitment to
          creating efficient, user-friendly, and visually appealing
          applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-16">
        {projectStack.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
