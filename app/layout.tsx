import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "John's Portfolio",
  description: "Portfolio for John Pillsbury",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " max-h-screen"}>
        <Header />
        {children}
      </body>
    </html>
  )
}
