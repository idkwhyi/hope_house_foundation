
import Projects from "@/components/Actions/Projects";
import LineAndText from "@/components/line/LineAndText";
import React from "react";

const AboutWhatWeDo = () => {
  return (
    <section className="w-full h-fit flex flex-col p-[3.2rem] lg:p-[6.4rem] gap-[3.2rem]">
      <LineAndText text="what we do" />

      <h2 className="merri-bold text-[4.8rem]">
        Our steps to changing the lives of children in need.
      </h2>
      <Projects
        title="Harapan Bagi Bangsa (HBB) Christian Schools"
        description="We currently have 12 schools spread across Indonesia. We encourage good education  as well as low tuition fees due to their financial disability."
        imageUrl="/images/swing.jpeg"
        detailsLink=""
      />
      <Projects
        reversed={true}
        title="Little House"
        description="Provided math and english tutors, this activity is open to all social groups and religious backgrounds."
        imageUrl="/images/littlehouse.png"
        detailsLink=""
      />
      <Projects
        title="Character Building School (CBS)"
        description="We started CBS with the aim of shaping children's behavior. We realize that character is one of the important aspects of life, both in religious and social life."
        imageUrl="/images/character.png"
        detailsLink=""
      />
      <Projects
        reversed={true}
        title="HBB Shelter Home"
        description="Our foundation also provides attention to homeless children, children whose families have been broken up, and also disadvantaged adults."
        imageUrl="/images/shelter.png"
        detailsLink=""
      />
    </section>
  );
};
export default AboutWhatWeDo;
