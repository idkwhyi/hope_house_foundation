import Footer from '@/components/Footer'
import NavBar from '@/components/navbar/NavBar'
import React from 'react'
import ContactHero from './ContactHero'
import ContactMap from './ContactMap'
import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return pageMetadata('/contact');
}

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