import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
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
  title: 'Shaun Perera — Music',
  description:
    'Official website of Shaun Perera, indie singer-songwriter from Colombo, Sri Lanka. Bilingual originals in English and Sinhala. Voice of Magic Box Mixup.',
  keywords: ['Shaun Perera', 'Sri Lanka music', 'indie singer', 'Obamai', 'Magic Box Mixup', 'Sinhala music'],
  openGraph: {
    title: 'Shaun Perera — Music',
    description: 'Official website of Shaun Perera, indie singer-songwriter from Colombo, Sri Lanka.',
    type: 'website',
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
      <body>{children}</body>
    </html>
  )
}
