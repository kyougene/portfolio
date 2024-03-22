import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* primary */}
      <div className="hidden lg:flex h-[10vh] w-full fixed top-0 left-0 z-10 bg-[rgba(242, 245, 250, 1)] backdrop-blur-[4px] text-black">
        <div className="w-1/2 h-full flex justify-start items-center ml-52">
          Logo
        </div>
        <ul className="w-1/2 h-full mr-52 flex justify-end items-center gap-10">
          {["Skills", "Work", "Contact"].map((item, index) => {
            return (
              <li className="hover:text-gray-500" key={index}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* secondary */}
      <div className="lg:hidden h-[10vh]  w-full fixed top-0 left-0 z-10 bg-primary text-white">
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
        className={`lg:hidden bg-primary z-50 fixed w-full top-[10vh] origin-top duration-700 text-white ${
          !isOpen ? "hidden" : "block"
        }`}
      >
        <div className="px-8 mb-7 text-center">
          <div className="flex flex-col justify-end gap-8 font-bold tracking-wider ">
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
