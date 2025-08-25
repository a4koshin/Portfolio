import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
const Footer = () => {
  return (
    <div className="border-t-2 mx-auto max-w-7xl px-4 mt-16 rounded-2xl">
      <div className="flex justify-between items-center flex-row py-4">
        <Link to={"/"} className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20 md:w-32 md:h-32" />
        </Link>
        <p className="text-gray-500 text-center">©Abdirahman kooshin</p>
        <div className="flex justify-center items-center gap-2 text-lg text-gray-500">
          <Link
            to="https://github.com/a4koshin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/abdirahman-kooshin-451b45365/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
