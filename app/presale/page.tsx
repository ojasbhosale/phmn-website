"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Wallet, Shield, CheckCircle, Clock, Zap, DollarSign, Target, Lock, TrendingUp, Gift, Award, Users } from "lucide-react"

export default function PresalePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 15,
  })

  const [purchaseAmount, setPurchaseAmount] = useState("")
  const [tokenAmount, setTokenAmount] = useState(0)
  const [showClaimSection, setShowClaimSection] = useState(false)

  const presalePhases = [
    {
      phase: "Phase 1 - Early Bird",
      price: "$0.005",
      allocation: "100M PHMN",
      status: "completed",
      progress: 100,
      raised: "$500,000",
      bonus: "50% Bonus + NFT"
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
      phase: "Phase 3 - Final Call",
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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
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
      setTotalRaised((prev) => prev + Math.floor(Math.random() * 150))
    }, 6000)

    return () => {
      clearInterval(timer)
      clearInterval(participantTimer)
    }
  }, [])

  useEffect(() => {
    const amount = parseFloat(purchaseAmount) || 0
    const currentPrice = 0.01 // Phase 2 price
    setTokenAmount(Math.floor(amount / currentPrice * 1.25)) // 25% bonus included
  }, [purchaseAmount])

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden particle-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 slide-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300"> Presale Live - Limited Time</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text leading-tight">
              PHMN Presale
              <br />
              <span className="text-3xl md:text-4xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                🚀 Mobile Mining Revolution
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong>Join 12,000+ investors</strong> securing PHMN at exclusive presale prices. 
              <br className="hidden md:block" />
              Mine crypto on your phone. Earn passive income. Shape the future.
            </p>

            {/* Enhanced Countdown Timer */}
            <div className="space-y-4">
              <div className="text-lg font-semibold text-purple-300">⏰ Phase 2 ends in:</div>
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
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 slide-in-up max-w-4xl mx-auto" style={{ animationDelay: "0.4s" }}>
              <div className="glass-strong rounded-2xl p-4 border border-purple-500/20">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-muted-foreground">Raised</span>
                </div>
                <div className="text-xl font-bold gradient-text">
                  ${isClient ? totalRaised.toLocaleString() : "1,475,000"}
                </div>
              </div>
              <div className="glass-strong rounded-2xl p-4 border border-purple-500/20">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-muted-foreground">Investors</span>
                </div>
                <div className="text-xl font-bold gradient-text">
                  {isClient ? participants.toLocaleString() : "12,847"}
                </div>
              </div>
              <div className="glass-strong rounded-2xl p-4 border border-purple-500/20">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Target className="w-5 h-5 text-pink-400" />
                  <span className="text-sm text-muted-foreground">Progress</span>
                </div>
                <div className="text-xl font-bold gradient-text">65%</div>
              </div>
              <div className="glass-strong rounded-2xl p-4 border border-purple-500/20">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Gift className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-muted-foreground">Bonus</span>
                </div>
                <div className="text-xl font-bold gradient-text">25%</div>
              </div>
            </div>

            {/* Enhanced Main CTA */}
            <div className="space-y-6 slide-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="max-w-md mx-auto space-y-4">
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    placeholder="Enter USD amount"
                    value={purchaseAmount}
                    onChange={(e) => setPurchaseAmount(e.target.value)}
                    className="flex-1 bg-purple-900/20 border-purple-500/30 text-white placeholder:text-purple-300"
                  />
                  <Button className="gradient-primary cursor-pointer hover-glow px-6 py-3 text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    <Wallet className="w-5 h-5" />
                  </Button>
                </div>
                {tokenAmount > 0 && (
                  <div className="text-sm text-center p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <span className="text-green-400">You&apos;ll receive: <strong>{tokenAmount.toLocaleString()} PHMN</strong></span>
                    <div className="text-xs text-green-300 mt-1">Includes 25% Phase 2 bonus!</div>
                  </div>
                )}
              </div>
              <Button className="gradient-primary cursor-pointer hover-glow px-12 py-4 text-white text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <Wallet className="w-6 h-6 mr-3" />
                Connect Wallet & Buy PHMN
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Presale Phases */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text mb-6">Presale Phases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three exclusive phases with decreasing bonuses and increasing prices. Early participants get maximum rewards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {presalePhases.map((phase, index) => (
              <Card
                key={phase.phase}
                className={`glass-strong border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-scale slide-in-up overflow-hidden ${
                  phase.status === "active" ? "glow-pulse ring-2 ring-purple-500/20" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-space-grotesk gradient-text">{phase.phase}</CardTitle>
                    {phase.status === "completed" && <Badge className="bg-green-500/20 text-green-400 border-green-500/30">✅ Completed</Badge>}
                    {phase.status === "active" && <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 glow-effect">🔥 LIVE</Badge>}
                    {phase.status === "upcoming" && <Badge variant="outline" className="border-purple-500/20">⏳ Soon</Badge>}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold gradient-text font-space-grotesk">{phase.price}</div>
                    <div className="text-sm text-muted-foreground">per PHMN token</div>
                    <Badge variant="secondary" className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-300 border-yellow-500/20">
                      🎁 {phase.bonus}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Allocation</span>
                      <span className="font-semibold">{phase.allocation}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Funds Raised</span>
                      <span className="font-semibold text-green-400">{phase.raised}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completion</span>
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
                    {phase.status === "completed" ? "Sold Out" : phase.status === "active" ? "Buy Now - 25% Bonus" : "Coming Soon"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How to Participate */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text mb-6">How to Participate</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple 4-step process to secure your PHMN tokens and join the mobile mining revolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "1", 
                title: "Connect Wallet", 
                desc: "Connect your Phantom, Solflare, or any Solana-compatible wallet securely", 
                icon: Wallet,
                color: "purple",
                detail: "Support for 15+ wallets"
              },
              { 
                step: "2", 
                title: "Select Amount", 
                desc: "Choose your investment amount and see bonus tokens calculated automatically", 
                icon: Target,
                color: "pink",
                detail: "Min: $50 | Max: $50,000"
              },
              {
                step: "3",
                title: "Confirm Purchase",
                desc: "Review transaction details and confirm your PHMN purchase on-chain",
                icon: CheckCircle,
                color: "blue",
                detail: "Instant confirmation"
              },
              { 
                step: "4", 
                title: "Claim & Stake", 
                desc: "Claim your tokens after presale and optionally stake for additional rewards", 
                icon: Gift,
                color: "green",
                detail: "Up to 50% APY staking"
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
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                  <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 text-xs">
                    {item.detail}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Token Claim System */}
      <section className="py-20 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text mb-6">Token Claim & Distribution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent distribution schedule with immediate claiming after presale completion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-strong border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 slide-in-up">
              <CardHeader>
                <CardTitle className="text-2xl font-space-grotesk gradient-text flex items-center">
                  <Gift className="w-6 h-6 mr-2" />
                  Claim Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <span>Presale Tokens (75%)</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Available at TGE</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <span>Bonus Tokens (25%)</span>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">30-day vesting</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <span>Staking Rewards</span>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Daily distribution</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-strong border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 slide-in-up">
              <CardHeader>
                <CardTitle className="text-2xl font-space-grotesk gradient-text flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Claim Portal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                  <Clock className="w-12 h-12 mx-auto mb-3 text-purple-400" />
                  <h3 className="text-lg font-bold gradient-text mb-2">Coming Soon</h3>
                  <p className="text-sm text-muted-foreground">
                    Token claiming portal will be available 24 hours before Token Generation Event (TGE)
                  </p>
                </div>
                <Button 
                  onClick={() => setShowClaimSection(!showClaimSection)}
                  className="w-full bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300"
                >
                  <Gift className="w-4 h-4 mr-2" />
                  Preview Claim Interface
                </Button>
                
                {showClaimSection && (
                  <div className="space-y-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="flex justify-between text-sm">
                      <span>Your Purchase:</span>
                      <span className="font-semibold">Not connected</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Claimable Now:</span>
                      <span className="font-semibold text-green-400">-- PHMN</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Vesting:</span>
                      <span className="font-semibold text-blue-400">-- PHMN</span>
                    </div>
                    <Button disabled className="w-full mt-2">
                      Connect wallet to claim
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Security & Trust */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text mb-6">Security & Trust</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your investment protected with military-grade security and complete transparency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: CheckCircle,
                title: "Verified Contract",
                desc: "Smart contract professionally audited by CertiK and verified on Solscan for complete transparency",
                color: "green",
                badge: "Audit Complete"
              },
              {
                icon: Shield,
                title: "Locked Liquidity",
                desc: "100% of liquidity permanently locked for 2 years via multi-signature wallet to ensure project stability",
                color: "purple",
                badge: "2-Year Lock"
              },
              {
                icon: Lock,
                title: "Team Vesting",
                desc: "Team tokens locked with 4-year vesting schedule and 1-year cliff for long-term commitment",
                color: "blue",
                badge: "4-Year Vesting"
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
                  <Badge className={`bg-${item.color}-500/20 text-${item.color}-400 border-${item.color}-500/30 mb-4`}>
                    {item.badge}
                  </Badge>
                  <h3 className="text-xl font-bold gradient-text font-space-grotesk mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tokenomics Display */}
          <Card className="glass-strong border-purple-500/20 slide-in-up">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-space-grotesk gradient-text">Token Distribution</CardTitle>
              <p className="text-muted-foreground">Transparent allocation ensuring long-term project success</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { label: "Presale", percent: "35%", amount: "350M", color: "purple" },
                  { label: "Liquidity", percent: "25%", amount: "250M", color: "blue" },
                  { label: "Development", percent: "20%", amount: "200M", color: "green" },
                  { label: "Marketing", percent: "15%", amount: "150M", color: "pink" },
                  { label: "Team", percent: "5%", amount: "50M", color: "yellow" }
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                    <div className={`text-2xl font-bold text-${item.color}-400 mb-2`}>{item.percent}</div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-xs text-gray-400">{item.amount} PHMN</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-strong border-purple-500/20 shadow-2xl shadow-purple-500/10 slide-in-up overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"></div>
            <CardContent className="relative p-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center glow-pulse">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold gradient-text mb-4">
                Last Chance - Phase 2 Ending Soon! 🚨
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                <strong>25% bonus expires in {timeLeft.days} days!</strong> Next phase price increases to $0.02 per token. 
                Secure your position in the mobile mining revolution today.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="text-green-400 font-bold">✅ Current Price</div>
                  <div className="text-2xl font-bold gradient-text">$0.01</div>
                </div>
                <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <div className="text-yellow-400 font-bold">🎁 Your Bonus</div>
                  <div className="text-2xl font-bold gradient-text">+25%</div>
                </div>
                <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                  <div className="text-red-400 font-bold">⚠️ Next Phase</div>
                  <div className="text-2xl font-bold gradient-text">$0.02</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-primary cursor-pointer hover-glow px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  <Wallet className="w-5 h-5 mr-2" />
                  Buy PHMN Tokens Now
                </Button>
                <Button variant="outline" className="border-purple-500/20 hover:border-purple-500/40 cursor-pointer px-8 py-4 text-lg">
                  <Shield className="w-5 h-5 mr-2" />
                  View Smart Contract
                </Button>
              </div>
              
              <div className="mt-8 flex justify-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Audited Contract</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Lock className="w-4 h-4 text-blue-400" />
                  <span>Locked Liquidity</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>KYC Verified</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}