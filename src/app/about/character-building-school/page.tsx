"use client";
import BlogImage from "@/components/blog/BlogImage";
import ProjectCard from "@/components/card/ProjectCard";
import Footer from "@/components/Footer";
import LineAndText from "@/components/line/LineAndText";
import NavBar from "@/components/navbar/NavBar";
import React from "react";
import { projectContents } from "@/data/projectContents";
import { usePathname } from "next/navigation";

const page = () => {
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
        <LineAndText text="character building school" />
        <article className="lg:px-[6vw] w-full h-fit roboto-regular text-[1.8rem] lg:text-[2rem] flex flex-col gap-[3.2rem] lg:gap-[4.2rem] mt-[3.2rem] lg:mt-[4.2rem] text-balance">
          <h1 className="text-[3.2rem] lg:text-[4.2rem] jakarta-bold">
            Character Building School (CBS)
          </h1>
          <hr />
          <p>
            <b>
              Building Character: The Need for Integrity in Today&apos;s World
            </b>
          </p>
          <p>
            In today&apos;s world, character seems to be in short supply, both
            nationally and even within Christian circles. More and more
            individuals, including Christians of all ages, are displaying
            behaviors that contradict the virtues taught by Jesus. As a result,
            their actions often become a stumbling block, and their testimony of
            faith fades. This growing disconnect between values and actions has
            led to a deeper concern: How can we, as a community, uphold the
            integrity and virtues that we are called to live by?
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">
            The Motivation Behind CBS
          </h2>
          <p>
          This pressing need for stronger character and moral excellence is the very reason we founded CBS (Character Building Schools). We believe that nurturing virtuous personalities in children is not just important; it is a must. In a world where character seems to be undermined, we must accelerate our efforts to raise children who exemplify integrity, responsibility, and kindness.  
          </p>


          <h2 className="text-[2.4rem] jakarta-bold">
          Cultivating Integrity and Excellence 
          </h2>
          <p>
          At CBS, we are committed to providing an environment where children can thrive academically and morally. It’s not enough to just educate children in the traditional sense; we aim to build their character and ensure they develop into individuals with strong, virtuous personalities. Our vision is for them to become excellent individuals who will make a positive impact on the world around them, guided by Christian values and integrity.  
          </p>

          <BlogImage alt="Image" imageUrl={"/images/books.jpg"} />

          <h2 className="text-[2.4rem] jakarta-bold">
          Expanding Our Reach  
          </h2>
          <p>
          Currently, we operate two CBS schools, each serving 80-150 children. We are proud to offer our program to a wide range of students—not just those from our Harapan Bagi Bangsa (HBB) schools, but also children from all backgrounds. Our doors are open to every child, regardless of their background, because we believe in the power of inclusive education to shape a brighter, more compassionate future.  
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">
          The Road Ahead: A Call to Action
          </h2>
          <p>
          While we are encouraged by the progress we’ve made so far, there’s still much work to be done. Our mission is clear: we need to raise children who embody the values of excellence, integrity, and virtue. To do this, we must continue to expand, reach more children, and accelerate the pace of character building in our schools.  
          </p>

          <p>
          We invite you to join us in this mission. Whether through support, prayer, or volunteerism, your involvement can help us ensure that the next generation is equipped with the character and values needed to make a positive, lasting impact on the world. Together, we can build a future where character and integrity stand as the foundation of every child’s life.
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
