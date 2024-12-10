import { Metadata } from 'next'

// ! NOT DONE YET
export const baseMetadata: Metadata = {
  title: {
    default: 'Indonesia Hope House Foundation',
    template: '%s | Hope House Foundation'
  },
  description: 'Empowering orphans and underprivileged teenagers through education, care, and support. Learn more about our mission to create a brighter future for the children in need.',
  keywords: [
    'Indonesia Hope House Foundation',
    'Hope House Foundation',
    'Harapan Bagi Bangsa',
    'harapan bagi bangsa',
    'orphans',
    'underprivileged children',
    'nonprofit organization',
    'child welfare',
    'education programs',
    'community support',
    'children',
    'anak yatim piatu',
    'anak yatim',
    'anak piatu',
    'anak kurang mampu',
    'panti asuhan',
    'yayasan sosial',
    'pendidikan anak',
    'bantuan masyarakat',
    'donasi anak Indonesia',
    'yayasan anak yatim piatu',
    'program bantuan pendidikan Indonesia',
    'anak anak'
  ],
  authors: [{ name: 'Indonesia Hope House Foundation' }],
  creator: 'Indonesia Hope House Foundation',
  publisher: 'Indonesia Hope House Foundation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.yourcompany.com',
    siteName: 'Hope House Foundation',
    title: 'Indonesia Hope House Foundation',
    description: 'Hope house foundation based on indonesia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Company Name Open Graph Image'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: 'your-google-site-verification-code',
  }
}