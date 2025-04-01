import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ClientProvider from '@/components/providers/ClientProvider'

// Font tanımlamaları - öncelikli olarak minimum font yükleme
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Font yüklenirken sistem fontlarına fallback yapar
  preload: true,   // Yüksek öncelikle font yükleme
  weight: ['400', '500', '700'] // Sadece kullanılan ağırlıkları yükle
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true
})

// Viewport meta etiketi - mobil uyumluluğu için önemli
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00b3ff',
}

export const metadata: Metadata = {
  title: 'Ali Olkaç | Portfolio',
  description: 'Bilgisayar Mühendisliği Öğrencisi & Full-Stack Developer',
  keywords: ['portfolio', 'developer', 'full-stack', 'web development', 'react', 'next.js'],
  authors: [{ name: 'Ali Olkaç' }],
  creator: 'Ali Olkaç',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://aliolkac.com',
    title: 'Ali Olkaç | Portfolio',
    description: 'Bilgisayar Mühendisliği Öğrencisi & Full-Stack Developer',
    siteName: 'Ali Olkaç Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Olkaç | Portfolio',
    description: 'Bilgisayar Mühendisliği Öğrencisi & Full-Stack Developer',
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
        <main className="overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 