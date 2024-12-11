import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "HBB Christian Schools",
  description:
    "Explore Harapan Bagi Bangsa (HBB) Christian Schools, part of the Indonesia Hope House Foundation. Learn about our mission to empower underprivileged children through affordable, quality education and character building. Join us in shaping a brighter, value-driven future.",
  icons: "/images/logo.jpeg",
  keywords: [
    "HBB Christian Schools",
    "Harapan Bagi Bangsa Christian School",
    "YRPI Christian Schools",
    "Hope House Foundation Christian Schools",
    "Sekolah Kristen HBB",
    "Sekolah Kristen Harapan Bagi Bangsa",
    "Sekolah Kristen YRPI",
    "Sekolah Kristen Yayasan Rumah Harapan",
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
