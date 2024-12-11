import React from "react";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/Footer";
import AboutHero from "./AboutHero";
import AboutWhatWeDo from "./AboutWhatWeDo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Indonesia Hope House Foundation is a nonprofit organization dedicated to nurturing children and building a generation of individuals who reflect God’s vision for humanity. With a strong commitment to educating and guiding the next generation as followers of Christ, we aim to bring light and hope into their lives. Through love and faith, we strive to shape young hearts into instruments of God's glory, empowering them to serve as shining examples of His purpose in the world.",
  icons: "/images/logo.jpeg",
  keywords: [
    "Indonesia Hope House Foundation",
    "Hope House Foundation",
    "Harapan Bagi Bangsa",
    "Harapan Bagi Bangsa YRPI",
    "YRPI",
    "Nonprofit organization in Indonesia",
    "Christian Nonprofit organization in Indonesia",
    "Child development and nurturing",
    "orphans",
    "underprivileged children",
    "orphans in Indonesia",
    "child welfare",
    "community support programs",
    "children",
    "anak yatim piatu",
    "yayasan anak Indonesia",
    "anak kurang mampu",
    "panti asuhan",
    "yayasan sosial",
    "bantuan masyarakat",
    "donasi anak Indonesia",
    "donasi anak",
    "pendidikan anak Indonesia",
    "yayasan anak yatim piatu",
    "program bantuan pendidikan Indonesia",
    "anak anak",
  ],
  authors: [{ name: "Indonesia Hope House Foundation" }],
  creator: "Indonesia Hope House Foundation",
  publisher: "Indonesia Hope House Foundation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "vxD3Xb--Dc969LW1uc_tRE-9xEd8p00s08VFTJmAUoY",
  },
};

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
