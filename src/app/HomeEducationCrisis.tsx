import React from "react";
import Image from "next/image";
import LineAndText from "@/components/line/LineAndText";
import { ButtonBorderNoBg } from "@/components/button/ButtonBorderNoBg";
import { ButtonWithArrow } from "@/components/button/ButtonWithArrow";

const HomeEducationCrisis = () => {
  return (
    <section className="relative w-full h-max p-[3.2rem] py-[6.4rem] lg:p-[6.4rem] flex flex-col items-start justify-between gap-0 bg-[#E1EAE6]">
      <LineAndText text="EDUCATION CRISIS" />

      {/* EDU CRISIS 1 */}
      <div className="w-full h-max flex flex-col lg:flex-row gap-[3.2rem] lg:gap-[8rem] py-[6.4rem]">
        {/* image container */}
        <div className="relative lg:min-w-[43.5rem] w-full lg:w-[43.5rem] h-[30rem] lg:h-[46rem] rounded-lg px-[3.2rem]">
          <Image
            src={"/images/edu_crisis1.png"}
            alt="education crisis image 1"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* content 1 container */}
        <div className="w-full flex flex-col items-center justify-between text-[1.8rem] gap-[3.2rem]">
          <h3 className="merri-bold text-[4.8rem]">
            Over 4 Million Children not in School.
          </h3>

          <p className="">
            We are dedicated to transforming the lives of vulnerable children by
            providing care, education, and spiritual guidance, reaching those in
            need and involving compassionate individuals.
          </p>

          <div className="w-full flex items-start py-[2.3rem] lg:py-0 lg:items-center justify-start gap-[6.4rem] text-[1.6rem] jakarta-regular bg-red-200">
            <div className="w-fit">
              <h4 className="jakarta-bold text-[3.2rem] lg:text-[4.8rem]">4.1 Million</h4>
              <p>Not in school</p>
            </div>
            <div className="w-fit">
              <h4 className="jakarta-bold text-[3.2rem] lg:text-[4.8rem]">7-18 Years</h4>
              <p>Children and adsolesccent</p>
            </div>
          </div>

          <div className="w-full flex items-center gap-[2.4rem]">
            {/* BUTTON CONTAINER */}
            <ButtonBorderNoBg link="#" text="Read Articles" font_size="1.6"/>
            <ButtonWithArrow link="#" text="Donate Now" font_size="1.6"/>
          </div>
        </div>
      </div>

      {/* EDU CRISIS 2 */}
      <div className="w-full h-max flex flex-col-reverse lg:flex-row gap-[3.2rem] lg:gap-[8rem] py-[6.4rem]">

        {/* content 2 container */}
        <div className="w-full flex flex-col items-center justify-between text-[1.8rem] gap-[3.2rem]">
          <h3 className="merri-bold text-[4.8rem] w-full">
          Education Inequality Crisis.
          </h3>

          <p className="">
          The economy is the main factor in the high dropout rate. The impact of the COVID-19 pandemic has worsened this condition, forcing many children to work to help the family economy.
          </p>

          <div className="w-full flex items-center justify-start gap-[6.4rem] text-[1.6rem] jakarta-regular">
            <div className="w-fit">
              <h4 className="jakarta-bold text-[4.8rem]">74% Students</h4>
              <p>Forced to stop due to lack of  funds.</p>
            </div>
          </div>

          <div className="w-full flex items-center gap-[2.4rem]">
            {/* BUTTON CONTAINER */}
            <ButtonBorderNoBg link="#" text="Read Articles" font_size="1.6"/>
            <ButtonWithArrow link="#" text="Donate Now" font_size="1.6"/>
          </div>
        </div>
        {/* image container */}
        <div className="relative lg:min-w-[43.5rem] w-full lg:w-[43.5rem] h-[30rem] lg:h-[46rem] rounded-lg px-[3.2rem]">
          <Image
            src={"/images/edu_crisis2.png"}
            alt="education crisis image 1"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeEducationCrisis;
