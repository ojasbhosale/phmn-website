"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Zap, Users, Shield } from "lucide-react"
// import { TrendingUp } from "lucide-react"

export default function Hero() {
  const [minerCount, setMinerCount] = useState(12438)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    // Animate miner counter
    const interval = setInterval(() => {
      setMinerCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden pt-20 pb-8">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/20 via-transparent to-purple-900/20"></div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/40 rounded-full blur-xl float-animation glow-effect"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/40 rounded-full blur-xl float-reverse glow-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/40 rounded-full blur-xl particles-animation"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl float-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-pink-400/30 rounded-full blur-2xl float-reverse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`inline-flex items-center gap-2 glass-strong px-6 py-3 mt-2 rounded-full mb-8 border border-purple-500/30 transition-all duration-1000 ${isVisible ? "slide-in-up" : "opacity-0"}`}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">
            <span className="gradient-text font-bold">{minerCount.toLocaleString()}</span> Miners and Counting
          </span>
        </div>

        {/* Enhanced Main Headline */}
        <h1
          className={`font-space-grotesk text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 ${isVisible ? "slide-in-up" : "opacity-0 translate-y-10"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <span className="gradient-text neon-text">Mine Crypto</span>
          <br />
          <span className="text-white">From Your Phone</span>
        </h1>

        {/* Enhanced Subheadline */}
        <p
          className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${isVisible ? "slide-in-up" : "opacity-0 translate-y-10"}`}
          style={{ animationDelay: "0.4s" }}
        >
          Join the <span className="gradient-text font-bold">PHMN Revolution</span> - A meme-inspired Solana project
          bringing crypto mining to everyone&apos;s smartphone with{" "}
          <span className="text-purple-400">zero equipment needed</span>
        </p>

        {/* Enhanced CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 ${isVisible ? "slide-in-up" : "opacity-0 translate-y-10"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="gradient-primary cursor-pointer hover-glow glow-pulse text-lg px-10 py-6 font-bold text-white border-0 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover-scale"
          >
            <Zap className="w-6 h-6 mr-3" />
            Join Airdrop Now
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>

          <Button
            size="lg"
            className="glass-strong cursor-pointer border-2 border-purple-500/50 text-white hover:bg-purple-500/20 text-lg px-10 py-6 font-bold hover-glow transition-all duration-300"
          >
            <Smartphone className="w-6 h-6 mr-3" />
            Buy PHMN Token
          </Button>
        </div>

        {/* Enhanced Stats Grid */}
        {/* <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "slide-in-up" : "opacity-0 translate-y-10"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="glass-strong rounded-2xl p-8 border border-purple-500/30 hover-glow hover-scale group">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl font-bold gradient-text mb-3">$7M+</div>
            <div className="text-gray-300 font-medium">Target Presale</div>
            <div className="text-sm text-gray-400 mt-2">Raising funds for global expansion</div>
          </div>

          <div className="glass-strong rounded-2xl p-8 border border-purple-500/30 hover-glow hover-scale group">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl font-bold gradient-text mb-3">1B</div>
            <div className="text-gray-300 font-medium">Total Supply</div>
            <div className="text-sm text-gray-400 mt-2">Fixed supply on Solana blockchain</div>
          </div>

          <div className="glass-strong rounded-2xl p-8 border border-purple-500/30 hover-glow hover-scale group">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl font-bold gradient-text mb-3">350M</div>
            <div className="text-gray-300 font-medium">Presale Allocation</div>
            <div className="text-sm text-gray-400 mt-2">35% available for early investors</div>
          </div>
        </div> */}

        <div
          className={`flex flex-wrap justify-center items-center gap-8 mt-16 opacity-60 transition-all duration-1000 ${isVisible ? "slide-in-up" : "opacity-0 translate-y-10"}`}
          style={{ animationDelay: "1s" }}
        >
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-green-400" />
            <span>Audited Smart Contract</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Solana Powered</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-blue-400" />
            <span>Community Driven</span>
          </div>
        </div>
      </div>
    </section>
  )
}
