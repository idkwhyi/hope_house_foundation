import React from 'react'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/Footer'
import DonationHero from './DonationHero'
import DonationContribute from './DonationContribute'
import DonationAbout from './DonationAbout'
import DonationBanner from './DonationBanner'

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