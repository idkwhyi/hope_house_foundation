import LineAndText from "@/components/line/LineAndText";
import Link from "next/link";
import React from "react";

const ContactHero = () => {
  return (
    <header className="bg-bg-green relative w-full h-full flex flex-col lg:flex-row p-[3.2rem] py-[6.4rem] lg:p-[6.4rem] gap-[3.2rem] lg:gap-[6.4rem] items-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-[3.2rem]">
        <LineAndText text="contact us" />
        <div className="w-full flex flex-col gap-[1.6rem]">
          <h1 className="merri-bold text-[3.2rem] lg:text-[4.8rem]">
            We&apos;d love to hear from you.
          </h1>
          <p className="jakarta-regular text-[1.6rem]">
            Have any question in mind or want to enquire? Please feel free to contact us via the following email and phone number.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-[2rem]">
        <div className="jakarta-regular w-full flex flex-col gap-2">
          <h3 className="jakarta-bold text-[2.4rem]">Let&apos;s talk!</h3>
          <div className="w-full flex flex-row gap-[1.6rem]">
            <Link className="text-black hover:underline text-[1.6rem]" href="/">
              0878787878
            </Link>
            <Link className="text-black hover:underline text-[1.6rem]" href="/">
              email@gmail.com
            </Link>
          </div>
        </div>
        <div className="jakarta-regular w-full flex flex-col gap-2">
          <h3 className="jakarta-bold text-[2.4rem]">Our Place</h3>
          <div className="w-full flex flex-row gap-[1.6rem]">
            <Link className="text-black hover:underline text-[1.6rem]" href="/">
              Place address
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactHero;
