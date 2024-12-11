import Footer from '@/components/Footer'
import NavBar from '@/components/navbar/NavBar'
import React from 'react'
import ContactHero from './ContactHero'
import ContactMap from './ContactMap'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Indonesia Hope House Foundation to learn more about our mission to nurture children and build a brighter future. Reach out for inquiries, partnerships, or to support our nonprofit initiatives. Together, let’s bring hope and light to the next generation.",
  icons: "/images/logo.jpeg",
  keywords: [
    "Contact Indonesia Hope House Foundation",
    "Contact Hope House Foundation",
    "Contact Harapan Bagi Bangsa",
    "Contact Harapan Bagi Bangsa YRPI",
    "Contact YRPI",
    "Kontak Indonesia Hope House Foundation",
    "Kontak Hope House Foundation",
    "Kontak Harapan Bagi Bangsa",
    "Kontak Harapan Bagi Bangsa YRPI",
    "Kontak YRPI",
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