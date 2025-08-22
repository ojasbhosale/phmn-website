"use client"

import { CheckCircle, Circle, Zap, Rocket, Globe } from "lucide-react"

const roadmapData = [
  {
    quarter: "Q1 2024",
    title: "Foundation & Launch",
    status: "completed",
    icon: CheckCircle,
    items: ["Smart Contract Development", "Website Launch", "Community Building", "Whitepaper Release"],
  },
  {
    quarter: "Q2 2024",
    title: "Presale & Marketing",
    status: "active",
    icon: Zap,
    items: ["Presale Launch", "Mobile App Beta", "Influencer Partnerships", "Exchange Listings"],
  },
  {
    quarter: "Q3 2024",
    title: "Mobile Mining",
    status: "upcoming",
    icon: Rocket,
    items: ["Mobile App Release", "Mining Algorithm Launch", "Staking Rewards", "NFT Collection"],
  },
  {
    quarter: "Q4 2024",
    title: "Global Expansion",
    status: "upcoming",
    icon: Globe,
    items: ["Multi-language Support", "Global Marketing", "Major Exchange Listings", "Ecosystem Partnerships"],
  },
]

export default function Roadmap() {
  return (
    <section className="py-20 bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Roadmap</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey to revolutionize mobile crypto mining
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapData.map((phase, index) => {
            const Icon = phase.icon
            return (
              <div
                key={index}
                className={`relative bg-card/50 rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  phase.status === "completed"
                    ? "border-green-500 bg-green-500/10"
                    : phase.status === "active"
                      ? "border-primary bg-primary/10 glow-effect"
                      : "border-border"
                }`}
              >
                {/* Quarter Badge */}
                <div className="absolute -top-3 left-4 bg-background px-3 py-1 rounded-full border border-border">
                  <span className="text-sm font-semibold text-primary">{phase.quarter}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4 mt-4">
                  <Icon
                    className={`w-12 h-12 ${
                      phase.status === "completed"
                        ? "text-green-500"
                        : phase.status === "active"
                          ? "text-primary"
                          : "text-muted-foreground"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-center">{phase.title}</h3>

                {/* Items */}
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Circle
                        className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                          phase.status === "completed"
                            ? "text-green-500"
                            : phase.status === "active"
                              ? "text-primary"
                              : "text-muted-foreground"
                        }`}
                      />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
