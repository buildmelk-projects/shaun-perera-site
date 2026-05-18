import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shaunperera.com'),
  title: 'Shaun Perera',
  description:
    'Official website of Shaun Perera, indie singer-songwriter from Colombo, Sri Lanka. Bilingual originals in English and Sinhala. Voice of Magic Box Mixup.',
  keywords: ['Shaun Perera', 'Sri Lanka music', 'indie singer', 'Obamai', 'Magic Box Mixup', 'Sinhala music'],
  openGraph: {
    title: 'Shaun Perera',
    description: 'Official website of Shaun Perera, indie singer-songwriter from Colombo, Sri Lanka.',
    url: 'https://www.shaunperera.com',
    siteName: 'Shaun Perera',
    images: [
      {
        url: '/images/shaun-expressive.jpg',
        width: 1200,
        height: 630,
        alt: 'Shaun Perera — Official Artist Site',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaun Perera',
    description: 'Official website of Shaun Perera, indie singer-songwriter from Colombo, Sri Lanka.',
    images: ['/images/shaun-expressive.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
