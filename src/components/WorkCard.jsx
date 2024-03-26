import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import images from "../utils/images";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkCard = ({
  title,
  description,
  imagesArray,
  source,
  link,
  techStack,
}) => {
  return (
    <div className="sm:w-[400px] sm:h-[550px] flex flex-col w-full rounded overflow-hidden shadow-lg bg-white">
      <Slider
        {...{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }}
      >
        {imagesArray.map((img, i) => (
          <img
            key={i}
            src={images[img]}
            className="h-[200px] w-full"
            alt={`${title} ${i}`}
          />
        ))}
      </Slider>
      <div className="px-6 py-4 flex-grow border-b border-gray-200">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base h-24 overflow-y-auto">
          {description}
        </p>
      </div>
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="mt-4 flex flex-wrap">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {techStack}
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center px-6 py-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <motion.div
            whileHover={{ scale: [1, 0.8] }}
            transition={{
              duration: 0.25,
            }}
          >
            <AiFillEye className="w-auto mx-2 h-12 p-2 bg-primaryBg rounded-full" />
          </motion.div>
        </a>
        <a
          href={source}
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <motion.div
            whileHover={{ scale: [1, 0.8] }}
            transition={{
              duration: 0.25,
            }}
          >
            <AiFillGithub className="w-12 mx-2 h-12 p-2 bg-gray-500 rounded-full" />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
