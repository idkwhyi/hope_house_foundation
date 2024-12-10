import type { Metadata } from "next";
import "../styles/globals.css";
import GrammarlyHandler from "@/components/GrammarlyHandler";

export const metadata: Metadata = {
  title:{
    default: "Indonesia Hope House Foundation",
    template: "%s - Indonesia Hope House Foundation"
  } ,
  description: "Indonesia Hope House Foundation is an organization dedicated to providing hope and a meaningful life to the young generation. Based on the teachings of God's love, we are committed to preparing them to become the light and salt of the world, and to become fishers of men according to the divine calling.",
  icons: 'favicon.ico'
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