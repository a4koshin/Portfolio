import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navigation } from "../constant/data";
import logo from "../assets/logo.png";
import { HiOutlineMenuAlt4, HiOutlineMinus } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-50 mx-auto max-w-7xl px-4 flex items-center justify-between py-4 mb-4 bg-blue-50">
      <Link to={"/"} className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 w-20 rounded-full" />
      </Link>

      <div className="hidden md:flex items-center space-x-6">
        {navigation.map((item) => (
          <NavLink
            key={item.id}
            to={item.href}
            className={({ isActive }) =>
              isActive
                ? "text-md font-medium text-blue-500 underline underline-offset-8"
                : "text-md font-medium text-gray-600 hover:text-blue-500"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <button className="md:hidden relative z-50" onClick={toggleMenuHandler}>
        {isOpen ? (
          <HiOutlineMinus className="size-8 text-gray-800" />
        ) : (
          <HiOutlineMenuAlt4 className="size-8 text-gray-800" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full h-80 bg-white/30 backdrop-blur-lg p-4 flex flex-col items-center space-y-4 md:hidden shadow-md z-40 rounded-b-2xl">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-md font-medium text-blue-500 underline underline-offset-6"
                  : "text-md font-medium text-gray-600 hover:text-blue-500"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
