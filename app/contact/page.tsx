"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageCircle, Phone, MapPin, Send, Clock, Users, Headphones } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@phoneminerchad.com",
      response: "24-48 hours",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      response: "Instant response",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with us",
      contact: "+1 (555) 123-4567",
      response: "Mon-Fri 9AM-6PM EST",
    },
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Crypto Street, Suite 456",
      country: "United States",
      timezone: "PST",
    },
    {
      city: "Singapore",
      address: "456 Blockchain Avenue, Level 12",
      country: "Singapore",
      timezone: "SGT",
    },
    {
      city: "London",
      address: "789 DeFi Lane, Floor 8",
      country: "United Kingdom",
      timezone: "GMT",
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden particle-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 slide-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <Headphones className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">24/7 Support</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text leading-tight">
              Get In Touch
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about PhoneMiner Chad? Our team is here to help you start your mobile mining journey.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center items-center space-x-8 slide-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-lg font-semibold">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-pink-400" />
                <span className="text-lg font-semibold">Global Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <Card
                key={method.title}
                className="glass-strong border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-scale slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 glow-pulse">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text font-space-grotesk mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="font-semibold text-lg mb-2">{method.contact}</p>
                  <p className="text-sm text-purple-400">{method.response}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="slide-in-up">
              <Card className="glass-strong border-purple-500/20 shadow-2xl shadow-purple-500/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-space-grotesk gradient-text">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">Fill out the form and we&apos;ll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Full Name</label>
                        <Input
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="glass-input border-purple-500/20 focus:border-purple-500/50 h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email Address</label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="glass-input border-purple-500/20 focus:border-purple-500/50 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Subject</label>
                        <Input
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          className="glass-input border-purple-500/20 focus:border-purple-500/50 h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Category</label>
                        <Select onValueChange={(value) => handleInputChange("category", value)}>
                          <SelectTrigger className="glass-input border-purple-500/20 focus:border-purple-500/50 h-12">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="press">Press & Media</SelectItem>
                            <SelectItem value="investment">Investment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Message</label>
                      <Textarea
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="glass-input border-purple-500/20 focus:border-purple-500/50 min-h-32 resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-primary hover-glow py-4 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Locations */}
            <div className="space-y-8 slide-in-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <h2 className="text-3xl font-space-grotesk font-bold gradient-text mb-6">Our Offices</h2>
                <p className="text-muted-foreground mb-8">Visit us at one of our global locations</p>
              </div>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card
                    key={office.city}
                    className="glass-strong border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 slide-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center glow-pulse">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold gradient-text font-space-grotesk">{office.city}</h3>
                          <p className="text-muted-foreground text-sm mb-1">{office.address}</p>
                          <p className="text-muted-foreground text-sm mb-2">{office.country}</p>
                          <p className="text-purple-400 text-sm font-medium">{office.timezone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Link */}
              <Card className="glass-strong border-purple-500/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold gradient-text font-space-grotesk mb-2">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">Find quick answers to common questions</p>
                  <Button variant="outline" className="border-purple-500/20 hover:bg-purple-500/10 bg-transparent">
                    View FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
