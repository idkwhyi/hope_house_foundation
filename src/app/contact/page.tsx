import Footer from '@/components/Footer'
import NavBar from '@/components/navbar/NavBar'
import React from 'react'
import ContactHero from './ContactHero'
import ContactMap from './ContactMap'

const page = () => {
  return (
    <main>
      <NavBar/>
      <main>
        <ContactHero/>
        <ContactMap/>
      </main>
      <Footer/>
    </main>
  )
}

export default page