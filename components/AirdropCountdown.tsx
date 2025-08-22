"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Clock, Users, Coins } from "lucide-react"

export default function AirdropCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30,
  })

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

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-strong border-purple-500/20 shadow-2xl shadow-purple-500/10 slide-in-up overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
          <CardContent className="relative p-8 lg:p-12 text-center">
            {/* Header */}
            <div className="flex items-center justify-center mb-6 slide-in-up">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mr-4 glow-pulse">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text">
                Airdrop Event
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed slide-in-up" style={{ animationDelay: "0.2s" }}>
              Don&apos;t miss out on free PHMN tokens! Join our massive airdrop before time runs out.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10 slide-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-lg font-semibold">{participants.toLocaleString()} Participants</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coins className="w-5 h-5 text-pink-400" />
                <span className="text-lg font-semibold">Up to 1,000 PHMN</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex justify-center space-x-4 md:space-x-8 mb-10 slide-in-up" style={{ animationDelay: "0.4s" }}>
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

            {/* CTA Button */}
            <div className="slide-in-up" style={{ animationDelay: "0.6s" }}>
              <Button className="gradient-primary hover-glow px-10 py-4 text-xl font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <Clock className="w-6 h-6 mr-3" />
                Join Airdrop Now
              </Button>
            </div>

            {/* Bonus Info */}
            <div className="mt-8 slide-in-up" style={{ animationDelay: "0.8s" }}>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <Gift className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">🎁 Free tokens for early participants</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}