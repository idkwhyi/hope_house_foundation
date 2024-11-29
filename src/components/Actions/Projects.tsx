import Image from "next/image";
import React, { FC } from "react";
import { ButtonBorderNoBg } from "../button/ButtonBorderNoBg";
import { ButtonWithArrow } from "../button/ButtonWithArrow";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ProjectsType = {
  reversed?: boolean;
  imageUrl: string;
  title: string;
  description: string;
  detailsLink: string;
};

/**
 * Project component props
 * @param {string} reversed - Reverse the order of text and image | default false
 * @param {string} imageUrl - The main content/description
 * @param {string} title - Project title
 * @param {string} description - Project description
 * @param {string} detailsLink - Link to project details page
 */

const Projects: FC<ProjectsType> = ({
  reversed = false,
  imageUrl,
  title,
  description,
  detailsLink,
}) => {
  return (
    <article
      className={`w-full h-fit gap-[3.2rem] lg:gap-[6.4rem] flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } py-[3.2rem] lg:py-[3.2rem]`}
    >
      <div className="relative w-full h-[40rem] block ">
        <Image
          src={imageUrl}
          alt="logo"
          fill
          objectFit="cover"
          className="rounded-[1.2rem]"
        />
      </div>

      <div className="w-full h-fit flex flex-col items-start justify-start gap-[3.2rem]">
        <h3 className="merri-bold text-[4rem]">{title}</h3>
        <p className="jakarta-regular text-[1.6rem]">{description}</p>
        <div className="w-full flex gap-12">
          <ButtonBorderNoBg link={detailsLink} text="Read Details" />
          <ButtonWithArrow link="/donate" text="Donate Now" />
        </div>
      </div>
    </article>
  );
};
export default Projects;
