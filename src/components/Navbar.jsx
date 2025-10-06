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
    <nav className="relative z-50 mx-auto max-w-7xl px-4 flex items-center justify-between">
      <Link
        to={"/"}
        onClick={() => setIsOpen(false)}
        className="flex items-center"
      >
        <img src={logo} alt="Logo" className="h-32 w-32 rounded-full" />
      </Link>

     

      <button className=" relative z-50" onClick={toggleMenuHandler}>
        {isOpen ? (
          <HiOutlineMinus className="size-8 text-gray-800" />
        ) : (
          <HiOutlineMenuAlt4 className="size-8 text-gray-800" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-20 right-0 w-60 h-80 bg-white/30 backdrop-blur-lg p-4 flex flex-col items-center space-y-4  shadow-md z-40 rounded-b-2xl">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-md font-medium bg-blue-500 px-6 py-2 rounded-md text-white"
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
