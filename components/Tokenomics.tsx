"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Presale", value: 35, color: "#A7469A" },
  { name: "Mining Rewards", value: 30, color: "#8869AF" },
  { name: "Liquidity", value: 15, color: "#B969AE" },
  { name: "Team", value: 10, color: "#6B429C" },
  { name: "Marketing", value: 10, color: "#D3A5CF" },
]

export default function Tokenomics() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Tokenomics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent and fair distribution designed for long-term growth and community rewards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <div className="bg-card/50 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Token Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Token Details */}
          <div className="space-y-6">
            <div className="bg-card/50 rounded-xl p-6 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Total Supply</h3>
              <p className="text-4xl font-bold mb-2">1,000,000,000</p>
              <p className="text-muted-foreground">PHMN Tokens</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.map((item, index) => (
                <div key={index} className="bg-card/30 rounded-lg p-4 border border-border">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                    <span className="font-semibold">{item.name}</span>
                  </div>
                  <p className="text-2xl font-bold" style={{ color: item.color }}>
                    {item.value}%
                  </p>
                  <p className="text-sm text-muted-foreground">{(item.value * 10).toLocaleString()}M PHMN</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
