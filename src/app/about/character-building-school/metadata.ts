import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Character Building School",
  description:
    "Explore the Character Building School by the Indonesia Hope House Foundation. Learn about our mission to cultivate integrity, responsibility, and kindness in children. Join us in shaping a brighter, value-driven future through education and moral excellence.",
  icons: "/images/logo.jpeg",
  keywords: [
    "Character Building School",
    "YRPI Character Building School",
    "Hope House Foundation Character Building School",
    "Sekolah Pembentukan Karakter",
    "Sekolah Pembentukan Karakter YRPI",
    "Sekolah Pembentukan Karakter Yayasan Hope House",
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
