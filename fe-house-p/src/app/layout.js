import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Campechanos app',
  description: 'Campechanos app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="esp">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
