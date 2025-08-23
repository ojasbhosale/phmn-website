"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Zap, Globe, Sparkles, Award, Target, Rocket } from "lucide-react"

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function MinerCounter() {
  const [count, setCount] = useState(12438)
  const [previousCount, setPreviousCount] = useState(12438)
  const [isAnimating, setIsAnimating] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])

  // Generate floating particles
  useEffect(() => {
    const generateParticles = (): Particle[] => {
      return Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    }
    setParticles(generateParticles())
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousCount(count)
      setIsAnimating(true)
      
      setTimeout(() => {
        setCount((prev) => prev + Math.floor(Math.random() * 5) + 2)
        setIsAnimating(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [count])

  // Create sparkle effect when count changes
  const createSparkles = () => {
    return Array.from({ length: 8 }, (_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
        style={{
          left: `${50 + (Math.random() - 0.5) * 60}%`,
          top: `${50 + (Math.random() - 0.5) * 60}%`,
          animationDelay: `${i * 0.1}s`,
          animationDuration: '1s'
        }}
      />
    ))
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Floating Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Counter Card */}
        <Card className="glass-strong border-purple-500/20 particle-bg shadow-2xl shadow-purple-500/10 mb-12 slide-in-up overflow-hidden relative group">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
          
          {/* Animated Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
          
          {/* Sparkle Effects */}
          {isAnimating && (
            <div className="absolute inset-0 pointer-events-none">
              {createSparkles()}
            </div>
          )}

          <CardContent className="relative p-8 lg:p-16">
            {/* Header Icons Row */}
            <div className="flex items-center justify-center space-x-6 mb-8 slide-in-up">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center glow-pulse transform hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <div className="hidden md:block w-0.5 h-12 bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
                
                <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center glow-effect transform hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                
                <div className="hidden md:block w-0.5 h-12 bg-gradient-to-b from-transparent via-pink-500 to-transparent"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center glow-pulse transform hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Main Counter */}
            <div className="text-center space-y-6">
              <div className="relative slide-in-up" style={{ animationDelay: "0.2s" }}>
                {/* Background Number Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl md:text-9xl font-space-grotesk font-bold text-purple-500/10 blur-sm">
                    {previousCount.toLocaleString()}
                  </span>
                </div>
                
                {/* Main Counter with Scaling Animation */}
                <h2 className={`relative text-6xl md:text-8xl lg:text-9xl font-space-grotesk font-bold gradient-text leading-none transition-all duration-500 ${
                  isAnimating ? 'scale-110 text-yellow-400' : 'scale-100'
                }`}>
                  {count.toLocaleString()}
                </h2>
                
                {/* Pulse Ring Effect */}
                <div className={`absolute inset-0 rounded-full border-4 border-purple-500/30 ${isAnimating ? 'animate-ping' : ''}`}></div>
              </div>

              <div className="space-y-4 slide-in-up" style={{ animationDelay: "0.4s" }}>
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  <span className="gradient-text font-bold">Active Miners</span> Worldwide
                </p>

                {/* Live Status Badges */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-green-400/10 border border-green-500/20 rounded-full px-6 py-3 backdrop-blur-sm transform hover:scale-105 transition-transform duration-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <Zap className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">Growing Live!</span>
                  </div>
                  
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-blue-400/10 border border-blue-500/20 rounded-full px-6 py-3 backdrop-blur-sm transform hover:scale-105 transition-transform duration-200">
                    <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
                    <span className="text-blue-400 font-semibold">+{Math.floor(Math.random() * 5) + 2}/min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mining Activity Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 slide-in-up" style={{ animationDelay: "0.6s" }}>
              {[
                { icon: Target, label: "Mining", value: "24/7", color: "purple" },
                { icon: Award, label: "Rewards", value: "Daily", color: "yellow" },
                { icon: Rocket, label: "Growth", value: "+245%", color: "green" },
                { icon: Globe, label: "Countries", value: "150+", color: "blue" }
              ].map((stat) => (
                <div 
                  key={stat.label}
                  className="text-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Growth Visualization */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Progress Card */}
          <Card className="glass-strong border-purple-500/20 slide-in-up group hover:border-purple-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-space-grotesk font-bold gradient-text mb-2 flex items-center justify-center">
                  <Target className="w-5 h-5 mr-2" />
                  Next Milestone
                </h3>
                <p className="text-muted-foreground text-sm">Journey to 100K miners</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-semibold gradient-text">
                    {Math.round((count / 100000) * 100)}%
                  </span>
                </div>
                <div className="relative h-6 bg-purple-900/20 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10 rounded-full"></div>
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-1000 rounded-full  overflow-hidden group-hover:shadow-lg group-hover:shadow-purple-500/50"
                    style={{ width: `${Math.min((count / 100000) * 100, 100)}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  {(100000 - count).toLocaleString()} miners to go!
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Global Reach Card */}
          <Card className="glass-strong border-purple-500/20 slide-in-up group hover:border-purple-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-space-grotesk font-bold gradient-text mb-2 flex items-center justify-center">
                  <Globe className="w-5 h-5 mr-2 animate-spin" style={{ animationDuration: '10s' }} />
                  Global Community
                </h3>
                <p className="text-muted-foreground text-sm">Miners across the world</p>
              </div>

              <div className="space-y-4">
                {[
                  { region: "North America", percentage: 35, color: "blue" },
                  { region: "Europe", percentage: 28, color: "purple" },
                  { region: "Asia", percentage: 25, color: "pink" },
                  { region: "Others", percentage: 12, color: "green" }
                ].map((region, regionIndex) => (
                  <div key={region.region} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{region.region}</span>
                      <span className="font-semibold">{region.percentage}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r from-${region.color}-500 to-${region.color}-400 transition-all duration-1000 rounded-full`}
                        style={{ 
                          width: `${region.percentage}%`,
                          animationDelay: `${regionIndex * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}