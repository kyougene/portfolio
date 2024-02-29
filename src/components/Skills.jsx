import React from "react";
import images from "../utils/images";
import data from "../utils/data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      className="app__skills bg-primaryBg p-12 w-full h-auto flex flex-col justify-center z-50"
      id="skills"
    >
      <h2 className="text-4xl font-bold text-center">Skillset</h2>

      <div className="app__skills-container mt-4 flex w-full">
        <motion.div
          className="app__skills-list flex flex-1 flex-wrap justify-center items-start mx-0 my-auto"
          key="skills"
        >
          {data.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={`app__skills-item app__flex flex flex-col  m-4 text-center transition-all duration-300 ease-in-out bg-[${skill.bgColor}]`}
              key={skill.name}
            >
              <div
                className="app__flex w-[90px] h-[90px] flex items-center justify-center rounded-[50%] transition-all duration-200 ease "
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={images[skill.imgName]}
                  alt={skill.name}
                  className="w-[50px] h-[50px] rounded-[50%]"
                />
              </div>
              <p className="mt-2 text-white">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
