import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PhoneMiner Chad (PHMN) - Mine Crypto From Your Phone",
  description:
    "A meme-inspired Solana project bringing crypto mining to everyone's smartphone. Join the PHMN revolution!",
  generator: "PhoneMiner Chad",
  keywords: "crypto, mining, mobile, Solana, PHMN, blockchain, meme coin",
  openGraph: {
    title: "PhoneMiner Chad (PHMN) - Revolutionary Mobile Mining",
    description: "Mine crypto directly from your phone with PHMN on Solana",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <Navigation />
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  )
}
