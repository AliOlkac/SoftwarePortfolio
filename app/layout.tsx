import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ClientProvider from '@/components/providers/ClientProvider'

// Font tanımlamaları
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Ali Olkaç | Portfolio',
  description: 'Computer Engineer & Web/AI Developer',
  keywords: ['portfolio', 'developer', 'full-stack', 'web development', 'react', 'next.js'],
  authors: [{ name: 'Ali Olkaç' }],
  creator: 'Ali Olkaç',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://aliolkac.com',
    title: 'Ali Olkaç | Portfolio',
    description: 'Computer Engineer & Web/AI Developer',
    siteName: 'Ali Olkaç Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Olkaç | Portfolio',
    description: 'Computer Engineer & Web/AI Developer',
    creator: '@aliolkac',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-background text-text antialiased">
        <ClientProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
} 