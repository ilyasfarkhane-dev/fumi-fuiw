import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import InteractiveCursor from "../components/interactive-cursor"
import ScrollToTopButton from "../components/scroll-to-top-button"
import SocialSidebar from "../components/SocialSidebar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "fumi-fuiw"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} font-sans`}>
        <InteractiveCursor />
        <SocialSidebar />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}
