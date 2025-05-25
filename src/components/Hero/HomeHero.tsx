"use client";

import React, { useEffect, useRef } from "react";
import { ButtonCta } from "../button/ButtonCta";
import { gsap } from "gsap";
import { revealMenu, animateTitle } from "./animations";
import Image from "next/image";

const HomeHero = () => {
  const button_bg = "#a3cfba";
  const button_bg_hover = "#8FC0A9";

  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      // Add zoom animation for the hero section
      tl.from(heroRef.current, {
        scale: 0.5, // Start with a smaller scale
        opacity: 0, // Start with no opacity
        duration: 2.5,
        ease: "expo.out", // Smooth easing function [[2]]
      });

      // Add existing animations
      tl.add(revealMenu(), 0).add(animateTitle(), 0.5);
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <header
      className="relative w-full h-screen bg-cover bg-center py-[6.4rem] lg:py-0"
      style={{ backgroundImage: `url(/images/hero_img.jpeg)` }}
      ref={heroRef}
    >
      {/* Background Layer: No animation needed*/}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Container */}
      <div className="p-6 lg:px-[6.4rem] lg:py-[7.2rem] relative z-10 w-full h-full flex flex-col items-center justify-between">
        <div className="flex flex-col items-center lg:items-center justify-center w-full max-w-full h-full max-h-full text-white text-center gap-14 p-12">
          <div className="bg-white rounded-[2rem] w-fit h-fit max-w-[25vw]">
            <Image
              alt="Foundation logo"
              src={"/images/logo_nobg.png"}
              width={120}
              height={120}
              className="rounded-[1.3rem]"
            />
          </div>
          <h1
            data-menu-item
            data-hidden
            className="text-white merri-bold text-[4rem] lg:text-[6.4rem] lg:text-center "
          >
            Indonesia 
            Hope House <br />
            Foundation YRPI
          </h1>
          <ButtonCta
            data-menu-item
            data-hidden
            link="about"
            text="What we do"
            background_color={button_bg}
            background_color_hover={button_bg_hover}
            padding_x="2.4rem"
            padding_y="2.4rem"
            font_weight="medium"
            font_color="black"
            border_color="#747474"
          />
        </div>

        {/* ? LINE ANIMATION */}
        {/* <div className="absolute bottom-[0%] lg:bottom-[10%] px-12 -translate-y-[30%] lg:-translate-y-[50%] w-full flex flex-col lg:flex-row justify-between items-center gap-5 roboto-medium text-[1.4rem] lg:text-[1.8rem] text-white">
          <span data-title-first data-hidden className="w-max min-w-max ">
            100 children under our care
          </span>
          <hr
            data-hero-line
            className="w-full scale-x-0 origin-center border-t-1 border-solid border-white my-6"
          />
          <span data-title-last data-hidden className="w-max min-w-max">
            50 donation collected
          </span>
        </div> */}
      </div>
    </header>
  );
};

export default HomeHero;