'use client'
import BlogImage from "@/components/blog/BlogImage";
import ProjectCard from "@/components/card/ProjectCard";
import Footer from "@/components/Footer";
import LineAndText from "@/components/line/LineAndText";
import NavBar from "@/components/navbar/NavBar";
import React from "react";
import { projectContents } from "@/data/projectContents";
import { usePathname } from "next/navigation";

const page = () => {
  'use client'
  const projectKeys = Object.keys(projectContents); // Extract project keys for iteration

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();

  // Extract the last segment (e.g., "project1")
  const segments = pathname.split("/");
  const lastSegment = segments[segments.length - 1];

  return (
    <div className="bg-main-bg">
      <NavBar />

      <main className="my-[10rem] px-[3.2rem] lg:px-[19vw] w-full flex flex-col bg-main-bg">
        <LineAndText text="little house" />
        <article className="lg:px-[6vw] w-full h-fit roboto-regular text-[1.8rem] lg:text-[2rem] flex flex-col gap-[3.2rem] lg:gap-[4.2rem] mt-[3.2rem] lg:mt-[4.2rem] text-balance">
          <h1 className="text-[3.2rem] lg:text-[4.2rem] jakarta-bold">
            Little House
          </h1>
          <hr />
          <p>
            <b>
              Unlocking Potential: Inclusive Math and English Tutoring for All
            </b>
          </p>
          <p>
            Education is a cornerstone for building brighter futures, and access
            to quality learning resources can make a world of difference. That’s
            why our Math and English tutoring program is designed to be
            inclusive, welcoming individuals from all social groups and
            religious backgrounds.
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">
            Breaking Barriers to Learning
          </h2>
          <p>
            In many communities, access to academic support is often limited by
            social or economic factors. Our initiative aims to break these
            barriers by providing expert tutors who make learning accessible to
            everyone. Whether you&apos;re a student needing extra help or an
            adult looking to enhance your skills, this program is open to all,
            fostering a culture of inclusion and equal opportunity.
          </p>

          <BlogImage alt="Image" imageUrl={"/images/writing_on_paper.jpg"} />

          <h2 className="text-[2.4rem] jakarta-bold">
            Personalized Support for Every Learner
          </h2>
          <p>
            Our tutors are dedicated to tailoring lessons to meet individual
            needs, ensuring that every participant receives the guidance they
            need to succeed. From mastering mathematical concepts to improving
            English language proficiency, we create a supportive environment
            where everyone can grow and thrive.
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">
            A Bridge Between Communities
          </h2>
          <p>
            Education not only empowers individuals but also unites communities.
            By welcoming people of all religious and social backgrounds, our
            program promotes mutual respect, understanding, and collaboration.
            It’s a space where diversity is celebrated, and learning is a shared
            journey.
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">Get Involved</h2>
          <p>
            Whether you’re a learner eager to join or someone passionate about
            supporting this cause, there’s a place for you here. Together, we
            can create a future where quality education is accessible to all,
            regardless of their background.
          </p>

          <p>
            Join us in this journey of learning and inclusion—because everyone
            deserves the opportunity to unlock their full potential.
          </p>
        </article>
      </main>
      <section className="px-[3.2rem] lg:px-[6vw] w-full h-full mt-[3.2rem] flex flex-col lg:flex-row gap-12 justify-between lg:justify-center my-[4.8rem]">
        {projectKeys.map((key) => {
          if (lastSegment !== key) {
            const project = projectContents[key];
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                hook={project.summary}
                hookImage={project.hookImage}
                url={key}
              />
            );
          }
        })}
      </section>

      <Footer />
    </div>
  );
};

export default page;
