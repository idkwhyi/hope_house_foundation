import type { Metadata } from "next";
import "../styles/globals.css";
import GrammarlyHandler from "@/components/GrammarlyHandler";

export const metadata: Metadata = {
  title: "Dev_Hope House Foundation",
  description: "Testing of Hope House Foundation",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GrammarlyHandler className="antialiased" />
        {children}
      </body>
    </html>
  );
}