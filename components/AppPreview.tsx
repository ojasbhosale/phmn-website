"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Play, Smartphone, Zap, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AppPreview() {
  const features = [
    {
      icon: Smartphone,
      title: "Easy Mobile Mining",
      description: "Mine PHMN tokens directly from your smartphone. No complex setup, no expensive hardware - just download and start earning.",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Real-time Rewards",
      description: "Watch your PHMN balance grow in real-time. Track your mining progress, earnings, and referral rewards all in one place.",
      color: "pink"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with enterprise-grade security. Your earnings are protected with advanced encryption and secure blockchain technology.",
      color: "blue"
    }
  ]

  const stats = [
    { label: "Pre-registrations", value: "50K+", icon: TrendingUp },
    { label: "Estimated Launch", value: "Q3 2024", icon: Smartphone },
    { label: "Supported Devices", value: "iOS & Android", icon: Download }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 backdrop-blur-sm mb-6">
            <Smartphone className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Mobile App</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text mb-6">
            Mine From Anywhere
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our revolutionary mobile app makes crypto mining as easy as checking your phone. Start earning PHMN tokens with just a few taps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* App Screenshots */}
          <div className="relative slide-in-left">
            <Card className="glass-strong border-purple-500/20 overflow-hidden">
              <CardContent className="p-8">
                <button
                  // onClick={() => console.log("Image button clicked")} 
                  className="relative w-full block focus:outline-none"
                >
                  <Image
                    src="/claim-mobile.png"
                    alt="PhoneMiner Chad Mobile App"
                    width={400}
                    height={800}
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl shadow-purple-500/20 cursor-pointer"
                  />

                  {/* Floating Elements (still inside the button) */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/30 rounded-full blur-xl float-animation"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/30 rounded-full blur-xl float-reverse"></div>
                  <div className="absolute top-1/2 -right-8 w-12 h-12 bg-blue-500/20 rounded-full blur-lg particles-animation"></div>
                </button>
              </CardContent>
            </Card>
          </div>

          {/* App Features */}
          <div className="space-y-6 slide-in-right">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="glass-strong border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-scale slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0 glow-pulse`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold gradient-text font-space-grotesk mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="glass-strong border-purple-500/20 text-center slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 glow-pulse">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text font-space-grotesk mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="glass-strong border-purple-500/20 shadow-2xl shadow-purple-500/10 slide-in-up">
          <CardContent className="p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 glow-pulse">
                <Download className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-space-grotesk font-bold gradient-text mb-4">
                Get Early Access
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Be among the first to experience mobile crypto mining. Join our waitlist and get notified when the app launches.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-primary cursor-pointer hover-glow px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Join Waitlist
                </Button>

                <Button 
                  variant="outline" 
                  className="border-purple-500/20 cursor-pointer hover:border-purple-500/40 px-8 py-4 text-lg backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Badge className="bg-purple-500/10 text-purple-300 border-purple-500/20">
                  iOS Compatible
                </Badge>
                <Badge className="bg-pink-500/10 text-pink-300 border-pink-500/20">
                  Android Compatible
                </Badge>
                <Badge className="bg-blue-500/10 text-blue-300 border-blue-500/20">
                  Coming Soon
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}