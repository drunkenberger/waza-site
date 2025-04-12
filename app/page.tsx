"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Code, Zap, Sparkles, Brain, Rocket, Clock, Shield, Users, ChevronRight, Menu, ChevronDown, X } from "lucide-react"
import { Footer } from "./components/ui/footer"
import HeroMedia from "./components/HeroMedia"
import { ThemeToggle } from "@/components/theme-toggle"
import { VHSEffect } from "@/components/VHSEffect"
import { ContactForm } from "./components/ContactForm"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('features')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/50">
      <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-2xl bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                WAZA
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
                Features
              </Link>
              <Link href="/services" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
                Services
              </Link>
              <Link href="/projects" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
                Projects
              </Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
                About
              </Link>
              <Link href="#benefits" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
                Benefits
              </Link>
              <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
                Pricing
              </Link>
              <ThemeToggle />
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-md"
              >
                <Link href="#cta">Get Started</Link>
              </Button>
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link href="#features" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                    Features
                  </Link>
                  <Link href="/services" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                    Services
                  </Link>
                  <Link href="/projects" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                    Projects
                  </Link>
                  <Link href="/about" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                    About
                  </Link>
                  <Link href="#benefits" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                    Benefits
                  </Link>
                  <Link href="#pricing" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                    Pricing
                  </Link>
                  <ThemeToggle />
                  <Button
                    asChild
                    className="mt-4 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-md"
                  >
                    <Link href="#cta">Get Started</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#252A34] via-[#252A34] to-[#0D0D0D] overflow-hidden">
          <VHSEffect>
            <div className="absolute inset-0 bg-[url('/bg.png')] opacity-10 bg-cover bg-center"></div>
            <div className="container px-4 md:px-6 mx-auto py-12 md:py-24 lg:py-32 xl:py-48">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-8xl font-black tracking-tighter text-[#FF2E63] mb-8">WAZA</h2>
                    <div className="inline-flex items-center rounded-lg border border-[#FF2E63]/20 bg-[#FF2E63]/10 px-4 py-2 text-base font-medium text-[#FF2E63]">
                      AI-Native Product Studio
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                      Technology That{" "}
                      <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                        Grows Stronger
                      </span>{" "}
                      Through Use
                    </h1>
                    <p className="max-w-[600px] text-[#F9F7F7] md:text-xl">
                      WAZA creates AI-native systems that continuously evolve and improve themselves over time.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 min-[400px]:flex-row">
                    <Link href="#contact" className="flex items-center">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-md w-full"
                      >
                        Book Free Consultation
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#features">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-[#08D9D6] text-[#08D9D6] hover:bg-[#08D9D6]/10 w-full"
                      >
                        Explore Features
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative mt-8 lg:mt-0">
                  {/* 3D effect glow */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#FF2E63] to-[#702DFF] opacity-75 blur-xl transform rotate-2"></div>
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#702DFF] to-[#FF2E63] opacity-50 blur-xl -rotate-2"></div>
                  
                  {/* Main container */}
                  <div className="relative bg-[#252A34] rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-1">
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent"></div>
                    
                    {/* Content container */}
                    <div className="relative p-2">
                      <div className="aspect-square">
                        <HeroMedia
                          src="/hero-video.mp4"
                          width={550}
                          height={550}
                          alt="WAZA AI Technology"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add scroll down arrow */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce mt-12">
              <ChevronDown 
                className="h-12 w-12 text-white/50 hover:text-white transition-colors duration-200"
                onClick={scrollToNextSection}
              />
            </div>
          </VHSEffect>
          {/* Section transition */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-32 bg-gradient-to-t from-white dark:from-[#0D0D0D] via-[#252A34]/50 dark:via-[#0D0D0D]/50 to-transparent"></div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-[#0D0D0D] relative">
          <div className="absolute inset-0 bg-[url('/bg.png')] opacity-5 bg-cover bg-center"></div>
          <div className="container px-4 md:px-6 mx-auto relative">
            <h2 className="text-4xl font-bold tracking-tighter text-center mb-12">
              <span className="text-[#252A34] dark:text-white">The </span>
              <span className="text-[#FF2E63]">Problem</span>
              <span className="text-[#252A34] dark:text-white"> & Our </span>
              <span className="text-[#00C2FF]">Solution</span>
            </h2>
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Problem */}
              <Card className="overflow-hidden border-0 shadow-xl transition-all duration-200 hover:shadow-2xl group bg-card">
                <div className="bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 p-6">
                  <h3 className="text-xl font-bold text-white text-center">The Problem</h3>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-red-100 p-3 text-red-600">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Static Solutions</h4>
                        <p className="text-muted-foreground">
                          Traditional development creates products that quickly become outdated.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-red-100 p-3 text-red-600">
                        <Code className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">AI as an Afterthought</h4>
                        <p className="text-muted-foreground">
                          Most organizations implement AI as a supplementary feature rather than a foundation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-red-100 p-3 text-red-600">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Technical-Creative Disconnect</h4>
                        <p className="text-muted-foreground">
                          Separation between technical implementation and creative design limits innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card className="overflow-hidden border-0 shadow-xl transition-all duration-200 hover:shadow-2xl group bg-card">
                <div className="bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/80 p-6">
                  <h3 className="text-xl font-bold text-white text-center">The WAZA Solution</h3>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-[#FF2E63]/10 p-3 text-[#FF2E63]">
                        <Brain className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Self-Recursive Systems</h4>
                        <p className="text-muted-foreground">
                          Systems that continuously adapt and improve through use.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-[#08D9D6]/10 p-3 text-[#08D9D6]">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">AI-Native Foundation</h4>
                        <p className="text-muted-foreground">
                          Technology built with AI as a core component rather than an add-on feature.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-[#702DFF]/10 p-3 text-[#702DFF]">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Technical-Creative Fusion</h4>
                        <p className="text-muted-foreground">
                          Seamless integration of technical excellence and creative design.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section
          id="features"
          className="w-full py-20 md:py-32 bg-gradient-to-b from-background/50 to-background relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/bg.png')] opacity-5 bg-cover bg-center"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Key{" "}
                  <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                    Features
                  </span>
                </h2>
                <p className="max-w-[600px] text-muted-foreground">Discover what makes WAZA technology revolutionary</p>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#FF2E63] to-[#702DFF] mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative bg-card rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/50 rounded-t-2xl"></div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF2E63]/10 text-[#FF2E63] group-hover:bg-[#FF2E63]/20 transition-colors duration-300">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Self-Recursive Improvement</h3>
                <p className="text-muted-foreground">
                  Systems that continuously optimize based on actual usage patterns.
                </p>
              </div>

              <div className="group relative bg-card rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/50 rounded-t-2xl"></div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#08D9D6]/10 text-[#08D9D6] group-hover:bg-[#08D9D6]/20 transition-colors duration-300">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Native Foundation</h3>
                <p className="text-muted-foreground">
                  Technology built with artificial intelligence as a core component.
                </p>
              </div>

              <div className="group relative bg-card rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#702DFF] to-[#702DFF]/50 rounded-t-2xl"></div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#702DFF]/10 text-[#702DFF] group-hover:bg-[#702DFF]/20 transition-colors duration-300">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Technical-Creative Fusion</h3>
                <p className="text-muted-foreground">
                  Seamless integration of technical excellence and creative design.
                </p>
              </div>

              <div className="group relative bg-card rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/50 rounded-t-2xl"></div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF2E63]/10 text-[#FF2E63] group-hover:bg-[#FF2E63]/20 transition-colors duration-300">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ecosystem Thinking</h3>
                <p className="text-muted-foreground">Cohesive digital environments with emergent capabilities.</p>
              </div>

              <div className="group relative bg-card rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/50 rounded-t-2xl"></div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#08D9D6]/10 text-[#08D9D6] group-hover:bg-[#08D9D6]/20 transition-colors duration-300">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Adaptive Personalization</h3>
                <p className="text-muted-foreground">
                  Experiences that automatically tailor themselves to individual users.
                </p>
              </div>

              <div className="group relative bg-card rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#702DFF] to-[#702DFF]/50 rounded-t-2xl"></div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#702DFF]/10 text-[#702DFF] group-hover:bg-[#702DFF]/20 transition-colors duration-300">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Future-Proof Design</h3>
                <p className="text-muted-foreground">Systems that evolve alongside changing business requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Ideology & Services Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our{" "}
                <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                  Philosophy
                </span>{" "}
                &{" "}
                <span className="bg-gradient-to-r from-[#08D9D6] to-[#702DFF] bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#FF2E63] to-[#702DFF] mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Business Ideology */}
              <Card className="overflow-hidden border-0 shadow-xl transition-all duration-200 hover:shadow-2xl group bg-card">
                <div className="bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 p-6">
                  <h3 className="text-xl font-bold text-white text-center">Our Business Ideology</h3>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-[#FF2E63]/10 p-3 text-[#FF2E63]">
                        <Rocket className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Technical Mastery</h4>
                        <p className="text-muted-foreground">
                          We pursue excellence in our craft, refining technical skill to the level of artistry.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-[#08D9D6]/10 p-3 text-[#08D9D6]">
                        <Brain className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Human-AI Collaboration</h4>
                        <p className="text-muted-foreground">
                          Creating technology where human and artificial intelligence enhance each other.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-[#702DFF]/10 p-3 text-[#702DFF]">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Recursive Improvement</h4>
                        <p className="text-muted-foreground">
                          Systems that grow stronger through use, continuously evolving and adapting.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card className="overflow-hidden border-0 shadow-xl transition-all duration-200 hover:shadow-2xl group bg-card">
                <div className="bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/80 p-6">
                  <h3 className="text-xl font-bold text-white text-center">Our Services</h3>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-[#FF2E63]/10 p-3 text-[#FF2E63]">
                        <Code className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">AI-Native Development</h4>
                        <p className="text-muted-foreground">
                          Building technology with AI as a foundational element, not just an add-on feature.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-[#08D9D6]/10 p-3 text-[#08D9D6]">
                        <Brain className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Custom AI Agents</h4>
                        <p className="text-muted-foreground">
                          Intelligent assistants that learn from interactions and evolve to better serve your specific needs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                      <div className="mt-1 rounded-full bg-[#702DFF]/10 p-3 text-[#702DFF]">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Generative AI Solutions</h4>
                        <p className="text-muted-foreground">
                          Content creation systems that produce increasingly refined outputs based on user feedback.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-md"
                    >
                      <Link href="/services" className="flex items-center justify-center">
                        Explore Our Services
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits with Stats */}
        <section
          id="benefits"
          className="w-full py-20 md:py-32 bg-gradient-to-br from-[#252A34] via-[#252A34] to-[#0D0D0D] text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/bg.png')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF2E63]/20 to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                    Digital Experience
                  </span>
                </h2>
                <p className="max-w-[600px] text-[#F9F7F7]/80">
                  Experience the benefits of technology that evolves alongside your business
                </p>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#FF2E63] to-[#702DFF] mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="group relative bg-card rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/0 opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-300"></div>
                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF2E63]/20 text-[#FF2E63]">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Delightful Experiences</h3>
                  <p className="text-muted-foreground mb-6">
                    Engaging interfaces that anticipate needs and adapt to preferences.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-[#FF2E63]">45%</div>
                    <div className="text-xs text-muted-foreground">Increase in User Engagement</div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-card rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/0 opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-300"></div>
                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#08D9D6]/20 text-[#08D9D6]">
                    <Brain className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Human-AI Collaboration</h3>
                  <p className="text-muted-foreground mb-6">
                    Technology that amplifies human creativity while AI handles repetitive tasks.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-[#08D9D6]">3x</div>
                    <div className="text-xs text-muted-foreground">Productivity Improvement</div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-card rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#702DFF] to-[#702DFF]/0 opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-300"></div>
                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#702DFF]/20 text-[#702DFF]">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Accelerated Production</h3>
                  <p className="text-muted-foreground mb-6">
                    Reduce development cycles while enhancing quality through our AI-native approach.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-[#702DFF]">60%</div>
                    <div className="text-xs text-muted-foreground">Faster Development Cycles</div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-card rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/0 opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-300"></div>
                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF2E63]/20 text-[#FF2E63]">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Future-Proof Solutions</h3>
                  <p className="text-muted-foreground mb-6">
                    Adaptive systems that incorporate emerging capabilities as they evolve.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-[#FF2E63]">30%</div>
                    <div className="text-xs text-muted-foreground">Reduction in Support Inquiries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Social Proof & Trusted By Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="container px-4 md:px-6">
            {/* Testimonials */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  See what our clients say about their experience with WAZA
                </h2>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#FF2E63] to-[#702DFF] mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-24">
              {/* Sarah's Testimonial */}
              <div className="group relative bg-card rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/50 rounded-t-2xl"></div>
                <div className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-20 h-20">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF2E63] to-[#702DFF] rounded-full opacity-75 blur-sm"></div>
                      <div className="relative rounded-full bg-white p-1">
                        <img
                          src="https://api.dicebear.com/7.x/micah/svg?seed=sarah&backgroundColor=FF2E63&mouth=laughing&eyes=eyes"
                          alt="Sarah Johnson"
                          className="w-full h-full rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">CTO, TechVision Inc.</p>
                    </div>
                    <p className="text-sm text-muted-foreground relative z-10">
                      "WAZA transformed our digital experience from a static website to an intelligent ecosystem that
                      continuously improves."
                    </p>
                  </div>
                </div>
              </div>

              {/* Michael's Testimonial */}
              <div className="group relative bg-card rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/50 rounded-t-2xl"></div>
                <div className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-20 h-20">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#08D9D6] to-[#702DFF] rounded-full opacity-75 blur-sm"></div>
                      <div className="relative rounded-full bg-white p-1">
                        <img
                          src="https://api.dicebear.com/7.x/micah/svg?seed=michael&backgroundColor=08D9D6&mouth=laughing&eyes=eyes"
                          alt="Michael Chen"
                          className="w-full h-full rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-xs text-muted-foreground">VP of Product, Innovate Solutions</p>
                    </div>
                    <p className="text-sm text-muted-foreground relative z-10">
                      "The self-improving nature of WAZA's technology has been a game-changer for our product development."
                    </p>
                  </div>
                </div>
              </div>

              {/* Emily's Testimonial */}
              <div className="group relative bg-card rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#702DFF] to-[#702DFF]/50 rounded-t-2xl"></div>
                <div className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-20 h-20">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#702DFF] to-[#FF2E63] rounded-full opacity-75 blur-sm"></div>
                      <div className="relative rounded-full bg-white p-1">
                        <img
                          src="https://api.dicebear.com/7.x/micah/svg?seed=emily&backgroundColor=702DFF&mouth=laughing&eyes=eyes"
                          alt="Emily Rodriguez"
                          className="w-full h-full rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Emily Rodriguez</p>
                      <p className="text-xs text-muted-foreground">Director of Digital, Global Brands</p>
                    </div>
                    <p className="text-sm text-muted-foreground relative z-10">
                      "Working with WAZA has completely changed how we think about technology. Their AI-native approach has given us capabilities we didn't think were possible."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Logos */}
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-12">
                Trusted by{" "}
                <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                  Innovative Leaders
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-[#702DFF] to-[#08D9D6] bg-clip-text text-transparent">
                  Brands
                </span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
                {/* Warner Music Group */}
                <div className="relative w-48 h-24 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center p-4">
                  <div className="text-lg font-semibold text-muted-foreground text-center">Warner Music Group</div>
                  {/* Add actual logo later: <Image src="/logos/wmg.svg" alt="Warner Music Group" fill className="object-contain p-4" /> */}
                </div>

                {/* Matraka Experience Marketing */}
                <div className="relative w-48 h-24 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center p-4">
                  <div className="text-lg font-semibold text-muted-foreground text-center">Matraka Experience</div>
                  {/* Add actual logo later: <Image src="/logos/matraka.svg" alt="Matraka Experience Marketing" fill className="object-contain p-4" /> */}
                </div>

                {/* Placeholder 1 */}
                <div className="relative w-48 h-24 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center p-4">
                  <div className="text-base text-muted-foreground/60 text-center">Future Client Logo</div>
                </div>

                {/* Placeholder 2 */}
                <div className="relative w-48 h-24 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center p-4">
                  <div className="text-base text-muted-foreground/60 text-center">Future Client Logo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-20 md:py-32 bg-gradient-to-b from-background/50 to-background relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/bg.png')] opacity-5 bg-cover bg-center"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Investment in Your{" "}
                  <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                    Future
                  </span>
                </h2>
                <p className="max-w-[600px] text-foreground/80">
                  Choose the right approach for your organization's needs
                </p>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#FF2E63] to-[#702DFF] mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Discovery Card */}
              <div className="group relative bg-background/80 dark:bg-background/40 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden border border-border">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/0 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-300"></div>
                <div className="relative bg-card dark:bg-card/80 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/80 p-6">
                    <h3 className="text-xl font-bold text-white text-center">Discovery</h3>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <p className="text-4xl font-bold text-foreground">Free</p>
                      <p className="text-sm text-foreground/80">Explore the possibilities with WAZA</p>
                      <ul className="space-y-3 text-sm text-foreground/80">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#08D9D6]" />
                          <span>90-minute strategic consultation</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#08D9D6]" />
                          <span>Initial opportunity assessment</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#08D9D6]" />
                          <span>High-level approach recommendation</span>
                        </li>
                      </ul>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/80 hover:from-[#08D9D6]/90 hover:to-[#08D9D6]/70 text-white shadow-md"
                      >
                        <Link href="#cta">Schedule Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Concept Development Card */}
              <div className="group relative bg-background/80 dark:bg-background/40 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden scale-105 z-10 border border-border">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/0 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-300"></div>
                <div className="absolute top-0 right-0 bg-[#FF2E63] text-white px-4 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg z-20">
                  Most Popular
                </div>
                <div className="relative bg-card dark:bg-card/80 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 p-6">
                    <h3 className="text-xl font-bold text-white text-center">Concept Development</h3>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <p className="text-4xl font-bold text-foreground">From $2,499 USD</p>
                      <p className="text-sm text-foreground/80">Validate your vision with a proof of concept</p>
                      <ul className="space-y-3 text-sm text-foreground/80">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#FF2E63]" />
                          <span>2-day collaborative workshop</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#FF2E63]" />
                          <span>Proof of concept development</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#FF2E63]" />
                          <span>User testing with key stakeholders</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#FF2E63]" />
                          <span>Implementation roadmap</span>
                        </li>
                      </ul>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/70 text-white shadow-md"
                      >
                        <Link href="#cta">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enterprise Card */}
              <div className="group relative bg-background/80 dark:bg-background/40 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden border border-border">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#702DFF] to-[#702DFF]/0 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-300"></div>
                <div className="relative bg-card dark:bg-card/80 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-[#702DFF] to-[#702DFF]/80 p-6">
                    <h3 className="text-xl font-bold text-white text-center">Enterprise</h3>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <p className="text-4xl font-bold text-foreground">Custom</p>
                      <p className="text-sm text-foreground/80">Full transformation partnership</p>
                      <ul className="space-y-3 text-sm text-foreground/80">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#702DFF]" />
                          <span>Comprehensive implementation strategy</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#702DFF]" />
                          <span>Full solution development</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#702DFF]" />
                          <span>Integration with existing systems</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-[#702DFF]" />
                          <span>Knowledge transfer and training</span>
                        </li>
                      </ul>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-[#702DFF] to-[#702DFF]/80 hover:from-[#702DFF]/90 hover:to-[#702DFF]/70 text-white shadow-md"
                      >
                        <Link href="#cta">Contact Sales</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Condensed */}
        <section id="faq" className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked{" "}
                  <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                    Questions
                  </span>
                </h2>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#FF2E63] to-[#702DFF] mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
                    How does WAZA technology differ from traditional AI solutions?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50/50">
                    Unlike traditional AI solutions that are added as features to existing systems, WAZA builds with AI
                    as a foundational element, creating solutions that continuously evolve and improve through use.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
                    What types of businesses benefit most from WAZA's approach?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50/50">
                    Organizations focused on digital innovation, customer experience excellence, operational efficiency,
                    and emerging technology adoption benefit most from our solutions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
                    How long does implementation typically take?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50/50">
                    Initial capability deployment typically takes 3-6 months, with enhanced capabilities evolving over
                    6-12 months and advanced ecosystem maturity reached within 12-24 months.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
                    Can WAZA integrate with our existing systems?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50/50">
                    Yes, WAZA's adaptive integration methodology is designed to connect with existing environments
                    through flexible approaches, adjusting to available integration methods rather than requiring
                    standardization.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          id="cta"
          className="w-full py-20 md:py-32 bg-gradient-to-br from-[#252A34] via-[#252A34] to-[#0D0D0D] text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/bg.png')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF2E63]/20 to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your{" "}
                  <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                    Digital Future
                  </span>
                  ?
                </h2>
                <p className="text-[#F9F7F7]/80 text-lg">
                  Take the first step toward creating technology that grows stronger through use.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-[#FF2E63]/20 p-1">
                      <CheckCircle className="h-5 w-5 text-[#FF2E63]" />
                    </div>
                    <span className="text-sm text-[#F9F7F7]/80">Free initial consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-[#08D9D6]/20 p-1">
                      <CheckCircle className="h-5 w-5 text-[#08D9D6]" />
                    </div>
                    <span className="text-sm text-[#F9F7F7]/80">No commitment required</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF2E63] to-[#702DFF] rounded-2xl opacity-70 blur-xl"></div>
                <div className="relative bg-[#0D0D0D]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                  <form className="flex flex-col space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-[#F9F7F7]/80 mb-1 block">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[#F9F7F7]/50 focus:border-[#FF2E63] focus:outline-none focus:ring-1 focus:ring-[#FF2E63]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-[#F9F7F7]/80 mb-1 block">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[#F9F7F7]/50 focus:border-[#FF2E63] focus:outline-none focus:ring-1 focus:ring-[#FF2E63]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="text-sm font-medium text-[#F9F7F7]/80 mb-1 block">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Your Company"
                        className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[#F9F7F7]/50 focus:border-[#FF2E63] focus:outline-none focus:ring-1 focus:ring-[#FF2E63]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/70 text-white shadow-md py-6 text-base font-medium"
                    >
                      Schedule Your Free Consultation
                    </Button>
                    <p className="text-xs text-[#F9F7F7]/70 text-center">
                      By submitting this form, you agree to our{" "}
                      <Link
                        href="#"
                        className="underline underline-offset-2 text-[#F9F7F7] hover:text-[#FF2E63] transition-colors"
                      >
                        Terms & Conditions
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Update floating CTA button position to right side */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-xl rounded-full"
            onClick={() => {
              const contactForm = document.getElementById('contact-form')
              if (contactForm) {
                contactForm.style.display = 'block'
              }
            }}
          >
            Book Free Consultation
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Updated contact form with close button */}
        <div 
          id="contact-form" 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              const contactForm = document.getElementById('contact-form')
              if (contactForm) {
                contactForm.style.display = 'none'
              }
            }
          }}
        >
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-2xl relative bg-white dark:bg-gray-900 rounded-xl shadow-xl" onClick={e => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => {
                  const contactForm = document.getElementById('contact-form')
                  if (contactForm) {
                    contactForm.style.display = 'none'
                  }
                }}
              >
                <X className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
              </button>
              <ContactForm />
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}
