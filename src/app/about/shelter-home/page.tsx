'use client'
import BlogImage from "@/components/blog/BlogImage";
import ProjectCard from "@/components/card/ProjectCard";
import Footer from "@/components/Footer";
import LineAndText from "@/components/line/LineAndText";
import NavBar from "@/components/navbar/NavBar";
import React from "react";
import { projectContents } from "@/data/projectContents";
import { usePathname } from "next/navigation";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return pageMetadata('/about/shelter-home');
}

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
        <LineAndText text="shelter home" />
        <article className="lg:px-[6vw] w-full h-fit roboto-regular text-[1.8rem] lg:text-[2rem] flex flex-col gap-[3.2rem] lg:gap-[4.2rem] mt-[3.2rem] lg:mt-[4.2rem] text-balance">
          <h1 className="text-[3.2rem] lg:text-[4.2rem] jakarta-bold">
            HBB Shelter Home
          </h1>
          <hr />
          <p>
            <b>
              Providing Hope and Shelter: A Safe Haven for Homeless Children and
              Adults
            </b>
          </p>
          <p>
            In a world where many face hardship and adversity, there are those
            who often feel forgotten—the homeless, runaway children from broken
            homes, and even adults who have nowhere to turn. These individuals,
            despite their struggles, deserve a place where they can feel safe,
            loved, and given the opportunity to rebuild their lives. That’s why
            we have created a space that not only accommodates homeless children
            but also opens its doors to unfortunate adults in need.
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">
            A Safe Haven for Children in Crisis
          </h2>
          <p>
            Homeless children and those running away from broken homes face
            unimaginable challenges. Without a stable environment, they are at
            risk of falling into cycles of poverty, abuse, and neglect. Our
            program provides a sanctuary where these children can find refuge,
            receive the care they need, and access the resources to build a
            brighter future. We aim to help them overcome their past struggles
            and create a pathway to healing and success.
          </p>

          <BlogImage alt="Image" imageUrl={"/images/test.jpg"} />

          <h2 className="text-[2.4rem] jakarta-bold">
            Welcoming Adults in Need
          </h2>
          <p>
            While our primary focus is on helping children, we also recognize
            the struggles that many adults face. For individuals who find
            themselves without shelter, our doors are open. We believe that
            everyone deserves a second chance, regardless of age or background.
            By providing support to homeless adults, we not only offer them a
            place to stay but also empower them to regain their independence and
            rebuild their lives.
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">
            A Holistic Approach to Healing
          </h2>
          <p>
            Our mission is not just about providing shelter—it’s about offering
            a holistic approach to healing and recovery. For both children and
            adults, we provide not only a roof over their heads but also access
            to essential services like education, counseling, and job training.
            Our goal is to help them develop the skills and confidence they need
            to reintegrate into society and lead fulfilling, productive lives.
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">
            Building a Community of Care
          </h2>
          <p>
            At the heart of our program is a sense of community. We believe that
            no one should have to face their struggles alone. Our team, along
            with volunteers and partners, works together to provide a nurturing,
            supportive environment where everyone feels valued and cared for. We
            encourage the growth of strong relationships, personal
            responsibility, and compassion, creating a foundation for lasting
            change.
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">How You Can Help</h2>
          <p>
            You can play a vital role in making this vision a reality. Whether
            through donations, volunteering, or simply spreading awareness, your
            support helps provide essential resources and hope to those in need.
            Every contribution, no matter how small, brings us closer to
            creating a world where no one has to face homelessness alone.
          </p>

          <p>
            By offering shelter, love, and practical support, we’re creating a
            future where every individual, no matter their age or background,
            has the chance to rebuild and thrive. Join us in making a
            difference, and together, we can create a brighter future for
            homeless children and adults in our community.
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
