import React from 'react'
import Image from "next/image";
import LineAndText from "@/components/line/LineAndText";

const HomeEducationCrisis = () => {
  return (
    <section className="relative w-full h-screen p-[3.2rem] lg:p-[6.4rem] flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between lg:gap-[6.4rem]">
      <div className="w-fit flex flex-col justify-center gap-[3.2rem]">
        <LineAndText text="KNOW ABOUT US" />

        <div className="relative w-full h-[30rem] block lg:hidden px-[3.2rem]">
          <Image src={"/images/test.jpg"} alt="logo" fill objectFit="cover" className="rounded-lg"/>
        </div>

        <div className="w-full h-fit flex flex-col gap-[3.2rem] lg:gap-[6.4rem] lg:pl-[6.4rem] justify-center">
          <div className="w-fit">
            <h3 className="merri-bold bold text-[3.2rem] lg:text-[4.8rem] w-full lg:w-[58rem] lg:mb-0 mb-3">
              We provide a place for children to develop their talents.
            </h3>
            <p className="jakarta-regular text-[1.8rem] w-full lg:w-[58rem]">
              We educate the next generation as followers of Christ, spreading
              light and hope, so that we can shape children into instruments fo
              r the glory of God.
            </p>
          </div>
          
        </div>
      </div>

      <div className="relative hidden lg:block w-[50rem] h-[55rem] bg-red-300 rounded-lg">
        <Image
          src={"/images/test.jpg"}
          alt="logo"
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </section>
  )
}

export default HomeEducationCrisis