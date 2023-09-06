import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/misc/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Campechanos app',
  description: 'Campechanos app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="esp">
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
