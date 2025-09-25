import React, { useState } from "react";
import { Link } from "react-router-dom";
import Kooshin from "../assets/Kooshin.jpeg";

const AboutPage = () => {
  const [selectedTab, setSelectedTab] = useState("Profile");

  const ProfileContent = (
    <div className="text-gray-700 space-y-4">
      <p>
        I’m Abdirahman Kooshin, a passionate{" "}
        <span className="font-medium">Full-Stack Developer</span>
        and <span className="font-medium">UI/UX Designer</span>, currently in my
        3rd year of Computer Science studies at Jamhuriyo University of Science
        and Technology (Expected Graduation: 2026). I specialize in developing
        modern, scalable, and user-focused applications using technologies such
        as the{" "}
        <span className="font-medium">
          MERN stack (MongoDB, Express.js, React.js, Node.js)
        </span>
        , <span className="font-medium">Spring Boot</span>,{" "}
        <span className="font-medium">C# with SQL Server</span>, and{" "}
        <span className="font-medium">Python</span>.
      </p>

      <p>
        In addition to development, I’m deeply passionate about
        <span className="font-medium"> UI/UX design</span>, crafting intuitive,
        clean, and engaging interfaces with tools like{" "}
        <span className="font-medium">
          Figma, Adobe Creative Suite, and Tailwind CSS
        </span>
        . My ability to work across both design and development allows me to
        turn concepts into seamless, visually appealing digital solutions.
      </p>

      <p>
        I’m also expanding my knowledge in{" "}
        <span className="font-medium">
          Python, Artificial Intelligence (AI), and Machine Learning (ML)
        </span>
        , with the goal of integrating intelligent features into future
        projects. I’m driven by solving real-world challenges, continuously
        learning, and building impactful solutions that blend performance with
        great user experience.
      </p>
    </div>
  );

  const EducationContent = (
    <div className="text-gray-700 space-y-6">
      <div>
        <h4 className="font-semibold text-lg">
          Jamhuriyo University of Science and Technology
        </h4>
        <p className="text-sm text-blue-500">2022 – Present</p>
        <p>
          Bachelor of Science in Computer Science (Expected Graduation: 2026)
        </p>
        <p className="text-sm text-gray-600">
          Currently a <span className="font-medium">4th-year student</span>,
          focusing on software development, databases, algorithms, and system
          design. Also exploring
          <span className="font-medium">
            {" "}
            Python, Artificial Intelligence (AI), and Machine Learning (ML)
          </span>
          .
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-lg">
          Imaamu Shafici Caddow Secondary School
        </h4>
        <h4 className="font-semibold text-sm">High School</h4>

        <p className="text-sm text-blue-500">2016 – 2021</p>
        <p>
          Completed secondary education with a strong foundation in mathematics,
          physics, and computer studies.
        </p>
        <br />
        <h4 className="font-semibold text-sm">Primary School</h4>
        <p className="text-sm text-blue-500">2010 – 2016</p>
        <p>
          Completed primary education, building foundational skills in
          mathematics, science, and basic computer studies.
        </p>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4">
      <h1 className="text-2xl font-bold text-center md:text-start mb-16 text-blue-500">
        Who I Am
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-40">
        <div className="self-center">
          <img
            src={Kooshin}
            alt="kooshin"
            className="w-80 h-auto md:w-[20rem] rounded-3xl mx-auto mb-6 md:mb-0"
          />
        </div>
        <div className="text-start max-w-2xl">
          <div className="flex gap-4 text-gray-500 mb-6 mt-[-6rem]">
            <button
              onClick={() => setSelectedTab("Profile")}
              className={`${
                selectedTab === "Profile"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              {" "}
              Profile
            </button>
            <button
              onClick={() => setSelectedTab("Education")}
              className={`${
                selectedTab === "Education"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Eduction
            </button>
          </div>
          <div>
            {selectedTab === "Profile" ? ProfileContent : EducationContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
