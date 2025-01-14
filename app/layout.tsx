import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "CA's Trumped-Up Treasury - Making Dollars Great Again!",
  description: 'Explore our hilarious collection of Trump-themed dollar bills. California has never been so entertained!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

