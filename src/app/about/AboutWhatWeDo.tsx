import LineAndText from "@/components/line/LineAndText";
import React from "react";
const AboutWhatWeDo = () => {
  return (
    <section className="w-full h-fit flex flex-col p-[3.2rem] lg:p-[6.4rem] gap-[3.2rem]">
      <LineAndText text="what we do" />
      <h3 className="merri-bold text-[4.8rem]">
        Our steps to changing the lives of children in need.
      </h3>
      <div></div>
    </section>
  );
};
export default AboutWhatWeDo;
