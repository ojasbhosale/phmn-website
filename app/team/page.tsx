"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Twitter, Linkedin, Github, Mail, Users, Award, Zap, Target } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former Google engineer with 8+ years in blockchain. Led development of 3 successful crypto projects with $50M+ combined market cap.",
      image: "/placeholder-83xa1.png",
      skills: ["Blockchain", "Leadership", "Strategy"],
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Coinbase senior developer. Expert in Solana ecosystem and mobile app development. Built scalable systems for millions of users.",
      image: "/placeholder-lvih6.png",
      skills: ["Solana", "Mobile Dev", "Architecture"],
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Marcus Thompson",
      role: "Head of Marketing",
      bio: "Growth hacker who scaled 5 crypto projects to 100K+ users. Former marketing lead at Binance with expertise in viral campaigns.",
      image: "/black-male-marketing-executive.png",
      skills: ["Growth", "Community", "Campaigns"],
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Elena Petrov",
      role: "Lead Designer",
      bio: "Award-winning UI/UX designer from Apple. Created interfaces for apps with 50M+ downloads. Specializes in crypto and fintech design.",
      image: "/eastern-european-designer.png",
      skills: ["UI/UX", "Mobile", "Branding"],
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Kim",
      role: "Blockchain Developer",
      bio: "Solana core contributor with deep knowledge of DeFi protocols. Built smart contracts handling $100M+ in transactions.",
      image: "/korean-male-blockchain-developer.png",
      skills: ["Smart Contracts", "DeFi", "Security"],
      social: {
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Lisa Wang",
      role: "Community Manager",
      bio: "Built and managed crypto communities of 500K+ members. Expert in social media strategy and community engagement.",
      image: "/placeholder-pmmo4.png",
      skills: ["Community", "Social Media", "Engagement"],
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
  ]

  const advisors = [
    {
      name: "Dr. James Wilson",
      role: "Technical Advisor",
      company: "Former Solana Labs",
      image: "/senior-male-tech-advisor.png",
    },
    {
      name: "Maria Santos",
      role: "Business Advisor",
      company: "Ex-Coinbase VP",
      image: "/placeholder-37oke.png",
    },
    {
      name: "Robert Chang",
      role: "Investment Advisor",
      company: "Crypto VC Partner",
      image: "/senior-male-investment-advisor.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden particle-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 slide-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Meet Our Team</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text leading-tight">
              The Visionaries
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the experienced team building the future of mobile crypto mining. Combined 50+ years of blockchain
              expertise.
            </p>

            {/* Team Stats */}
            <div className="flex justify-center items-center space-x-8 slide-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-lg font-semibold">50+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-pink-400" />
                <span className="text-lg font-semibold">$200M+ Projects Built</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text mb-6">Core Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The brilliant minds behind PhoneMiner Chad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="glass-strong border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-scale slide-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={400}      
                        height={256}     
                        className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold gradient-text font-space-grotesk">{member.name}</h3>
                      <p className="text-purple-400 font-medium">{member.role}</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-500/10 text-purple-300 border-purple-500/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3 pt-2">
                      {member.social.twitter && (
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-purple-500/10">
                          <Twitter className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.linkedin && (
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-purple-500/10">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.github && (
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-purple-500/10">
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text mb-6">Advisory Board</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry veterans guiding our strategic direction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card
                key={advisor.name}
                className="glass-strong border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-scale slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <Image
                    src={advisor.image || "/placeholder.svg"}
                    alt={advisor.name}
                    width={96}   
                    height={96}  
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-purple-500/20"
                  />
                  <h3 className="text-lg font-bold gradient-text font-space-grotesk">{advisor.name}</h3>
                  <p className="text-purple-400 font-medium text-sm">{advisor.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{advisor.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-strong border-purple-500/20 shadow-2xl shadow-purple-500/10 slide-in-up">
            <CardContent className="p-12">
              <Zap className="w-14 h-14 p-2 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 glow-pulse" />
              <h2 className="text-3xl font-space-grotesk font-bold gradient-text mb-4">Join Our Team</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for talented individuals to join our mission of revolutionizing mobile crypto
                mining.
              </p>
              <Button className="gradient-primary hover-glow px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                careers@phoneminerchad.com
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
