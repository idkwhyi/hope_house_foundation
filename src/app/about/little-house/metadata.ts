import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Little House",
  description:
    "Welcome to Little House, a hub of inclusive learning initiatives under Harapan Bagi Bangsa (HBB) Christian Schools, part of the Indonesia Hope House Foundation. Our Math and English tutoring programs are designed to break down barriers to education, providing personalized support to individuals from all backgrounds. Whether you’re a student, adult learner, or volunteer, Little House fosters a community of mutual respect, understanding, and collaboration. Join us as we strive to make quality education accessible to everyone, fostering a brighter, value-driven future for all.",
  icons: "/images/logo.jpeg",
  keywords: [
    "Little House",
    "Harapan Bagi Bangsa Little House",
    "YRPI Little House",
    "Hope House Foundation Little House",
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
