import React from "react";
import me from "../assets/me.png";
import Navbar from "../components/Navbar";
import Kooshin from "../assets/Kooshin.jpeg";
import { Link } from "react-router-dom";
import { techStack } from "../constant/data";
import ProjectCard from "../components/ProjectCard";
import { projectStack } from "../constant/data";

const HomePage = () => {
  return (
    <>
      <div className="bg-blue-50">
        <div className="p-4">
          <div className="mx-auto max-w-7xl mt-4 md:mt-16 px-4 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left max-w-xl">
              <span className="text-xl leading-loose md:leading-loose md:text-2xl font-light px-2 rounded-md text-gray-600 border-4 border-blue-500">
                I'm
              </span>
              <h1 className="text-2xl md:text-3xl font-bold">
                Abdirahman{" "}
                <span className="relative inline-block text-blue-500">
                  Kooshin
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q25 0 50 5 T100 5"
                      fill="transparent"
                      stroke="#3b82f6"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </h1>

              <h2 className="mt-4 text-4xl md:text-6xl font-semibold text-gray-700">
                <span>Web Designer</span> <span>& Developer Enthusiat</span>
              </h2>

              <p className="mt-6 text-lg text-gray-600">
                Full-Stack Developer & UI/UX Designer building modern, scalable,
                and user-friendly applications.
              </p>

              <div className="mt-6 flex flex-row sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/projects"
                  className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 md:px-6 md:py-3 border border-blue-500 text-blue-500 rounded-lg shadow hover:bg-blue-200 transition"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-full  z-10 overflow-hidden inline-block">
              <img src={me} alt="me" className="rounded-full object-cover" />
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mx-auto max-w-7xl mt-12 px-4 mb-16">
            <h3 className="font-medium text-gray-500 text-center mt-10">
              Special Stacks
            </h3>
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:flex-row md:justify-center md:mx-auto max-w-7xl px-4 md:space-x-16 brightness-0 opacity-40">
              {techStack.map((tech) => (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 md:w-20 md:h-20"
                  key={tech.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ABout section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-12 flex flex-col md:flex-row md:space-x-10 justify-around items-start gap-12">
            {/* Left image */}
            <div className="self-center">
              <img
                src={Kooshin}
                alt="kooshin"
                className="w-80 h-auto md:w-[30rem] rounded-3xl mx-auto mb-6 md:mb-0"
              />
            </div>

            <div className=" mt-0 md:mt-24">
              <h3 className="relative inline-block font-semibold text-3xl md:text-6xl  text-start mb-6 text-blue-500">
                About Me
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q25 0 50 5 T100 5"
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="4"
                  />
                </svg>
              </h3>
              <p className="sm:text-lg text-gray-600 text-start max-w-4xl text-base leading-relaxed">
                Hello! I'm Abdirahman Kooshin, a dedicated Full-Stack Developer
                with a passion for creating dynamic and responsive web
                applications. My expertise lies in the MERN stack (MongoDB,
                Express.js, React, Node.js), Spring Boot, and C# with SQL
                Server. I thrive on turning complex problems into elegant
                solutions and am always eager to learn new technologies and
                improve my skills. When I'm not coding, I enjoy exploring design
                trends and enhancing user experiences. Let's build something
                amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Some projects */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className=" flex flex-col md:flex-row md:space-x-10 justify-around items-start gap-12">
            <h3 className="font-meduim text-start mb-6 text-blue-500">
              Projects
            </h3>
            {projectStack.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
