import React from "react";
import workData from "../utils/workData";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <section id="work" className="bg-primaryBg p-12 w-full">
      <h2 className="text-4xl font-bold text-center mb-8">My Work</h2>

      <div className="flex flex-wrap justify-center">
        {workData.map((data, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "flex-grow" : "" // Here is the fix
            } w-full sm:w-1/2 lg:w-1/3 p-4`}
          >
            <WorkCard
              title={data.title}
              description={data.description}
              imagesArray={data.images}
              source={data.codeLink}
              link={data.projectLink}
              techStack={data.techStack}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
