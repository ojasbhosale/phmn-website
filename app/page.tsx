"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/Hero"
import MinerCounter from "@/components/MinerCounter"
import Tokenomics from "@/components/Tokenomics"
import Roadmap from "@/components/Roadmap"
import AirdropCountdown from "@/components/AirdropCountdown"
import AppPreview from "@/components/AppPreview"
import Footer from "@/components/Footer"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <div className="particle-bg">
        <Hero />
      </div>

      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        <MinerCounter />
      </section>

      <section className="relative bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10">
        <Tokenomics />
      </section>

      <section className="relative">
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-5"></div>
        <Roadmap />
      </section>

      <section className="relative bg-gradient-to-br from-pink-900/10 via-transparent to-purple-900/10">
        <AirdropCountdown />
      </section>

      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        <AppPreview />
      </section>
      <Footer />
    </div>
  )
}
