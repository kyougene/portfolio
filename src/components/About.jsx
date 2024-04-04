import React from "react";
import images from "../utils/images";
import skillsData from "../utils/skillsData";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      className="bg-primaryBg p-12 w-full h-auto flex flex-col justify-center z-50"
      id="skills"
    >
      <h2 className="text-4xl font-bold text-center">About</h2>

      <div className="mt-4 bg-white bg-opacity-20 flex flex-col w-full p-12">
        <div className="flex flex-col sm:flex-row w-full items-center justify-center">
          <div className="order-2 sm:order-1 w-1/2 mr-4">
            <h3 className="text-lg mt-4 sm:mt-0 font-medium text-center">
              WHO AM I?
            </h3>
            <p className="mt-4 w-full text-center text-black">
              Hi! My name's Kai and I'm a half Japanese half African American
              Software Engineer living in Japan. I've grown up in both the US
              and Japan and speak Japanese and English fluently. I recently
              moved back to Japan in order to get closer to my family and
              experience new opportunities. In my free time apart from
              programming, I enjoy working out and collecting interesting
              teapots and yunomi. <br /> Thanks for visiting my page!
            </p>
            <h3 className="text-lg text-center font-medium mt-4">
              MY SKILLSET
            </h3>
            <motion.div
              className="flex flex-1 flex-wrap justify-center items-start mx-0 mt-2"
              key="skills"
            >
              {skillsData.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className={` flex flex-col  m-4 text-center transition-all duration-300 ease-in-out bg-[${skill.bgColor}]`}
                  key={skill.name}
                >
                  <div
                    className="w-[50px] h-[50px] flex items-center justify-center rounded-[50%] transition-all duration-200 ease "
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <img
                      src={images[skill.imgName]}
                      alt={skill.name}
                      className="w-[30px] h-[30px] rounded-[50%]"
                    />
                  </div>
                  <p className="mt-2 text-black">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <img
            src={images.profile}
            className="w-[300px] h-[300px] order-1 sm:order-2 rounded-full justify-self-center self-center"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
