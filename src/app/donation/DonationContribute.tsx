"use client";

import ButtonToggle from "@/components/button/ButtonToggle";
import React, { useState } from "react";

const DonationContribute = () => {
  const [activeButtonId, setActiveButtonId] = useState<string | null>(
    "button1"
  );

  const handleButtonActivate = (id: string) => {
    setActiveButtonId(id);
  };

  const contentStyle = "text-[1.6rem]";
  return (
    <section className="w-full flex flex-col lg:flex-row p-[3.2rem] lg:p-[6.4rem] gap-[3.2rem] lg:gap-[6.4rem]">
      <div className="w-full lg:w-1/2 lg:pr-12 flex flex-col gap-[3.2rem]">
        <h1 className="merri-bold text-[3.2rem] lg:text-[4.8rem]">
          What are the benefits of your donation.
        </h1>
        <p className="jakarta-regular text-[1.6rem] pb-12 lg:pb-0">
          Everyone can play a part in providing care for our children, from
          donation to active participation. Your controbution can make a real
          difference to their future.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* button container */}
        <div className="w-full flex gap-8">
          <ButtonToggle
            text="Overview"
            id="button1"
            activeId={activeButtonId}
            onActivate={handleButtonActivate}
          />
          <ButtonToggle
            text="Impact"
            id="button2"
            activeId={activeButtonId}
            onActivate={handleButtonActivate}
          />
        </div>
        <hr/>
        {/* content container */}
        <div className="jakarta-regular">
          {activeButtonId === "button1" && (
            <p className={contentStyle}>
              At Hope House Foundation, we are dedicated to providing a decent
              life for disadvantaged children. By providing access to education,
              healthcare, and spiritual support, we strive to create a brighter
              future for them. Your donation is part of an important step
              towards realizing these children&apos;s dreams and giving them the
              opportunity to grow up in an environment of love and hope.
            </p>
          )}
          {activeButtonId === "button2" && (
            <p className={contentStyle}>
              With the support of our volunteers, we have been able to provide
              better education for more than 500 children, including English
              lessons and character education to build a resilient generation.
              We have also helped provide basic necessities and decent shelter
              to hundreds of children and vulnerable adults every month. Your
              donations allow us to continue expanding our services and ensuring
              more children and vulnerable individuals receive the support they
              deserve. Every contribution you make brings new hope to their
              lives.{" "}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DonationContribute;
