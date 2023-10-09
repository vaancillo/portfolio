import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Header } from '@/components/Header'

const roboto = Roboto({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Portfolio JaredDev',
  description: 'Portfolio animated',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  )
}
