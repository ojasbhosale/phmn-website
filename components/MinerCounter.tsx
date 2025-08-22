"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp } from "lucide-react"

export default function MinerCounter() {
  const [count, setCount] = useState(12438)

  useEffect(() => {
    const interval = setInterval(() => {
        
      setCount((prev) => prev + Math.floor(Math.random() * 3) + 1)

    }, 5000)

    return () => clearInterval(interval)
  }, [])

  

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Counter Card */}
        <Card className="glass-strong border-purple-500/20 shadow-2xl shadow-purple-500/10 mb-12 slide-in-up overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
          <CardContent className="relative p-8 lg:p-16 text-center">
            <div className="flex items-center justify-center mb-8 slide-in-up">
              <div className="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center mr-6 glow-pulse">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center glow-effect">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="space-y-4 slide-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-6xl md:text-8xl font-space-grotesk font-bold gradient-text leading-none">
                {count.toLocaleString()}
              </h2>

              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                Miners and Counting
              </p>

              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-green-400/10 border border-green-500/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">🚀 Growing every second!</span>
              </div>
            </div>
          </CardContent>
        </Card>

        

        {/* Growth Visualization */}
        <Card className="glass-strong border-purple-500/20 mt-12 slide-in-up">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-space-grotesk font-bold gradient-text mb-2">
                Community Growth
              </h3>
              <p className="text-muted-foreground">Join thousands of miners worldwide</p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Progress to 100K miners</span>
                <span className="font-semibold">
                  {Math.round((count / 100000) * 100)}%
                </span>
              </div>
              <div className="relative h-6 bg-purple-900/20 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-500"
                  style={{ width: `${Math.min((count / 100000) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
