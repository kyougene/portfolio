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
    <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
      <Slider
        {...{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }}
      >
        {imagesArray.map((img, i) => {
          return (
            <img key={i} src={images[img]} className="h-[200px] w-full"></img>
          );
        })}
      </Slider>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {techStack}
          </span>
        </div>
      </div>
      <div className="flex justify-around items-center px-6 py-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex justify-end items-center w-1/2 py-2 px-4"
        >
          <motion.div
            whileHover={{ scale: [1, 0.8] }}
            transition={{
              duration: 0.25,
            }}
          >
            <AiFillEye className="w-auto h-12 p-2 bg-primaryBg rounded-full" />
          </motion.div>
        </a>
        <a
          href={source}
          target="_blank"
          rel="noreferrer"
          className="flex justify-start items-center w-1/2 py-2 px-4"
        >
          <motion.div
            whileHover={{ scale: [1, 0.8] }}
            transition={{
              duration: 0.25,
            }}
          >
            <AiFillGithub className="w-12 h-12 p-2 bg-gray-500 rounded-full" />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
