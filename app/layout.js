import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saba Azad | Portfolio',
  description: 'Passionate designer and software developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
