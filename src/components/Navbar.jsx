import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { navigation } from "../constant/data";
import logo from "../assets/logo.svg";
import { HiOutlineMenuAlt4, HiOutlineMinus } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-4 left-1/2  transform -translate-x-1/2 flex justify-center items-center w-auto bg-white/10 backdrop-blur-md border border-gray-200 rounded-full z-50 px-6 py-1">
      <div className="flex items-center justify-between w-full gap-8">
        <Link
          to={"/"}
          onClick={() => setIsOpen(false)}
          className="flex items-center"
        >
          <img src={logo} alt="Logo" className="w-12 h-12 md:h-12 md:w-12" />
        </Link>
        <button className="relative z-50" onClick={toggleMenuHandler}>
          {isOpen ? (
            <HiOutlineMinus className="size-8 text-gray-800 bg-gray-500/10 backdrop:blur-sm border border-gray-200 rounded-md px-2 py-2" />
          ) : (
            <HiOutlineMenuAlt4 className="size-8 text-gray-800 bg-gray-500/10 backdrop:blur-sm border border-gray-200 rounded-md px-2 py-2" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full mt-4 w-80 h-80 bg-white backdrop-blur-md p-4 flex flex-col items-center space-y-4 shadow-lg z-40 rounded-2xl border border-white/30"
          onClick={(e) => e.stopPropagation()}
        >
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
