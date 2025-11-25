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
              <h1 className="text-2xl md:text-5xl font-bold mt-4">
                <span className="text-xl leading-loose md:leading-loose md:text-4xl font-light text-gray-800">
                  I'm
                </span>{" "}
                <span className="text-gray-800"> Abdirahman </span>
                <span className="relative inline-block text-[#007bff]">
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

              <h2 className="text-xl md:text-2xl font- text-gray-700">
                <span>Web Designer & Developer Enthusiast</span>
              </h2>
            </div>
            <div className="z-10 inline-block relative">
              <div className="absolute inset-0 bg-[#007bff] rounded-full -z-10 blur-[90px] opacity-30 transform scale-110"></div>

              <img
                src={me}
                alt="me"
                className="object-cover w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem]"
              />
            </div>
            <div className="w-full max-w-sm md:max-w-md md:absolute md:top-96 md:left-0 backdrop-blur-xl border border-gray-300/60 rounded-3xl p-8 shadow-2xl shadow-blue-400/10 hover:shadow-blue-400/20 transition-all duration-500 bg-gradient-to-br from-white/20 to-blue-50/30 hover:from-white/30 hover:to-blue-50/40 hover:-translate-y-1 hover:scale-105 group  ">
              {/* Animated background elements */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed tracking-wide text-center md:text-left">
                  <span className="bg-[#007bff] bg-clip-text text-transparent font-semibold">
                    Full-Stack Developer & UI/UX Designer
                  </span>{" "}
                  <br className="hidden md:block" />
                  <span className="text-gray-700">
                    building modern, scalable &{" "}
                    <br className="hidden md:block" />
                    user-friendly applications.
                  </span>
                </p>

                {/* Animated underline */}
                <div className="mt-4 w-0 group-hover:w-16 h-0.5 bg-[#007bff] transition-all duration-500 rounded-full mx-auto md:mx-0" />
              </div>
            </div>

            <div className="w-full max-w-md md:absolute md:top-96 md:-right-10 backdrop-blur-xl border border-gray-300/60  rounded-3xl p-6 md:p-8 shadow-2xl shadow-blue-400/10 hover:shadow-blue-400/20 transition-all duration-500 bg-gradient-to-br from-white/20 to-blue-50/30 hover:from-white/30 hover:to-blue-50/40 hover:-translate-y-1 hover:scale-105 group mx-auto md:mx-0">
              {/* Animated background elements */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-sm md:text-base text-gray-700 font-medium tracking-wide text-center md:text-left block mb-4">
                  Browse my previous work using the buttons below.
                </span>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                  <Link
                    to="/projects"
                    className="px-6 py-3 bg-gradient-to-r from-[#007bff] to-blue-600 text-white rounded-xl shadow-lg hover:shadow-#007bff/25 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 font-medium text-sm md:text-base text-center group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    View My Work
                  </Link>

                  <Link
                    to="/contact"
                    className="px-6 py-3 border-2 border-#007bff/80 text-blue-600 rounded-xl shadow-lg hover:shadow-blue-400/20 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 font-medium text-sm md:text-base text-center group/btn relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-#007bff opacity-0 transition-all duration-300 -z-10" />
                    <span className="relative z-10">Contact Me</span>
                  </Link>
                </div>

                {/* Animated underline */}
                <div className="mt-4 w-0 group-hover:w-20 h-0.5 bg-[#007bff] transition-all duration-500 rounded-full mx-auto md:mx-0" />
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mx-auto max-w-6xl mt-20 px-4 mb-20">
            <div className="text-center mb-16">
              <h3 className="font-medium text-gray-500 uppercase tracking-wider text-sm mb-4">
                Tech Stack
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Built With Modern Tools
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.id}
                    className="group flex flex-col items-center transition-all duration-300"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md group-hover:shadow-[#007bff]/10 group-hover:border-blue-300/60 transition-all duration-300 flex items-center justify-center p-3">
                      <Icon className="w-full h-full text-gray-600 group-hover:text-[#007bff] transition-colors duration-300" />
                    </div>
                    <span className="mt-3 text-xs text-gray-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
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
          <h3 className="font-meduim text-center mb-12 text-[#007bff]">
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
              <h3 className="relative inline-block font-semibold text-3xl md:text-5xl  text-start mb-6 text-[#007bff]">
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
          <h3 className="font-meduim text-center mb-12 text-[#007bff]">
            Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {projectStack.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16 bg-[#007bff] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
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
