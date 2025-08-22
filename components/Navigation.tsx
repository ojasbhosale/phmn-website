"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Wallet } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/presale", label: "Presale" },
    { href: "/airdrop", label: "Airdrop" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong shadow-2xl shadow-purple-500/10" : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
            <Link href="/" className="flex items-center">
            <Image
                src="/logo2.png"                     
                alt="PhoneMiner Chad Logo"
                width={160}                         
                height={48}                        
                className="h-12 w-auto object-contain rounded-xl"
                priority
            />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-all duration-300 font-medium group slide-in-up ${
                  isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 gradient-primary transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:flex">
            <Button className="gradient-primary cursor-pointer hover-glow glow-effect px-6 py-3 font-semibold text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-accent/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden slide-in-up min-h-screen">
            <div className="px-2 pt-4 pb-6 backgroud space-y-2 glass-strong rounded-2xl mt-4 mx-2 shadow-2xl border border-purple-500/20">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 transition-all duration-300 rounded-xl font-medium slide-in-left ${
                    isActive(item.href)
                      ? "text-primary bg-accent/20"
                      : "text-foreground hover:text-primary hover:bg-accent/10"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Button className="w-full gradient-primary hover-glow py-3 font-semibold text-white border-0 shadow-lg">
                  <Wallet className="w-5 h-5 mr-2" />
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
