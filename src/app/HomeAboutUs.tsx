"use client";

import React from "react";
import { ButtonCta } from "@/components/button/ButtonCta";
import Image from "next/image";
import LineAndText from "@/components/line/LineAndText";
import { useSmoothReveal } from "@/animations/scroll";

const HomeAboutUs = () => {
  useSmoothReveal();
  const button_bg = "#a3cfba";
  const button_bg_hover = "#8FC0A9";
  return (
    <section className="relative max-w-screen w-full h-max lg:h-screen p-[3.2rem] py-[6.4rem] lg:p-[6.4rem] flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between lg:gap-[3.2rem]">
      <div className="w-full flex flex-col justify-center gap-[3.2rem]">
        <LineAndText text="KNOW ABOUT US" />

        <div className="relative w-full h-[30rem] block lg:hidden px-[3.2rem]">
          <Image
            src={"/images/test.jpg"}
            alt="logo"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="w-full h-fit flex flex-col gap-[3.2rem] lg:gap-[6.4rem] lg:pl-[6.4rem] justify-center">
          <div className="w-full">
            <h3
              data-smooth-reveal
              className="merri-bold bold text-[3.2rem] lg:text-[4.8rem] w-full lg:mb-0 mb-3"
            >
              We provide a place for children to develop their talents.
            </h3>
            <p
              data-smooth-reveal
              className="jakarta-regular text-[1.8rem] w-full "
            >
              The Indonesia Hope House Foundation is a nonprofit organization
              dedicated to nurturing children and building a generation of
              individuals who reflect God’s vision for humanity. With a strong
              commitment to educating and guiding the next generation as
              followers of Christ, we aim to bring light and hope into their
              lives. Through love and faith, we strive to shape young hearts
              into instruments of God&apos;s glory, empowering them to serve as
              shining examples of His purpose in the world.
            </p>
          </div>
          <ButtonCta
            text="Read More"
            link="about"
            background_color={button_bg}
            background_color_hover={button_bg_hover}
            padding_x="2.4rem"
            padding_y="2.4rem"
            font_weight="medium"
            font_color="black"
            border_color="#747474"
          />
        </div>
      </div>

      <div className="relative hidden lg:block min-w-[43.5rem] h-[70vh] rounded-lg">
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
