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
        <LineAndText text="harapan bagi bangsa" />
        <article className="lg:px-[6vw] w-full h-fit roboto-regular text-[1.8rem] lg:text-[2rem] flex flex-col gap-[3.2rem] lg:gap-[4.2rem] mt-[3.2rem] lg:mt-[4.2rem] text-balance">
          <h1 className="text-[3.2rem] lg:text-[4.2rem] jakarta-bold">
            Harapan Bagi Bangsa (HBB) Christian Schools
          </h1>
          <hr />
          <p>
            Indonesia Hope House Foundation (YRPI) was founded with a very noble
            mission to provide affordable quality education for underprivileged
            children, and to guide them to know Christian values. Through the
            Harapan Bagi Bangsa (HBB) or Hope For The Nation education program,
            YRPI not only provides formal education but also strives to build
            the character and spirituality of every student it educates. With
            the belief that every child has the potential to become a hope for
            the nation, YRPI works hard to provide a safe and supportive
            learning environment.
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">
            Sekolah HBB: Affordable Quality Education
          </h2>
          <p>
            The Harapan Bagi Bangsa Program has established four schools in
            Jakarta and eight schools in North Sumatra. Through these schools,
            YRPI provides education at a very low cost, often helping students
            who are truly unable to continue their education without being
            charged. With a high commitment, HBB schools adhere to government
            education standards, so that students have an equal opportunity to
            achieve quality education. Here, students are not only taught
            general knowledge, but also moral values ​​and faith, so that in the
            future they can become individuals who bring hope to the nation.
          </p>

          <BlogImage alt="Image" imageUrl={"/images/locker.jpg"} />

          <h2 className="text-[2.4rem] jakarta-bold">
            Why Education Matters: Guiding the Young Generation Towards a Bright
            Future
          </h2>
          <p>
            At YRPI, we believe that education is a window to a better future.
            By providing access to education for underprivileged children, YRPI
            seeks to open up opportunities for them to escape the cycle of
            poverty and face the future with optimism. Through education, HBB
            hopes to produce a generation of young people who are ready to be
            witnesses of Christ in their daily lives and bring positive change
            wherever they are. This vision underlies the programs at HBB
            schools, where every student is taught to know God, learn about the
            values ​​of love and care, and take responsibility for their future.
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">
            The Challenge Behind Our Mission: Reaching Hundreds of Children from
            Diverse Backgrounds
          </h2>
          <p>
            Accomplishing this mission is certainly not easy. YRPI and HBB
            schools face a huge challenge in mentoring hundreds of young people
            who come from various social and economic backgrounds. Each student
            has a different story, struggle, and needs. They need not only
            formal education, but also guidance that helps them grow emotionally
            and spiritually. This challenge does not discourage YRPI, but rather
            strengthens its determination to continue this mission with full
            commitment and love.
          </p>

          <h2 className="text-[2.4rem] jakarta-bold">
            How You Can Get Involved: Support for a Better Future
          </h2>
          <p>
            As a reader, you have the opportunity to be a part of this
            incredible journey. Your support, whether in the form of prayers or
            donations, will mean a lot to the continuity and development of the
            HBB program. With every contribution, you help open doors of
            opportunity for children in need and give them hope for a brighter
            future. Your donation will be used for educational needs, school
            facilities, and basic needs that support student welfare.
          </p>

          <p>
            YRPI&apos;s mission through the Harapan Bagi Bangsa program is more
            than just providing education. It is about providing hope,
            empowering the younger generation, and preparing them to become
            future leaders. Let&apos;s support this journey together, and make
            your contribution a part of the positive change that benefits many
            children in Indonesia.
          </p>

          <p>
            Be a part of this mission – together we can provide hope and a
            better future for those in need.
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
