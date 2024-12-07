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
    'orphans',
    'underprivileged children',
    'nonprofit organization',
    'child welfare',
    'education programs',
    'community support',
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
    'bantu anak Indonesia'
  ],
  authors: [{ name: 'Your Company Name' }],
  creator: 'Your Company Name',
  publisher: 'Your Company Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.yourcompany.com',
    siteName: 'Your Company Name',
    title: 'Your Company Name - Professional Services',
    description: 'Comprehensive description of your company, services, and unique value proposition',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Company Name Open Graph Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Company Name - Professional Services',
    description: 'Comprehensive description of your company, services, and unique value proposition',
    images: ['/twitter-image.jpg']
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