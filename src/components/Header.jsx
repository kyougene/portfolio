import { motion } from "framer-motion";
import react from "../assets/react.png";
import figma from "../assets/figma.png";
import developer from "../assets/developer.png";

import hackerEffect from "../utils/hackerEffect";
import { useRef, useEffect } from "react";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const name = useRef();
  const heading = useRef();
  const firstImage = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      firstImage.current.style.transform = `translate(-50% ,-${
        window.scrollY * 1.5
      }px)`;
    });
  }, []);

  return (
    <div className="w-[100vw] h-[100vh]">
      <div
        className="mt-[10vh] flex flex-1 h-full w-full justify-between"
        id="home"
      >
        <motion.div
          className="w-[33%] h-full flex-col items-start justify-start sm:w-full"
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full flex flex-col items-end">
            <div
              className="px-4 py-8 border-white border-[15px] rounded-2xl flex items-center w-auto shadow-imgShado text-[1.1rem]"
              onMouseEnter={() => {
                hackerEffect({ target: name.current });
              }}
            >
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text" ref={heading}>
                  Hello, I'm
                </p>
                <h1 className="head-text" ref={name} data-text="Kai">
                  Kai
                </h1>
              </div>
            </div>

            <div className="flex-col mt-12 px-4 py-8 border-white border-radius rounded-2xl flex items-center w-auto shadow-imgShadow">
              <p className="p-text w-full uppercase text-right">
                Designer / UI-UX
              </p>
              <p className="p-text w-full uppercase text-right">
                Software Engineer
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.2 }}
          className="h-full w-1/3 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-end justify-between "
        >
          <img
            ref={firstImage}
            src={developer}
            alt="Hero Text"
            className="w-[220px] object-contain z-1 absolute top-[50%] left-[50%] transform translate-x-[-30%]"
          />
        </motion.div>

        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="w-1/3 h-full flex-col justify-evenly items-start"
        >
          {[figma, react].map((circle, index) => (
            <div
              className="w-[100px] h-[100px] rounded-[50%] bg-white shadow-imgShadow"
              key={`circle-${index}`}
            >
              <img src={circle} alt="circle" className="w-3/5 h-3/5" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
