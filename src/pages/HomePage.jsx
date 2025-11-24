import React, { useState } from "react";
import me from "../assets/me2.png";
import Navbar from "../components/Navbar";
import Kooshin from "../assets/kooshin.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { techStack } from "../constant/data";
import ProjectCard from "../components/ProjectCard";
import { projectStack } from "../constant/data";

const HomePage = () => {
  const [emailMessage, setEmailMessage] = useState("");
  return (
    <>
      <div className="mb-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative mx-auto max-w-7xl mt-4 md:mt-16 px-4 flex flex-col justify-center items-center gap-12">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-2xl md:text-5xl font-semibold mt-4">
                <span className="text-xl leading-loose md:leading-loose md:text-4xl font-light text-gray-800">
                  I'm
                </span>{" "}
                <span className="text-gray-800"> Abdirahman </span>
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

              <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                <span>Web Designer & Developer Enthusiast</span>
              </h2>
            </div>
            <div className="z-10 inline-block relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full -z-10 blur-[120px] opacity-30 transform scale-110"></div>

              <img
                src={me}
                alt="me"
                className="rounded-full object-cover w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem]"
              />
            </div>
            <div className="absolute top-96 -left-20 -rotate-45 backdrop-blur-md border border-gray-300/60 rounded-3xl p-8 shadow-2xl shadow-gray-400/20 hover:shadow-gray-400/40 transition-all duration-500 bg-white/30">
              <p className="text-lg text-gray-800 font-normal leading-relaxed tracking-wide">
                <span className="text-blue-600 font-medium">
                  Full-Stack Developer & UI/UX Designer
                </span>{" "}
                <br /> building modern, scalable & <br />
                user-friendly applications.
              </p>
            </div>
            <div className="mt-6 flex flex-row sm:flex-row gap-4 justify-start md:justify-start">
              <Link
                to="/projects"
                className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 md:px-6 md:py-3 border border-blue-500 text-blue-500 rounded-lg shadow hover:bg-blue-50 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mx-auto max-w-7xl mt-12 px-4 mb-16">
            <h3 className="font-medium text-gray-500 text-center mt-10">
              Special Stacks
            </h3>
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:flex-row md:justify-center md:mx-auto max-w-7xl px-4 md:space-x-16 brightness-0 opacity-40">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.id} className="w-10 h-10 md:w-12 md:h-12">
                    <Icon className="w-full h-full" />{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* ABout section */}
      <div className="mb-24">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="font-meduim text-center mb-12 text-blue-500">
            About me
          </h3>
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
              <h3 className="relative inline-block font-semibold text-3xl md:text-5xl  text-start mb-6 text-blue-500">
                Who I Am
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
              <p className="sm:text-lg text-gray-600 text-start max-w-4xl text-base leading-relaxed md:text-start">
                Hello! I'm Abdirahman Kooshin, a dedicated Full-Stack Developer
                with a passion for creating dynamic and responsive web
                applications. My expertise lies in the{" "}
                <span className="font-semibold">
                  MERN stack (MongoDB, Express.js, React, Node.js), Python
                  language, C# and Spring Boot with SQL databases Like
                  PostgreSQL mySQL.
                </span>{" "}
                I thrive on turning complex problems into elegant solutions and
                am always eager to learn new technologies and improve my skills.
                When I'm not coding, I enjoy exploring design trends and
                enhancing user experiences. Let's build something amazing
                together!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Some projects */}
      <div className=" mb-36">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="font-meduim text-center mb-12 text-blue-500">
            Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {projectStack.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16 bg-blue-500 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold text-white text-center mb-4 sm:text-2xl sm:mb-6 md:text-4xl">
            Like what you see? Let's work together!
          </h2>
          <p className="text-base text-blue-100 text-center mb-6 max-w-2xl mx-auto sm:text-lg sm:mb-8 md:text-xl">
            I'm always excited to take on new challenges and collaborate on
            innovative projects.
          </p>
          <div className="flex flex-col justify-center items-center gap-3 sm:flex-row sm:gap-4 md:gap-6">
            <input
              type="text"
              value={emailMessage}
              onChange={(e) => setEmailMessage(e.target.value)}
              placeholder="Write your message..."
              className="px-4 py-2 outline-none border border-gray-300 rounded-lg focus:ring-1 focus:ring-white transition w-full max-w-md sm:max-w-none sm:w-auto md:px-6 md:py-3"
            />
            <a
              href={`mailto:mankajr11@gmail.com?subject=Opportunity%20to%20Connect%20–%20Saw%20Your%20Portfolio&body=${encodeURIComponent(
                emailMessage
              )}`}
              className="px-6 py-2 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition w-full text-center sm:w-auto md:px-8 md:py-3"
            >
              Reach Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
