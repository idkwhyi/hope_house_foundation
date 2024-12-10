
import Projects from "@/components/Actions/Projects";
import LineAndText from "@/components/line/LineAndText";
import React from "react";
import { projectContents } from "@/data/projectContents";

interface Project {
  slug: string;
  id: string;
  title: string;
  description: string;
  image: string;
}

const AboutWhatWeDo = () => {

  const projects: Project[] = Object.entries(projectContents).map(([slug, project]) => ({
    slug,
    id: project.id,
    title: project.title,
    description: project.aboutDescription,
    image: project.aboutImage,
  }));

  
  return (
    <section className="w-full h-fit flex flex-col p-[3.2rem] lg:p-[6.4rem] gap-[3.2rem]">
      <LineAndText text="our projects" />

      <h2 className="merri-bold text-[3.2rem] lg:text-[4.8rem]">
        Our steps to changing the lives of children in need.
      </h2>
      {projects.map((project, index) => (
         <Projects
         key={project.slug}
         title={project.title}
         description={project.description}
         imageUrl={project.image}
         detailsLink={`about/${project.slug}`}
         reversed={index % 2 == 0 ? true : false}
       />
      ))}
    </section>
  );
};
export default AboutWhatWeDo;
