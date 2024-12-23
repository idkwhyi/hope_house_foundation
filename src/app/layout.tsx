import "../styles/globals.css";
import GrammarlyHandler from "@/components/GrammarlyHandler";
import Head from "next/head";
import { Metadata } from "next";
import { globalMetadata } from "@/lib/metadata";

export const metadata: Metadata = globalMetadata;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <Head>
        <title>Indonesia Hope House Foundation - YRPI</title>
        <meta
          name="google-site-verification"
          content="vxD3Xb--Dc969LW1uc_tRE-9xEd8p00s08VFTJmAUoY"
        />
        <meta
          property="og:title"
          content="Indonesia Hope House Foundation - YRPI"
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
