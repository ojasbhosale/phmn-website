"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Gift, Clock, Users, Star, Trophy, Coins, Rocket } from "lucide-react"

export default function AirdropPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30,
  })
  const [email, setEmail] = useState("")
  const [walletAddress, setWalletAddress] = useState("")
  const [participants, setParticipants] = useState(28547)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    const participantTimer = setInterval(() => {
      setParticipants((prev) => prev + Math.floor(Math.random() * 3))
    }, 5000)

    return () => {
      clearInterval(timer)
      clearInterval(participantTimer)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle airdrop registration
    console.log("Airdrop registration:", { email, walletAddress })
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden particle-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 slide-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <Gift className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Free PHMN Tokens</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text leading-tight">
              PHMN Airdrop
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join the largest mobile mining airdrop in crypto history. Get free PHMN tokens and be part of the
              revolution.
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center space-x-4 md:space-x-8 slide-in-up" style={{ animationDelay: "0.2s" }}>
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="glass-strong rounded-2xl p-4 md:p-6 border border-purple-500/20 glow-pulse">
                    <div className="text-3xl md:text-4xl font-bold gradient-text font-space-grotesk">
                      {value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-muted-foreground capitalize mt-1">{unit}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex justify-center items-center space-x-8 slide-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-lg font-semibold">{participants.toLocaleString()} Participants</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coins className="w-5 h-5 text-pink-400" />
                <span className="text-lg font-semibold">50M PHMN Pool</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-strong border-purple-500/20 shadow-2xl shadow-purple-500/10 slide-in-up">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-space-grotesk gradient-text">Join the Airdrop</CardTitle>
              <p className="text-muted-foreground mt-2">Complete the steps below to secure your free PHMN tokens</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="glass-input border-purple-500/20 focus:border-purple-500/50 h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Solana Wallet Address</label>
                    <Input
                      type="text"
                      placeholder="Your Solana wallet address"
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      className="glass-input border-purple-500/20 focus:border-purple-500/50 h-12"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary hover-glow py-4 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Gift className="w-6 h-6 mr-2" />
                  Claim Your Airdrop
                </Button>
              </form>

              {/* Requirements */}
              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-purple-500/20">
                <div className="text-center space-y-3 slide-in-up" style={{ animationDelay: "0.1s" }}>
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto glow-pulse">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">Follow Social</h3>
                  <p className="text-sm text-muted-foreground">Follow us on Twitter and join our Telegram</p>
                </div>

                <div className="text-center space-y-3 slide-in-up" style={{ animationDelay: "0.2s" }}>
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto glow-pulse">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">Complete Tasks</h3>
                  <p className="text-sm text-muted-foreground">Complete simple social media tasks</p>
                </div>

                <div className="text-center space-y-3 slide-in-up" style={{ animationDelay: "0.3s" }}>
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto glow-pulse">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">Get Tokens</h3>
                  <p className="text-sm text-muted-foreground">Receive your PHMN tokens at launch</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Airdrop Details */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text mb-6">Airdrop Details</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about the PHMN airdrop distribution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Total Pool", value: "50M PHMN", icon: Coins, color: "purple" },
              { title: "Per Participant", value: "Up to 2,500", icon: Gift, color: "pink" },
              { title: "Distribution", value: "At Launch", icon: Clock, color: "blue" },
              { title: "Requirements", value: "Social Tasks", icon: Star, color: "green" },
            ].map((item, index) => (
              <Card
                key={item.title}
                className="glass-strong border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-scale slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-pulse`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-2xl font-bold gradient-text font-space-grotesk">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
