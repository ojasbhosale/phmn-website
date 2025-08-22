"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Wallet, Shield, CheckCircle, Clock, Zap, DollarSign, Target, Lock, TrendingUp } from "lucide-react"

export default function PresalePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 15,
  })

  const presalePhases = [
    {
      phase: "Phase 1 - Private Sale",
      price: "$0.005",
      allocation: "100M PHMN",
      status: "completed",
      progress: 100,
      raised: "$500,000",
      bonus: "50% Bonus"
    },
    {
      phase: "Phase 2 - Public Sale",
      price: "$0.01",
      allocation: "150M PHMN",
      status: "active",
      progress: 65,
      raised: "$975,000",
      bonus: "25% Bonus"
    },
    {
      phase: "Phase 3 - Final Sale",
      price: "$0.02",
      allocation: "100M PHMN",
      status: "upcoming",
      progress: 0,
      raised: "$0",
      bonus: "10% Bonus"
    },
  ]

  const [totalRaised, setTotalRaised] = useState(1475000)
  const [participants, setParticipants] = useState(12847)

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
      setParticipants((prev) => prev + Math.floor(Math.random() * 2))
      setTotalRaised((prev) => prev + Math.floor(Math.random() * 100))
    }, 8000)

    return () => {
      clearInterval(timer)
      clearInterval(participantTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden particle-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 slide-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <DollarSign className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Presale Live</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text leading-tight">
              PHMN Presale
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join the revolution! Secure your PHMN tokens at exclusive presale prices before public launch.
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
            <div className="flex flex-wrap justify-center items-center gap-8 slide-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-lg font-semibold">${totalRaised.toLocaleString()} Raised</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-pink-400" />
                <span className="text-lg font-semibold">{participants.toLocaleString()} Investors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-lg font-semibold">65% Complete</span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="slide-in-up" style={{ animationDelay: "0.6s" }}>
              <Button className="gradient-primary cursor-pointer hover-glow px-10 py-4 text-white text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <Wallet className="w-6 h-6 mr-3" />
                Buy PHMN Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Presale Phases */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text mb-6">Presale Phases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exclusive early access with decreasing bonuses across three phases
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {presalePhases.map((phase, index) => (
              <Card
                key={phase.phase}
                className={`glass-strong border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-scale slide-in-up overflow-hidden ${
                  phase.status === "active" ? "glow-pulse" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-space-grotesk gradient-text">{phase.phase}</CardTitle>
                    {phase.status === "completed" && <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>}
                    {phase.status === "active" && <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 glow-effect">Live</Badge>}
                    {phase.status === "upcoming" && <Badge variant="outline" className="border-purple-500/20">Soon</Badge>}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold gradient-text font-space-grotesk">{phase.price}</div>
                    <div className="text-sm text-muted-foreground">per PHMN token</div>
                    <Badge variant="secondary" className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/20">
                      {phase.bonus}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Allocation</span>
                      <span className="font-semibold">{phase.allocation}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Raised</span>
                      <span className="font-semibold text-green-400">{phase.raised}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-semibold">{phase.progress}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={phase.progress} className="h-3 bg-purple-900/20" />
                      <div 
                        className="absolute top-0 left-0 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500" 
                        style={{ width: `${phase.progress}%` }}
                      />
                    </div>
                  </div>

                  <Button
                    className={`w-full py-3 font-semibold transition-all duration-300 ${
                      phase.status === "active"
                        ? "gradient-primary hover-glow shadow-lg cursor-pointer"
                        : phase.status === "completed"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30 cursor-not-allowed"
                        : "bg-purple-500/10 text-purple-300 border border-purple-500/20 cursor-not-allowed"
                    }`}
                    disabled={phase.status !== "active"}
                  >
                    {phase.status === "completed" && <CheckCircle className="w-4 h-4 mr-2" />}
                    {phase.status === "active" && <Zap className="w-4 h-4 mr-2" />}
                    {phase.status === "upcoming" && <Clock className="w-4 h-4 mr-2" />}
                    {phase.status === "completed" ? "Sold Out" : phase.status === "active" ? "Buy Now" : "Coming Soon"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text mb-6">How to Participate</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps to secure your PHMN tokens
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "1", 
                title: "Connect Wallet", 
                desc: "Connect your Phantom, Solflare, or any Solana wallet", 
                icon: Wallet,
                color: "purple"
              },
              { 
                step: "2", 
                title: "Select Amount", 
                desc: "Choose how many PHMN tokens you want to purchase", 
                icon: Target,
                color: "pink"
              },
              {
                step: "3",
                title: "Confirm Transaction",
                desc: "Review details and confirm your purchase on blockchain",
                icon: CheckCircle,
                color: "blue"
              },
              { 
                step: "4", 
                title: "Claim Tokens", 
                desc: "Claim your PHMN tokens after presale completion", 
                icon: Zap,
                color: "green"
              },
            ].map((item, index) => (
              <Card
                key={item.step}
                className="glass-strong border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-scale slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-pulse`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-purple-400 font-semibold mb-2">Step {item.step}</div>
                  <h3 className="text-lg font-bold gradient-text font-space-grotesk mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text mb-6">Security & Trust</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your investment is protected with industry-leading security measures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Verified Contract",
                desc: "Smart contract audited and verified on Solscan for complete transparency",
                color: "green"
              },
              {
                icon: Shield,
                title: "Locked Liquidity",
                desc: "100% of liquidity locked for 2 years to ensure project stability",
                color: "purple"
              },
              {
                icon: Lock,
                title: "Team Tokens Vested",
                desc: "Team allocation locked with 4-year vesting schedule for long-term commitment",
                color: "blue"
              }
            ].map((item, index) => (
              <Card
                key={item.title}
                className="glass-strong border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-scale slide-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-3xl flex items-center justify-center mx-auto mb-6 glow-pulse`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text font-space-grotesk mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-strong border-purple-500/20 shadow-2xl shadow-purple-500/10 slide-in-up">
            <CardContent className="p-12">
              <DollarSign className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 glow-pulse" />
              <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold gradient-text mb-4">
                Don&apos;t Miss Out!
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Presale prices will never be this low again. Secure your position in the mobile mining revolution today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-primary cursor-pointer hover-glow px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  <Wallet className="w-5 h-5 mr-2" />
                  Buy PHMN Tokens
                </Button>
                <Button variant="outline" className="border-purple-500/20 hover:border-purple-500/40 cursor-pointer px-8 py-4 text-lg">
                  View Contract
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}