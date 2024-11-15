import React from "react";
import Line from "./Line";

interface LineAndTextInterface {
  text: string;
}

const LineAndText = ({ text }: LineAndTextInterface) => {
  return (
    <div className="w-fit flex items-center justify-center gap-6 lg:gap-8">
      <Line LineColor="black" />
      <h2 className="jakarta-bold text-[1.6rem]">{text}</h2>
    </div>
  );
};

export default LineAndText;
