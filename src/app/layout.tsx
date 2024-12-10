import type { Metadata } from "next";
import "../styles/globals.css";
import GrammarlyHandler from "@/components/GrammarlyHandler";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    default: "Indonesia Hope House Foundation",
    template: "%s - Indonesia Hope House Foundation",
  },
  description:
    "Indonesia Hope House Foundation is an organization dedicated to providing hope and a meaningful life to the young generation. Based on the teachings of God's love, we are committed to preparing them to become the light and salt of the world, and to become fishers of men according to the divine calling.",
  icons: "favicon.ico",
  keywords: [
    "Indonesia Hope House Foundation",
    "Hope House Foundation",
    "Harapan Bagi Bangsa",
    "harapan bagi bangsa",
    "orphans",
    "underprivileged children",
    "nonprofit organization",
    "child welfare",
    "education programs",
    "community support",
    "children",
    "anak yatim piatu",
    "anak yatim",
    "anak piatu",
    "anak kurang mampu",
    "panti asuhan",
    "yayasan sosial",
    "pendidikan anak",
    "bantuan masyarakat",
    "donasi anak Indonesia",
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
    google: "your-google-site-verification-code",
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <GrammarlyHandler className="antialiased" />
        {children}
      </body>
    </html>
  );
}
