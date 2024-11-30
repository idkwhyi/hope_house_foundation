import React from "react";
import Image from "next/image";
import LineAndText from "@/components/line/LineAndText";
import NormalButton from "@/components/button/Button";

const DonationHero = () => {
  return (
    <header className="relative w-full h-full flex flex-col lg:flex-row p-[3.2rem] py-[6.4rem] lg:p-[6.4rem] gap-[3.2rem] lg:gap-[6.4rem] bg-bg-green">
      <div className="w-full lg:w-1/2 flex flex-col gap-[3.2rem] lg:gap-[3.2rem]">
        <LineAndText text="donation" />
        <h1 className="merri-bold text-[4.8rem]">
          Making a donation for our children.
        </h1>
        <p className="jakarta-regular text-[1.6rem] lg:max-w-[50rem]">
          When you donate, you are giving hope and care for the future of
          children in need.
        </p>
        <NormalButton
          background="white"
          text="Contact Us"
          url=""
          border={true}
          borderColor="black"
          borderWidth="1"
        />
      </div>

      <div className="relative w-full lg:w-[50%] lg:h-[40rem] block ">
        <Image
          src={"/images/hero_donation_image.png"}
          alt="logo"
          fill
          objectFit="cover"
          className="rounded-[2rem]"
        />
      </div>
    </header>
  );
};

export default DonationHero;
