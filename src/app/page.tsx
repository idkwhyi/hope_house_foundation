"use client";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import Hero from "@/components/Hero";
import NavBar from "@/components/navbar/NavBar";
import HomeAboutUs from "./HomeAboutUs";
import HomeEducationCrisis from "./HomeEducationCrisis";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import HomeWhatWeDo from "./HomeWhatWeDo";
import ContributeWithUs from "@/components/Actions/ContributeWithUs";

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <>
      {loaderFinished ? (
        <>
          {/* header is included inside navbar */}
          <NavBar />
          <main className="flex flex-col h-fit">
            <Hero />
            {/* know about us section */}
            <HomeAboutUs />
            <HomeEducationCrisis />
            <HomeWhatWeDo />
            <ContributeWithUs />
          </main>
          {/* Footer */}
        </>
      ) : (
        <Loader timeline={timeline} />
      )}
    </>
  );
}
