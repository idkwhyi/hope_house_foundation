import React from "react";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/Footer";
import AboutHero from "./AboutHero";
import AboutWhatWeDo from "./AboutWhatWeDo";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return pageMetadata('/about');
}

const page = () => {
  return (
    <main>
      {/* header tag is included inside navbar */}
      <NavBar />
      <main className="flex flex-col h-fit gap-[5rem]">
        {/* main content */}
        <AboutHero />
        <AboutWhatWeDo />
      </main>
      {/* footer tag is incuded inside footer */}
      <Footer />
    </main>
  );
};

export default page;
