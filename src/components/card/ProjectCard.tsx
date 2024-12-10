import React, { FC } from "react";
import NormalButton from "../button/Button";

type ProjectCardType = {
  title: string;
  hook: string;
  hookImage: string;
  url: string;
};

const ProjectCard: FC<ProjectCardType> = ({ title, hook, hookImage, url }) => {
  return (
    <div className="relative w-full lg:w-[30%] min-h-[25rem] rounded-[2rem] p-5 py-10 text-white">
      <div
        className="absolute z-10 inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[2rem]"
        style={{ backgroundImage: `url(${hookImage})` }}
      />

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/50 z-20 rounded-[2rem]" />
      
      <div className="relative z-30 w-full min-h-[25rem] flex flex-col rounded-[2rem] justify-between gap-5 p-4 lg:p-0">
        <h2 className="text-[1.8rem] lg:text-[2rem] jakarta-bold">{title}</h2>
        <p className="text-[1.4rem]">{hook}</p>
        <NormalButton text="Read More" url={url} />
      </div>
    </div>
  );
};

export default ProjectCard;
