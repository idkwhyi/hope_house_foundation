import LineAndText from "@/components/line/LineAndText";
import Link from "next/link";
import React from "react";

const DonationAbout = () => {
  return (
    <section className="w-full flex flex-col p-[3.2rem] lg:p-[6.4rem] gap-[3.2rem] lg:gap-[6.4rem]">
      <hr/>
      <LineAndText text="about donation" />
      <div className="w-full flex flex-col gap-12">
        <h1 className="merri-bold text-[3.2rem] lg:text-[4.8rem]">How to Donate.</h1>
        <p className="jakarta-regular text-[1.6rem] lg:w-[80%]">
          To support us, you can make a donation by contacting our team via our{" "}
          <Link className="text-green-600 hover:underline" href="/">
            WhatsApp
          </Link>
          . Since we currently do not provide an automatic payment system, our
          team will assist you directly with the donation process.
        </p>
      </div>
      <hr/>
    </section>
  );
};

export default DonationAbout;
