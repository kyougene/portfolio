import { motion } from "framer-motion";
import developer from "../assets/developer.png";
import hackerEffect from "../utils/hackerEffect";
import oceanBg from "../assets/oceanbg.svg";
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

  useEffect(() => {
    const hackerEffect = () => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWZXZ";
      let iteration = -2;
      const interval = setInterval(() => {
        setName(
          name
            .split("")
            .map((_, index) => {
              if (index < iteration) return element.dataset.text[index];
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );
        if (iteration > element.innerText.length) clearInterval(interval);
        iteration += 1 / 2;
      }, 45);
    };
  });

  return (
    <div
      className="w-[100vw h-[100vh] bg-[url('../src//assets/oceanbg.svg')] bg-cover bg-center"
      id="header"
    >
      <div className="p-24 flex flex-col sm:flex-row flex-1 h-full w-full justify-between">
        <motion.div
          className="w-full sm:w-1/3 h-full mt-4 flex flex-col items-start justify-start"
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full flex z-50 flex-col items-end">
            <div
              className=" px-4 py-8 border-white rounded-[15px] w-full sm:w-3/5 flex items-end justify-center shadow-imgShadow"
              onMouseEnter={() => {
                hackerEffect({ target: name.current });
              }}
            >
              <span className="text-[2.5rem]">👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text text-[1.5rem]" ref={heading}>
                  Hello, I'm
                </p>
                <h1 ref={name} data-text="Kai" className="font-bold text-4xl">
                  Kai
                </h1>
              </div>
            </div>

            <div className="px-4 py-8 border-white rounded-[15px] flex-col mt-12 items-center w-full sm:w-auto shadow-imgShadow">
              <p className="p-text w-full uppercase text-right">
                Software Engineer 🧑‍💻
              </p>
              <p className="w-full uppercase text-right">Tokyo, Japan 🇯🇵</p>
              <p className="w-full uppercase text-right">ENG/日本語 ✅</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.2 }}
          className="h-full hidden sm:flex w-1/3 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-2/3 items-end justify-between "
        >
          <img
            ref={firstImage}
            src={developer}
            alt="Hero Text"
            className="w-[220px] object-contain absolute top-[50%] left-[50%] transform translate-x-[-30%]"
          />
        </motion.div>

        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="w-full sm:w-1/4 mt-4 flex flex-row sm:flex-col justify-evenly items-start h-full"
        >
          <div className="w-[100px] h-[100px] rounded-[50%] bg-white shadow-imgShadow flex justify-center items-center transition-transform hover:scale-110 hover:shadow-lg hover:cursor-pointer">
            <a href="https://github.com/kyougene" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="w-[100px] h-[100px] rounded-[50%] bg-white shadow-imgShadow flex justify-center items-center transition-transform hover:scale-110 hover:shadow-lg hover:cursor-pointer">
            <a href="https://www.linkedin.com/in/kaihasuike/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
