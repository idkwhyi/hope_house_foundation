import React from 'react'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/Footer'
import DonationHero from './DonationHero'

const page = () => {
  return (
    <main>
      {/* header tag is included inside navbar */}
      <NavBar />
      <main className="flex flex-col h-fit gap-[5rem]">
        {/* main content */}
        <DonationHero/>

      </main>
      {/* footer tag is incuded inside footer */}
      <Footer />
    </main>
  )
}

export default page