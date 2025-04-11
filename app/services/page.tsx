"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronLeft, Code, Brain, Sparkles, Users, Shield, Zap, Rocket, ArrowRight, Star, CheckCircle, MessageSquare, Mail, Phone, MapPin, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ServicesPage() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (service: string) => {
    setActivePopup(service);
    // Prevent scrolling when popup is open
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setActivePopup(null);
    // Restore scrolling when popup is closed
    document.body.style.overflow = 'auto';
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">WAZA</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Home
            </Link>
            <Link href="/services" className="transition-colors hover:text-foreground/80 text-foreground">
              Services
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] to-[#252A34] z-0"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 border-transparent bg-[#FF2E63]/10 text-[#FF2E63] hover:bg-[#FF2E63]/20">
                AI-Native Technology
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Our Services
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Discover how WAZA's AI-native technology can transform your business with our comprehensive suite of services.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild className="bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-md">
                  <Link href="#contact-form">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="container py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How We Can Help Your Business
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Smart solutions that learn and improve over time, making your business more efficient and successful every day.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-2">
            {/* Smart Business Solutions */}
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#FF2E63]/10 p-4 text-[#FF2E63]">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Smart Business Solutions</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  We create smart systems that understand your business and help it run better. Like having a super-smart assistant that learns your preferences and gets better at helping you every day.
                </p>
                <div className="mb-6 space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Systems that learn your business needs</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Automatic improvements over time</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Easy-to-use smart features</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Time-saving automation</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => openPopup('ai-native')} 
                    className="bg-transparent text-[#FF2E63] hover:bg-[#FF2E63]/10 border border-[#FF2E63] cursor-pointer"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Personal AI Assistants */}
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#08D9D6]/10 p-4 text-[#08D9D6]">
                    <Brain className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Personal AI Assistants</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Imagine having a smart assistant that knows exactly how you like things done. Our AI assistants learn your preferences and help make your work easier and more efficient.
                </p>
                <div className="mb-6 space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>Personalized help for your needs</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>Smart task management</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>Helpful suggestions and reminders</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>Easy communication and support</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => openPopup('custom-ai')} 
                    className="bg-transparent text-[#08D9D6] hover:bg-[#08D9D6]/10 border border-[#08D9D6]"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Smart Content Creation */}
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-r from-[#702DFF] to-[#702DFF]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#702DFF]/10 p-4 text-[#702DFF]">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Smart Content Creation</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Let AI help you create amazing content for your business. From social media posts to marketing materials, our tools learn your style and help you create content that connects with your audience.
                </p>
                <div className="mb-6 space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>Content that matches your brand</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>Ideas tailored to your audience</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>Time-saving content tools</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>Easy-to-use creation tools</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => openPopup('generative-ai')} 
                    className="bg-transparent text-[#702DFF] hover:bg-[#702DFF]/10 border border-[#702DFF]"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Customer Experience Enhancement */}
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#FF2E63]/10 p-4 text-[#FF2E63]">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Customer Experience Enhancement</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Make your customers happier with personalized experiences. Our tools learn what your customers like and help you provide better service that keeps them coming back.
                </p>
                <div className="mb-6 space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Personalized customer service</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Smart customer insights</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Better customer satisfaction</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Easy-to-use customer tools</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => openPopup('digital-experience')} 
                    className="bg-transparent text-[#FF2E63] hover:bg-[#FF2E63]/10 border border-[#FF2E63]"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Business Growth Tools */}
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#08D9D6]/10 p-4 text-[#08D9D6]">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Business Growth Tools</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Tools that help your business grow smarter and stronger. Our systems learn from your business operations and help you make better decisions for continued success.
                </p>
                <div className="mb-6 space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>Smart business insights</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>Growth recommendations</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>Performance tracking</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>Easy-to-understand reports</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => openPopup('self-recursive')} 
                    className="bg-transparent text-[#08D9D6] hover:bg-[#08D9D6]/10 border border-[#08D9D6]"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Smart Business Insights */}
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-r from-[#702DFF] to-[#702DFF]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#702DFF]/10 p-4 text-[#702DFF]">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Smart Business Insights</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Get helpful insights about your business future. Our tools analyze your business data and help you make smart decisions by showing you what might happen next.
                </p>
                <div className="mb-6 space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>Future trend predictions</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>Real-time business updates</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>Smart recommendations</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>Easy-to-read reports</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => openPopup('predictive-analytics')} 
                    className="bg-transparent text-[#702DFF] hover:bg-[#702DFF]/10 border border-[#702DFF]"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Smart Work Automation */}
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#FF2E63]/10 p-4 text-[#FF2E63]">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Smart Work Automation</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Let AI handle your routine tasks while you focus on growing your business. Our automation tools learn your processes and help make your work easier and more efficient.
                </p>
                <div className="mb-6 space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Time-saving automation</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Smart task management</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Easy process handling</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Helpful progress updates</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => openPopup('ai-automation')} 
                    className="bg-transparent text-[#FF2E63] hover:bg-[#FF2E63]/10 border border-[#FF2E63]"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Fundamentals Training */}
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#FF2E63]/10 p-4 text-[#FF2E63]">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">AI Fundamentals Training</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  A structured program designed to build a solid foundation in AI and machine learning. Perfect for technical teams and entrepreneurs looking to understand and implement AI solutions.
                </p>
                <div className="mb-6 space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Comprehensive AI foundation course</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Theoretical knowledge and hands-on practice</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>Real-world application of learning</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                      <span>8 weeks of training (4 hours/week)</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => openPopup('ai-fundamentals')} 
                    className="bg-transparent text-[#FF2E63] hover:bg-[#FF2E63]/10 border border-[#FF2E63]"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Web3 Development Training */}
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-r from-[#702DFF] to-[#702DFF]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#702DFF]/10 p-4 text-[#702DFF]">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Web3 Development Training</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  An intensive course covering blockchain technology, smart contract development, and decentralized application architecture. Designed for developers and technical teams entering the Web3 space.
                </p>
                <div className="mb-6 space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>Professional Web3 development program</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>Build real decentralized applications</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>Gain practical experience with Web3 technologies</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                      <span>10 weeks of training (6 hours/week)</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => openPopup('web3-dev')} 
                    className="bg-transparent text-[#702DFF] hover:bg-[#702DFF]/10 border border-[#702DFF]"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* AI-Web3 Integration Training */}
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-r from-[#08D9D6] to-[#08D9D6]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#08D9D6]/10 p-4 text-[#08D9D6]">
                    <Brain className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">AI-Web3 Integration Training</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  A cutting-edge program teaching the integration of AI and blockchain technologies. Learn to build intelligent decentralized systems that combine the power of AI with the security and transparency of blockchain.
                </p>
                <div className="mb-6 space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>Advanced integration course</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>Latest techniques for AI-powered smart contracts</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>Decentralized AI models and blockchain-based ML</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                      <span>12 weeks of training (8 hours/week)</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => openPopup('ai-web3-integration')} 
                    className="bg-transparent text-[#08D9D6] hover:bg-[#08D9D6]/10 border border-[#08D9D6]"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training & Courses Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#252A34] via-[#252A34] to-[#0D0D0D] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/bg.png')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF2E63]/20 to-transparent"></div>
          <div className="container">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center rounded-full border border-[#FF2E63]/20 bg-[#FF2E63]/10 px-3 py-1 text-sm text-[#FF2E63] mb-6">
                Professional Development
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                AI & Web3 Training Programs
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-300 md:text-xl">
                Empower your team with cutting-edge skills in AI and Web3 technologies through our comprehensive training programs.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* AI Fundamentals Course */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#FF2E63]/30 hover:bg-white/10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#FF2E63]/10 p-4 text-[#FF2E63]">
                    <Brain className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">AI Fundamentals</h3>
                </div>
                <p className="mb-6 text-gray-300">
                  Master the foundations of artificial intelligence, machine learning, and deep learning. Perfect for teams starting their AI journey.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                    <span>Machine Learning Basics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                    <span>Neural Networks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                    <span>AI Model Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#FF2E63]" />
                    <span>Practical Applications</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => openPopup('ai-fundamentals')} 
                  className="w-full bg-[#FF2E63] hover:bg-[#FF2E63]/90 text-white"
                >
                  Learn More
                </Button>
              </div>

              {/* Web3 Development */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#702DFF]/30 hover:bg-white/10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#702DFF]/10 p-4 text-[#702DFF]">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Web3 Development</h3>
                </div>
                <p className="mb-6 text-gray-300">
                  Dive into blockchain technology, smart contracts, and decentralized applications. Build the future of the web.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                    <span>Blockchain Fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                    <span>Smart Contract Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                    <span>DApp Architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#702DFF]" />
                    <span>Web3 Integration</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => openPopup('web3-dev')} 
                  className="w-full bg-[#702DFF] hover:bg-[#702DFF]/90 text-white"
                >
                  Learn More
                </Button>
              </div>

              {/* AI-Web3 Integration */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#08D9D6]/30 hover:bg-white/10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[#08D9D6]/10 p-4 text-[#08D9D6]">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">AI-Web3 Integration</h3>
                </div>
                <p className="mb-6 text-gray-300">
                  Learn to combine AI and blockchain technologies to create powerful, decentralized intelligent systems.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                    <span>AI in Blockchain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                    <span>Decentralized AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                    <span>Smart Oracle Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-[#08D9D6]" />
                    <span>Advanced Integration Patterns</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => openPopup('ai-web3-integration')} 
                  className="w-full bg-[#08D9D6] hover:bg-[#08D9D6]/90 text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Clients Say
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Hear from organizations that have transformed their operations with WAZA's AI-native technology.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-[#FF2E63] text-[#FF2E63]" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground italic">
                    "WAZA's AI-native development approach has completely transformed our digital infrastructure. The system continuously learns and improves, delivering increasing value without requiring constant redevelopment."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#FF2E63]/10 flex items-center justify-center">
                      <span className="text-[#FF2E63] font-bold">JD</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">CTO, Financial Services</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Testimonial 2 */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-[#08D9D6] text-[#08D9D6]" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground italic">
                    "The custom AI agents we implemented have revolutionized our creative workflow. They function as true collaborators, learning from our interactions and anticipating our needs. The results have been transformative."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#08D9D6]/10 flex items-center justify-center">
                      <span className="text-[#08D9D6] font-bold">AS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Alex Smith</h4>
                      <p className="text-sm text-muted-foreground">Creative Director, Design Agency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Testimonial 3 */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-[#702DFF] text-[#702DFF]" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground italic">
                    "Our predictive analytics solution has given us unprecedented insights into our supply chain. The system continuously learns and improves, helping us anticipate disruptions before they occur. The ROI has been exceptional."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#702DFF]/10 flex items-center justify-center">
                      <span className="text-[#702DFF] font-bold">MJ</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Maria Johnson</h4>
                      <p className="text-sm text-muted-foreground">Operations Director, Logistics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose WAZA
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our unique approach sets us apart in the AI technology landscape.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-[#FF2E63]/10 p-4">
                <Brain className="h-8 w-8 text-[#FF2E63]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">AI-Native Foundation</h3>
              <p className="text-muted-foreground">
                Unlike providers that add AI capabilities to existing approaches, we build with artificial intelligence as a foundational element.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-[#08D9D6]/10 p-4">
                <Code className="h-8 w-8 text-[#08D9D6]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Technical-Creative Fusion</h3>
              <p className="text-muted-foreground">
                We integrate technical and creative dimensions from the outset, creating solutions that are both technically excellent and emotionally engaging.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-[#702DFF]/10 p-4">
                <Shield className="h-8 w-8 text-[#702DFF]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Self-Recursive Improvement</h3>
              <p className="text-muted-foreground">
                Our systems are designed to improve themselves, delivering increasing value over time rather than depreciation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-6">
                  Ready to transform your business with AI-native technology? Contact us today to discuss your project and discover how WAZA can help you grow stronger through use.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#FF2E63]" />
                    <span>contact@waza.ai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#FF2E63]" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#FF2E63]" />
                    <span>123 AI Street, Tech City, TC 12345</span>
                  </div>
                </div>
              </div>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select id="service" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <option value="">Select a service</option>
                        <option value="ai-native-development">AI-Native Development</option>
                        <option value="custom-ai-agents">Custom AI Agents</option>
                        <option value="generative-ai-solutions">Generative AI Solutions</option>
                        <option value="digital-experience-design">Digital Experience Design</option>
                        <option value="self-recursive-systems">Self-Recursive Systems</option>
                        <option value="predictive-analytics">Predictive Analytics</option>
                        <option value="ai-powered-automation">AI-Powered Automation</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your project" className="min-h-[120px]" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-md">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16 md:py-24">
          <div className="rounded-xl bg-gradient-to-r from-[#0D0D0D] to-[#252A34] p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mb-8 max-w-[600px] text-gray-300 md:text-xl">
              Contact us today to discuss how WAZA's AI-native technology can help your organization grow stronger through use.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Button asChild className="bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-md">
                <Link href="#contact-form">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by{" "}
              <a
                href="https://waza.ai"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                WAZA
              </a>
              . The source code is available on{" "}
              <a
                href="https://github.com/waza-ai/waza-site"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>

      {/* Popup Modals */}
      {activePopup && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
          onClick={handleBackdropClick}
        >
          <div 
            className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-xl bg-white p-6 shadow-xl dark:bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closePopup}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              <X className="h-6 w-6" />
            </button>

            {activePopup === 'ai-fundamentals' && (
              <>
                <h3 className="mb-4 text-2xl font-bold text-[#FF2E63]">AI Fundamentals Training</h3>
                <div className="mb-6">
                  <h4 className="mb-2 font-semibold">Course Details:</h4>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <p className="mb-4 text-muted-foreground">
                      <strong>Comprehensive AI Foundation Course</strong><br />
                      A structured program designed to build a solid foundation in AI and machine learning. Perfect for technical teams and entrepreneurs looking to understand and implement AI solutions.
                    </p>
                    <p className="text-muted-foreground">
                      The course combines theoretical knowledge with hands-on practice, ensuring participants can apply their learning to real-world scenarios immediately.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      <strong>Course Modules:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Introduction to Machine Learning Algorithms</li>
                        <li>• Deep Learning and Neural Networks</li>
                        <li>• Model Training and Evaluation</li>
                        <li>• AI Project Implementation</li>
                        <li>• Best Practices and Ethics in AI</li>
                      </ul>
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      <strong>Duration:</strong> 8 weeks (4 hours/week)<br />
                      <strong>Format:</strong> Online live sessions + Hands-on workshops<br />
                      <strong>Prerequisites:</strong> Basic programming knowledge
                    </p>
                  </div>
                </div>
              </>
            )}

            {activePopup === 'web3-dev' && (
              <>
                <h3 className="mb-4 text-2xl font-bold text-[#702DFF]">Web3 Development Training</h3>
                <div className="mb-6">
                  <h4 className="mb-2 font-semibold">Course Details:</h4>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <p className="mb-4 text-muted-foreground">
                      <strong>Professional Web3 Development Program</strong><br />
                      An intensive course covering blockchain technology, smart contract development, and decentralized application architecture. Designed for developers and technical teams entering the Web3 space.
                    </p>
                    <p className="text-muted-foreground">
                      Participants will build real decentralized applications and smart contracts, gaining practical experience with current Web3 technologies and best practices.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      <strong>Course Modules:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Blockchain Technology Fundamentals</li>
                        <li>• Smart Contract Development with Solidity</li>
                        <li>• DApp Architecture and Development</li>
                        <li>• Web3.js and Ethers.js Integration</li>
                        <li>• Security Best Practices</li>
                      </ul>
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      <strong>Duration:</strong> 10 weeks (6 hours/week)<br />
                      <strong>Format:</strong> Online live sessions + Project-based learning<br />
                      <strong>Prerequisites:</strong> JavaScript programming experience
                    </p>
                  </div>
                </div>
              </>
            )}

            {activePopup === 'ai-web3-integration' && (
              <>
                <h3 className="mb-4 text-2xl font-bold text-[#08D9D6]">AI-Web3 Integration Training</h3>
                <div className="mb-6">
                  <h4 className="mb-2 font-semibold">Course Details:</h4>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <p className="mb-4 text-muted-foreground">
                      <strong>Advanced Integration Course</strong><br />
                      A cutting-edge program teaching the integration of AI and blockchain technologies. Learn to build intelligent decentralized systems that combine the power of AI with the security and transparency of blockchain.
                    </p>
                    <p className="text-muted-foreground">
                      This advanced course covers the latest techniques for creating AI-powered smart contracts, decentralized AI models, and blockchain-based machine learning systems.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      <strong>Course Modules:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• AI Models in Blockchain Environments</li>
                        <li>• Decentralized AI Training and Inference</li>
                        <li>• Smart Oracle Development and Integration</li>
                        <li>• Privacy-Preserving AI on Blockchain</li>
                        <li>• Advanced System Architecture Patterns</li>
                      </ul>
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      <strong>Duration:</strong> 12 weeks (8 hours/week)<br />
                      <strong>Format:</strong> Online live sessions + Advanced projects<br />
                      <strong>Prerequisites:</strong> AI Fundamentals and Web3 Development courses or equivalent experience
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Other existing popups */}
            {activePopup === 'ai-native' && (
              <>
                <h3 className="mb-4 text-2xl font-bold text-[#FF2E63]">Smart Business Solutions</h3>
                <div className="mb-6">
                  <h4 className="mb-2 font-semibold">How It Works:</h4>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <p className="mb-4 text-muted-foreground">
                      <strong>Example: A Smart Restaurant Helper</strong><br />
                      Imagine a system that helps a restaurant run smoothly. It learns when the busy hours are, how much food to order, and how many staff members are needed each day. Just like a helpful manager who gets better at their job over time!
                    </p>
                    <p className="text-muted-foreground">
                      The system notices patterns - like how you get more customers on rainy days when people don't want to cook, or how certain dishes are more popular during different seasons. It uses this information to help you prepare better.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      <strong>Benefits You'll See:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Less food waste because you'll know exactly what to order</li>
                        <li>• Happy customers because you're always prepared</li>
                        <li>• Lower costs through better staff scheduling</li>
                        <li>• More time to focus on growing your business</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </>
            )}
            
            <div className="flex justify-end">
              <Button onClick={closePopup} className="bg-[#FF2E63] text-white hover:bg-[#FF2E63]/90">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 