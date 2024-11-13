import React from "react";
import Line from "@/components/line/Line";
import { ButtonCta } from "@/components/button/ButtonCta";
import Image from "next/image";

const HomeAboutUs = () => {
  const button_bg = "#a3cfba"
  const button_bg_hover = "#8FC0A9";
  return (
    <section className="w-screen px-[6.4rem] py-[6.4rem] flex items-center justify-between gap-[6.4rem]">
      <div className="w-fit">
        
        <div className="w-fit flex items-center justify-center gap-8">
          <Line LineColor="black" />
          <h2 className="jakarta-bold text-[1.6rem]">KNOW ABOUT US</h2>
        </div>

        <div className="w-full h-full flex flex-col gap-[6.4rem] pl-[6.4rem]">
          <div className="w-fit">
            <h3 className="merri-bold bold text-[4.8rem] w-[58rem]">We provide a place for children to develop their talents.</h3>
            <p className="jakarta-regular text-[1.8rem] w-[58rem]">We educate the next generation as followers of Christ, spreading light and hope, so that we can shape children into instruments fo r the glory of God.</p>
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
      <Image 
        src={'/images/aboutbg.png'}
        alt="logo"
        width={500}
        height={680}
        />
    </section>
  );
};

export default HomeAboutUs;
