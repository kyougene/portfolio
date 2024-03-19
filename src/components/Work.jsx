import React from "react";
import workData from "../utils/workData";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <section className="bg-primaryBg p-12 w-full h-auto flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-center">PROJECTS</h2>

      <div className="mt-4 flex justify-center items-center flex-wrap ">
        {workData.map((data, index) => {
          return (
            <WorkCard
              key={index}
              title={data.title}
              description={data.description}
              imagesArray={data.images}
              source={data.codeLink}
              link={data.projectLink}
              techStack={data.techStack}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
