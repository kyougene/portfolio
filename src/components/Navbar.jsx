import React, { useState } from "react";
import logo from "../assets/Kai.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full">
      {/* primary */}
      <div className="hidden lg:flex h-[10vh] w-full fixed top-0 left-0 z-10 bg-[rgba(242, 245, 250, 1)] backdrop-blur-[4px] text-black">
        <div
          className="w-1/2 h-full flex justify-start items-center ml-52 cursor-pointer"
          onClick={() => scrollToSection("header")}
        >
          <img src={logo} alt="Logo" />
        </div>
        <ul className="w-1/2 h-full mr-52 flex justify-end items-center gap-10">
          {["Skills", "Work", "Contributions", "Contact"].map((item, index) => {
            return (
              <li className="hover:text-gray-500" key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* secondary */}
      <div className="lg:hidden h-[10vh]  w-full fixed top-0 left-0 z-10 bg-transparent backdrop-blur-[4px] text-black">
        {/* Mobile navigation toggle */}
        <div className="flex h-full items-center justify-between mr-4">
          <div
            className="w-1/2 h-full flex justify-start items-center ml-4 cursor-pointer"
            onClick={() => scrollToSection("header")}
          >
            <img src={logo} alt="Logo" />
          </div>

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
        className={`lg:hidden bg-transparent backdrop-blur-[4px] z-50 fixed w-full top-0 text-black origin-top transform transition-transform duration-700 ${
          isOpen ? `translate-y-20` : `-translate-y-full`
        }`}
      >
        {isOpen && (
          <div className="h-full px-8">
            <div className="flex flex-col items-center justify-end h-full gap-8 font-bold tracking-wider">
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                Work
              </a>
              <a
                href="#contributions"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contributions");
                }}
              >
                Contributions
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
