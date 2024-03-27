import nikkei from "../assets/discovernikkei.png";
import python from "../assets/python.png";
import django from "../assets/django.png";
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";

const Contributions = () => {
  return (
    <>
      <section
        id="contributions"
        className="bg-primaryBg p-12 w-full flex justify-center items-center flex-col"
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          Contributing With
        </h2>
        <div className=" w-full sm:w-4/5 p-12 flex flex-col sm:flex-row justify-center bg-white bg-opacity-20 backdrop-blur-3xl rounded">
          <a
            href="https://discovernikkei.org/en/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center mb-4 sm:mb-0 sm:mr-8"
          >
            <motion.div
              whileHover={{ scale: [1, 0.8] }}
              transition={{ duration: 0.25 }}
              className="relative"
            >
              <div className="rounded-full overflow-hidden">
                <img
                  src={nikkei}
                  alt="nikkei logo"
                  className="transition-filter"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex w-full h-full rounded-full overflow-hidden items-center justify-center backdrop-blur-md"
              >
                <AiFillEye className="w-[50px] h-[50px]" />
              </motion.div>
            </motion.div>
          </a>

          <div className="w-full sm:w-[70%] flex flex-col">
            <h2 className="text-center text-xl w-full mb-4 font-bold">
              DISCOVER NIKKEI - FRONTEND ENGINEER
            </h2>
            <p className="mb-4 text-center">
              I am currently working with Discover Nikkei as a Frontend
              Engineer. The project is a full scale update for their new Version
              3 website. My responsibilities include integrating updated UI
              based off provided Figma designs, integrating and routing Django
              templates to render dynamic content on web pages, ensuring
              frontend communication with backend Django views and APIs to fetch
              and send data.
            </p>
            <div className="flex mt-aut justify-self-center self-center">
              <img
                src={python}
                alt="python"
                className="w-[50px] h-[60px] rounded-[50%] mx-2"
              />
              <img
                src={django}
                alt="django"
                className="w-[50px] h-[50px] rounded-[50%] mx-2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contributions;
