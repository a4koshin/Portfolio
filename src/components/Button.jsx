import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <>
      <style>{`
        @keyframes rotate {
          100% {
            transform: rotate(1turn);
          }
        }

        .rainbow::before {
          content: '';
          position: absolute;
          z-index: -2;
          left: -50%;
          top: -50%;
          width: 200%;
          height: 200%;
          background-position: 100% 50%;
          background-repeat: no-repeat;
          background-size: 50% 30%;
          filter: blur(6px);
          background-image: conic-gradient(
            from 0deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00ab,
            #ff0000
          );
          animation: rotate 4s linear infinite;
        }
      `}</style>

      <Link
        to={to}
        className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-md hover:scale-105 transition duration-300 active:scale-100"
      >
        <span className="px-8 text-sm py-3 text-blue-500 rounded-md border-blue-500 font-medium backdrop-blur">
          {text}
        </span>
      </Link>
    </>
  );
};

export default Button;
