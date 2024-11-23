import React from "react";
import { ButtonCta } from "@/components/button/ButtonCta";
import Image from "next/image";
import LineAndText from "@/components/line/LineAndText";

const HomeAboutUs = () => {
  const button_bg = "#a3cfba";
  const button_bg_hover = "#8FC0A9";
  return (
    <section className="relative w-full h-max lg:h-screen p-[3.2rem] py-[6.4rem] lg:p-[6.4rem] flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between lg:gap-[6.4rem]">
      <div className="w-fit flex flex-col justify-center gap-[3.2rem]">
        
        <LineAndText text="KNOW ABOUT US" />

        <div className="relative w-full h-[30rem] block lg:hidden px-[3.2rem]">
          <Image src={"/images/test.jpg"} alt="logo" fill objectFit="cover" className="rounded-lg"/>
        </div>

        <div className="w-full h-fit flex flex-col gap-[3.2rem] lg:gap-[6.4rem] lg:pl-[6.4rem] justify-center">
          <div className="w-fit">
            <h3 data-text-reveal className="merri-bold bold text-[3.2rem] lg:text-[4.8rem] w-full lg:w-[58rem] lg:mb-0 mb-3">
              We provide a place for children to develop their talents.
            </h3>
            <p data-text-reveal className="jakarta-regular text-[1.8rem] w-full lg:w-[58rem]">
              We educate the next generation as followers of Christ, spreading
              light and hope, so that we can shape children into instruments fo
              r the glory of God.
            </p>
          </div>
          <ButtonCta
            text="Read More"
            link="#"
            background_color={button_bg}
            background_color_hover={button_bg_hover}
            padding_x="2.4rem"
            padding_y="2.4rem"
            font_weight="bold"
            font_color="black"
            border_color="#747474"
          />
        </div>
      </div>

      <div className="bg-red-200 relative hidden lg:block min-w-[43.5rem] h-[70vh] rounded-lg">
        <Image
          src={"/images/test.jpg"}
          alt="logo"
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default HomeAboutUs;
