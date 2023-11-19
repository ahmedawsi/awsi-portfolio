import { DM_Serif_Text, Faustina, Fruktur, Inter, Quicksand, Roboto, Roboto_Serif, Rubik, Ubuntu } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const dmseriftext = DM_Serif_Text({
  weight: '400',
  subsets: ['latin'] })

  const quicksand =  Quicksand({
    weight: '400',
    subsets: ['latin'], })

export const metadata = {
  title: 'Awsi Dev',
  description: 'Ahmed Awsi\'s portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}     
