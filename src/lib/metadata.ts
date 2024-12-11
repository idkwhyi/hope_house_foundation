import { Metadata } from "next";

export const globalMetadata: Metadata = {
  title: {
    default: "Indonesia Hope House Foundation - YRPI",
    template: "%s | Indonesia Hope House Foundation - YRPI",
  },
  description:
    "Indonesia Hope House Foundation is an organization dedicated to providing hope and a meaningful life to the young generation. Based on the teachings of God's love, we are committed to preparing them to become the light and salt of the world, and to become fishers of men according to the divine calling.",
  icons: "images/logo.jpeg",
  keywords: [
    "About Indonesia Hope House Foundation",
    "Tentang Indonesia Hope House Foundation",
    "About Hope House Foundation",
    "Tentang Hope House Foundation",
    "About Harapan Bagi Bangsa",
    "Tentang Harapan Bagi Bangsa",
    "About Harapan Bagi Bangsa YRPI",
    "Tentang Harapan Bagi Bangsa YRPI",
    "About YRPI",
    "Tentang YRPI",
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

export const pageMetadata = (pathname: string): Metadata => {
  switch (pathname) {
    case "/about":
      return {
        title: "About",
        description:
          "The Indonesia Hope House Foundation is a nonprofit organization dedicated to nurturing children and building a generation of individuals who reflect God’s vision for humanity. With a strong commitment to educating and guiding the next generation as followers of Christ, we aim to bring light and hope into their lives. Through love and faith, we strive to shape young hearts into instruments of God's glory, empowering them to serve as shining examples of His purpose in the world.",
        icons: "/images/logo.jpeg",
        keywords: [
          "About Indonesia Hope House Foundation",
          "About Hope House Foundation",
          "About Harapan Bagi Bangsa",
          "About Harapan Bagi Bangsa YRPI",
          "About YRPI",
          "Tentang Indonesia Hope House Foundation",
          "Tentang Hope House Foundation",
          "Tentang Harapan Bagi Bangsa",
          "Tentang Harapan Bagi Bangsa YRPI",
          "Tentang YRPI",
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
    case "/donation":
      return {
        title: "Donation",
        description:
          "Support the Indonesia Hope House Foundation in shaping brighter futures for underprivileged children. Make a difference by contributing to education, care, and community support programs. Every donation brings hope and transforms lives.",
        icons: "/images/logo.jpeg",
        keywords: [
          "Donate Indonesia Hope House Foundation",
          "Donate Hope House Foundation",
          "Donate Harapan Bagi Bangsa",
          "Donate Harapan Bagi Bangsa YRPI",
          "Donate YRPI",
          "Donasi Indonesia Hope House Foundation",
          "Donasi Hope House Foundation",
          "Donasi Harapan Bagi Bangsa",
          "Donasi Harapan Bagi Bangsa YRPI",
          "Donasi YRPI",
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
    case "/contact":
      return {
        title: "Contact",
        description:
          "Contact the Indonesia Hope House Foundation to learn more about our mission to nurture children and build a brighter future. Reach out for inquiries, partnerships, or to support our nonprofit initiatives. Together, let’s bring hope and light to the next generation.",
        icons: "/images/logo.jpeg",
        keywords: [
          "Contact Indonesia Hope House Foundation",
          "Contact Hope House Foundation",
          "Contact Harapan Bagi Bangsa",
          "Contact Harapan Bagi Bangsa YRPI",
          "Contact YRPI",
          "Kontak Indonesia Hope House Foundation",
          "Kontak Hope House Foundation",
          "Kontak Harapan Bagi Bangsa",
          "Kontak Harapan Bagi Bangsa YRPI",
          "Kontak YRPI",
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
    case "/about/shelter-home":
      return {
        
      };
    default:
      return globalMetadata;
  }
};
