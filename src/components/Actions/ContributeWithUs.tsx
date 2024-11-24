import React from "react";
import { ButtonCta } from "../button/ButtonCta";

const ContributeWithUs = () => {
  const button_bg = "#a3cfba";
  const button_bg_hover = "#8FC0A9";

  return (
    <section className="w-full bg-gray-100 flex flex-col items-center justify-center p-[3.2rem] lg:p-[6.4rem] gap-[3.2rem]">
      <h3 className="merri-bold bold text-[3.2rem] lg:text-[4.8rem] w-fit">Contribute With Us</h3>
      <p className="jakarta-regular text-[2.4rem] w-fit lg:w-[60vw] text-center">
        Every contribution helps us build brighter futures. Support our mission
        to bring light and hope to every child.
      </p>
      <ButtonCta
        text="Support Us"
        link="#"
        background_color={button_bg}
        background_color_hover={button_bg_hover}
        padding_x="2.4rem"
        padding_y="2.4rem"
        font_weight="medium"
        font_color="black"
        border_color="#747474"
      />
    </section>
  );
};

export default ContributeWithUs;
