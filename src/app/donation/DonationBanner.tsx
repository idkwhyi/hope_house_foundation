import React from "react";
import { ButtonCta } from "@/components/button/ButtonCta";

const DonationBanner = () => {
  const button_bg = "#a3cfba";
  const button_bg_hover = "#8FC0A9";

  return (
    <section className="relative w-full h-fit px-[3.2rem] lg:px-[6.4rem]">
      <div
        style={{ backgroundImage: `url(/images/donation_bottom_image.png)` }}
        className="relative z-10 w-full h-fit bg-cover bg-center p-[3.2rem] rounded-[2rem]"
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-20 rounded-[2rem]"></div>

        <div className="relative z-30 w-full h-fit flex flex-col items-center justify-center gap-12">
        <h1 className="text-white z-40 text-[2.8rem] lg:text-[4.8rem] merri-bold text-center">
            You can contribute to provide a place for children with special
            needs!
          </h1>
          <ButtonCta
            data-menu-item data-hidden
            link="#"
            text="Donate via WhatsApp"
            background_color={button_bg}
            background_color_hover={button_bg_hover}
            padding_x="2.4rem"
            padding_y="2.4rem"
            font_weight="bold"
            font_color="black"
            border_color="#747474"
            className="rounded-[.6rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default DonationBanner;