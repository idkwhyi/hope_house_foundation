import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Shelter Home",
  description:
    "Welcome to Shelter Home, a nurturing environment under Harapan Bagi Bangsa (HBB) Christian Schools, part of the Indonesia Hope House Foundation. This page serves as a gateway to understanding our mission of providing a safe haven for homeless children and adults in need. At Shelter Home, we offer more than just a place to stay; we focus on holistic healing and recovery, providing essential services such as education, counseling, and job training. Our community-oriented approach fosters personal growth, compassion, and responsibility. Whether through donations, volunteering, or simply spreading the word, there are many ways you can get involved and make a positive impact on the lives of those we serve.",
  icons: "/images/logo.jpeg",
  keywords: [
    "Shelter Home",
    "Harapan Bagi Bangsa Shelter Home",
    "YRPI Shelter Home",
    "Hope House Foundation Shelter Home",
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
});
