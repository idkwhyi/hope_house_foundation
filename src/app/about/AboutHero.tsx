import React from "react";
import LineAndText from "@/components/line/LineAndText";
import Image from "next/image";

const AboutHero = () => {
  const visionAndMission = [
    {
      title: "our mission",
      body: "Due to the fact that time is running so fast and we believe we live in the end of the end times. Like Jesus sais, 'Open your eyes and look at the fields! they are ripe for harvest.' John 4.35 There should not be any delaying or idling around. we are committed to race against time and the power of darkness now prevailing everywhere, no matter how much it costs. As the Lord is leading us.",
    },
    {
      title: "our vision",
      body: "Bring young people to the Lord so that they become the light and salt of the world and fishers of men. They will live a meaningful life as they serve the Lord. Our driving scriptures are Colossians 1. 27 Christ the hope of glory; Matthews 28. 18-20 the great Commission of the Lord; Mark 5.41 the 'talitha koum' girl whom Jesus brought back to life.",
    },
  ];
  return (
    <header className="relative w-full h-full flex flex-col p-[3.2rem] py-[6.4rem] lg:p-[6.4rem] gap-[3.2rem] lg:gap-[6.4rem]">
      {/* Top Background (50% atas) */}
      <div className="absolute z-0 top-0 left-0 w-full h-1/2 bg-white"></div>
      {/* Background Putih (50% bawah) */}
      <div className="absolute z-0 bottom-0 left-0 w-full h-1/2 bg-bg-green"></div>

      {/* first hero content */}
      <div className="w-full z-10 flex flex-col lg:flex-row items-center justify-between gap-[3.2rem] lg:gap-[6.4rem] pt-[3.2rem] lg:py-[3.2rem]">
        <div className="w-full lg:w-[50vw] flex flex-col gap-4 lg:gap-12">
          <LineAndText text="know about us" />
          <h1 className="merri-bold text-[3.2rem] lg:text-[4.8rem]">
            Our Dedication to Those in Need
          </h1>
        </div>
        <div className="w-full lg:w-[50vw] h-fit flex flex-col gap-[1.4rem] lg:gap-[3.2rem] py-5">
          <h3 className="jakarta-bold text-[2rem]">
            Providing a Safe Place and a Decent Education for Every Child
          </h3>
          <p className="jakarta-regular text-[1.6rem]">
            Indonesian Hope House Foundation was established with the aim of
            providing support for vulnerable children and individuals, so that
            they can live in a safe and supportive environment. We provide
            education, housing, and oasic necessities to nelo them arow and
            develoo. Witn aporooriatel curriculum, englis lanquage education,
            and character buildina, we prepare them for a bettertuture
          </p>
        </div>
      </div>
      {/* second hero content */}
      <div className="relative w-full h-[35rem] block ">
        <Image
          src={"/images/children.png"}
          alt="logo"
          fill
          objectFit="cover"
          className="rounded-[2rem]"
        />
      </div>
      {/* third hero content */}
      <div className="w-full z-10 flex flex-col lg:flex-row items-start justify-between gap-[3.2rem] lg:gap-[6.4rem]">
        {visionAndMission.map((item) => (
          <div
            key={item.title}
            className="w-full h-full lg:h-[32rem] flex flex-col gap-[2rem] border bg-green-highContras border-black rounded-lg p-12"
          >
            <h2 className="jakarta-bold text-[1.8rem]">
              {item.title.toUpperCase()}
            </h2>
            <div className="jakarta-regular text-[1.6rem]">{item.body}</div>
          </div>
        ))}
      </div>
    </header>
  );
};
export default AboutHero;
