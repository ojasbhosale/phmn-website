"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Twitter, Send, Mail, Github, ExternalLink, FileText, Shield, Users } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Send, href: "#", label: "Telegram", color: "hover:text-blue-500" },
    { icon: Mail, href: "#", label: "Email", color: "hover:text-purple-400" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" }
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Presale", href: "/presale" },
    { name: "Airdrop", href: "/airdrop" },
    { name: "Team", href: "/team" }
  ]

  const resources = [
    { name: "Whitepaper", href: "#", icon: FileText },
    { name: "Smart Contract", href: "#", icon: ExternalLink },
    { name: "Audit Report", href: "#", icon: Shield },
    { name: "Community", href: "#", icon: Users }
  ]

  const stats = [
    { label: "Total Miners", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "Tokens Mined", value: "1M+" }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-purple-900/10 via-background to-pink-900/10 border-t border-purple-500/20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6 px-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center glow-pulse">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="font-space-grotesk font-bold text-2xl gradient-text">PhoneMiner Chad</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                The first meme-inspired mobile crypto mining project on Solana. Mine PHMN tokens directly from your smartphone and join the revolution that&apos;s making crypto accessible to everyone.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    className={`p-3 glass hover:glass-strong border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 ${social.color}`}
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>

              {/* Stats */}
                <div className="hidden md:grid grid-cols-3 gap-4 pt-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold gradient-text font-space-grotesk">
                        {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                ))}
                </div>

            </div>

            {/* Quick Links */}
            <div className="space-y-6 hidden md:block">
              <h3 className="font-space-grotesk font-bold text-lg gradient-text">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6 hidden md:block">
              <h3 className="font-space-grotesk font-bold text-lg gradient-text">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a 
                      href={resource.href} 
                      className="text-muted-foreground hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <resource.icon className="w-4 h-4 mr-2 group-hover:text-purple-400" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{resource.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="py-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 PhoneMiner Chad (PHMN). All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
              <div className="flex items-center space-x-2 text-purple-400">
                <span>🚀</span>
                <span className="font-semibold">To the moon!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}