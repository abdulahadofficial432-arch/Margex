import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/tokens.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkipLink from '@/components/SkipLink'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Margex - Crypto Trading Platform | Trade with Leverage',
  description: 'Trade cryptocurrencies with leverage on Margex. Advanced trading platform with copy trading, mobile apps, and professional tools.',
  keywords: 'crypto trading, leverage trading, cryptocurrency exchange, copy trading, bitcoin trading',
  metadataBase: new URL('https://margex.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Margex - Crypto Trading Platform',
    description: 'Trade cryptocurrencies with leverage on Margex',
    type: 'website',
    url: 'https://margex.com',
    siteName: 'Margex',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Margex - Crypto Trading Platform',
    description: 'Trade cryptocurrencies with leverage on Margex',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SkipLink />
        <Header />
        <main id="main-content" className="pt-16" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

