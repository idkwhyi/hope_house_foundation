import React from 'react'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/Footer'
import DonationHero from './DonationHero'
import DonationContribute from './DonationContribute'
import DonationAbout from './DonationAbout'
import DonationBanner from './DonationBanner'
import { Metadata } from 'next'

export const metadata: Metadata = {
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

const page = () => {
  return (
    <main>
      {/* header tag is included inside navbar */}
      <NavBar />
      <main className="flex flex-col h-fit gap-[3.2rem] lg:gap-[6.4rem] pb-[3.2rem] lg:pb-[6.4rem]">
        {/* main content */}
        <DonationHero/>
        <DonationContribute/>
        <DonationAbout/>
        <DonationBanner/>
      </main>
      {/* footer tag is incuded inside footer */}
      <Footer />
    </main>
  )
}

export default page