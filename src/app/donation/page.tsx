import React from 'react'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/Footer'
import DonationHero from './DonationHero'
import DonationContribute from './DonationContribute'

const page = () => {
  return (
    <main>
      {/* header tag is included inside navbar */}
      <NavBar />
      <main className="flex flex-col h-fit gap-[6.4rem]">
        {/* main content */}
        <DonationHero/>
        <DonationContribute/>
      </main>
      {/* footer tag is incuded inside footer */}
      <Footer />
    </main>
  )
}

export default page