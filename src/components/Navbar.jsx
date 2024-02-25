import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* primary */}
      <div className="hidden lg:flex h-[10vh] w-full fixed bg-primary backdrop-blur-[2px] text-white">
        <div className="w-1/2 h-full flex justify-start items-center ml-52">
          Logo
        </div>
        <ul className="w-1/2 h-full mr-52 flex justify-end items-center gap-10">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* secondary */}
      <div className="lg:hidden h-[10vh] w-full fixed bg-primary text-white">
        {/* Mobile navigation toggle */}
        <div className="flex h-full items-center justify-between mr-4">
          <div className="ml-5">Logo</div>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`lg:hidden fixed bg-transparent w-full top-[10vh] origin-top duration-700 text-white ${
          !isOpen ? "hidden" : "block"
        }`}
      >
        <div className="px-8 mb-7 text-center">
          <div className="flex flex-col justify-end gap-8 font-bold tracking-wider">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
