import type { Metadata } from "next";
import "../styles/globals.css";
import GrammarlyHandler from "@/components/GrammarlyHandler";
import Head from "next/head";

export const metadata: Metadata = {
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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="vxD3Xb--Dc969LW1uc_tRE-9xEd8p00s08VFTJmAUoY"
        />
        <link rel="icon" href="/images/logo.jpeg" />
      </Head>
      <body className="antialiased">
        <GrammarlyHandler className="antialiased" />
        {children}
      </body>
    </html>
  );
}
