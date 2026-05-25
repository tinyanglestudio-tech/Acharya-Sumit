import type { Metadata } from 'next'
import { Cinzel, EB_Garamond } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
})

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Acharya Sumit — Astrologer | Numerologist | Vastu Consultant',
  description: 'Helping you find clarity through the wisdom of Astrology, Numerology and Vastu Shastra.',
  keywords: ['astrologer', 'numerologist', 'vastu consultant', 'Acharya Sumit'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${garamond.variable}`}>
      <head>
        {/* Tiro Devanagari Sanskrit — not in next/font catalog */}
        <link
          href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Sanskrit&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cosmic text-cream antialiased">
        {children}
      </body>
    </html>
  )
}
