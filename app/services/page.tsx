"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { 
  ChevronLeft, 
  Code, 
  Brain, 
  Sparkles, 
  Users, 
  Shield, 
  Zap, 
  Rocket, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  X, 
  TrendingUp 
} from "lucide-react";

export default function ServicesPage() {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = (service: string) => {
    console.log('Opening popup for:', service);
    setActivePopup(service);
    setIsPopupVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    console.log('Closing popup');
    setIsPopupVisible(false);
    setTimeout(() => {
      setActivePopup(null);
      document.body.style.overflow = 'auto';
    }, 100);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    console.log('Backdrop clicked');
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  console.log('Current activePopup:', activePopup, 'isPopupVisible:', isPopupVisible);

  return (
    <div className="flex min-h-screen flex-col">
      {isPopupVisible && activePopup === 'ai-native' && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9999]"
          onClick={handleBackdropClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div 
            className="bg-white p-6 rounded-lg max-w-lg w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <h2>Test Popup</h2>
            <p>This is a test popup to verify functionality</p>
            <button 
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-black text-8xl tracking-tight text-[#FF2E63] hover:text-[#FF2E63]/90 transition-colors">WAZA</span>
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
              <div className="mt-12 animate-bounce">
                <Link href="#services" className="text-white/80 hover:text-white">
                  <ArrowRight className="h-8 w-8 rotate-90" />
                </Link>
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
                <div className="space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-6">
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
                  <button 
                    type="button"
                    onClick={() => {
                      console.log('Button clicked');
                      openPopup('ai-native');
                    }} 
                    className="w-full bg-[#FF2E63]/10 hover:bg-[#FF2E63]/20 text-[#FF2E63] border-2 border-[#FF2E63] transition-all duration-200 py-2 px-4 rounded-md"
                  >
                    See Real Example
                  </button>
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
                <div className="space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-6">
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
                  <Button 
                    onClick={() => openPopup('custom-ai')} 
                    className="w-full bg-[#08D9D6]/10 hover:bg-[#08D9D6]/20 text-[#08D9D6] border-2 border-[#08D9D6] transition-all duration-200"
                  >
                    See Real Example
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
                <div className="space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-6">
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
                  <Button 
                    onClick={() => openPopup('generative-ai')} 
                    className="w-full bg-[#702DFF]/10 hover:bg-[#702DFF]/20 text-[#702DFF] border-2 border-[#702DFF] transition-all duration-200"
                  >
                    See Real Example
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
                <div className="space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-6">
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
                  <Button 
                    onClick={() => openPopup('customer-exp')} 
                    className="w-full bg-[#FF2E63]/10 hover:bg-[#FF2E63]/20 text-[#FF2E63] border-2 border-[#FF2E63] transition-all duration-200"
                  >
                    See Real Example
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
                <div className="space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-6">
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
                  <Button 
                    onClick={() => openPopup('business-growth')} 
                    className="w-full bg-[#08D9D6]/10 hover:bg-[#08D9D6]/20 text-[#08D9D6] border-2 border-[#08D9D6] transition-all duration-200"
                  >
                    See Real Example
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
                <div className="space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-6">
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
                  <Button 
                    onClick={() => openPopup('smart-insights')} 
                    className="w-full bg-[#702DFF]/10 hover:bg-[#702DFF]/20 text-[#702DFF] border-2 border-[#702DFF] transition-all duration-200"
                  >
                    See Real Example
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
                <div className="space-y-4">
                  <h4 className="font-semibold">What You Get:</h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-6">
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
                  <Button 
                    onClick={() => openPopup('smart-automation')} 
                    className="w-full bg-[#FF2E63]/10 hover:bg-[#FF2E63]/20 text-[#FF2E63] border-2 border-[#FF2E63] transition-all duration-200"
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
                <div className="space-y-4">
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
                  <Button 
                    onClick={() => openPopup('ai-fundamentals')} 
                    className="w-full bg-[#FF2E63]/10 hover:bg-[#FF2E63]/20 text-[#FF2E63] border-2 border-[#FF2E63] transition-all duration-200"
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
                <div className="space-y-4">
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
                  <Button 
                    onClick={() => openPopup('web3-dev')} 
                    className="w-full bg-[#702DFF]/10 hover:bg-[#702DFF]/20 text-[#702DFF] border-2 border-[#702DFF] transition-all duration-200"
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
                <div className="space-y-4">
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
                  <Button 
                    onClick={() => openPopup('ai-web3')} 
                    className="w-full bg-[#08D9D6]/10 hover:bg-[#08D9D6]/20 text-[#08D9D6] border-2 border-[#08D9D6] transition-all duration-200"
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
                  onClick={() => openPopup('ai-web3')} 
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
                <div className="space-y-4 mb-8">
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
                <Button className="w-full bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-md">
                  Schedule Your Free Strategy Call
                </Button>
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

      {isPopupVisible && activePopup === 'custom-ai' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#08D9D6]">Personal AI Assistant Example</h3>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#08D9D6]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Real-World Example: Real Estate Agent</h4>
                <p className="text-muted-foreground">
                  Meet John, a busy real estate agent who was overwhelmed with:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Managing multiple client appointments and property viewings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Keeping track of client preferences and property details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Following up with leads and maintaining relationships</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#08D9D6]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Solution</h4>
                <p className="text-muted-foreground">
                  We created a personal AI assistant that:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Automatically schedules viewings and sends reminders to clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Matches new listings with client preferences instantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Sends personalized follow-ups and maintains client relationships</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Result: John now manages twice as many clients while providing better, more personal service.
              </p>
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && activePopup === 'generative-ai' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#702DFF]">Smart Content Creation Example</h3>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#702DFF]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Real-World Example: Small Fashion Boutique</h4>
                <p className="text-muted-foreground">
                  Meet Maria, a boutique owner who struggled with:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Creating engaging social media content daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Writing product descriptions for her online store</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Maintaining consistent brand voice across platforms</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#702DFF]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Solution</h4>
                <p className="text-muted-foreground">
                  We implemented a smart content system that:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Generates trendy social media posts based on her inventory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Creates compelling product descriptions in her brand's voice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Suggests seasonal content ideas and promotional campaigns</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Result: Maria's social media engagement increased by 150% and online sales grew by 40%.
              </p>
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && activePopup === 'customer-exp' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#FF2E63]">Customer Experience Example</h3>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FF2E63]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Real-World Example: Online Fitness Studio</h4>
                <p className="text-muted-foreground">
                  Meet Alex, who runs an online fitness studio facing challenges with:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Personalizing workout plans for thousands of members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Tracking member progress and maintaining engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Providing timely support and motivation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FF2E63]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Solution</h4>
                <p className="text-muted-foreground">
                  We created a smart fitness platform that:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Adapts workout plans based on individual progress and preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Sends personalized motivation messages at optimal times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Provides instant support and form corrections during workouts</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Result: Member retention increased by 45% and satisfaction scores rose to 4.8/5.
              </p>
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && activePopup === 'business-growth' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#FF2E63]">Business Growth Tools Example</h3>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FF2E63]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Real-World Example: Local Restaurant Chain</h4>
                <p className="text-muted-foreground">
                  Meet David, a restaurant chain owner who faced these challenges:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Difficulty tracking performance across multiple locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Inconsistent growth strategies between restaurants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>No clear insights into what drives success</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FF2E63]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Solution</h4>
                <p className="text-muted-foreground">
                  We implemented smart business tools that:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Track and compare performance metrics across all locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Identify and replicate successful strategies automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Provide actionable growth recommendations based on data</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Result: David's restaurant chain saw 35% growth in revenue and opened 3 new successful locations.
              </p>
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && activePopup === 'smart-insights' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#702DFF]">Smart Business Insights Example</h3>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#702DFF]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Real-World Example: E-commerce Store</h4>
                <p className="text-muted-foreground">
                  Meet Lisa, an e-commerce store owner struggling with:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Understanding customer buying patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Predicting inventory needs accurately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Making data-driven business decisions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#702DFF]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Solution</h4>
                <p className="text-muted-foreground">
                  We implemented a smart insights system that:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Analyzes customer behavior and predicts future trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Optimizes inventory based on real-time data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Provides actionable recommendations for growth</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Result: Lisa reduced inventory costs by 25% while increasing sales by 40%.
              </p>
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && activePopup === 'smart-automation' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#FF2E63]">Smart Work Automation Example</h3>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FF2E63]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Real-World Example: Marketing Agency</h4>
                <p className="text-muted-foreground">
                  Meet Tom, a marketing agency owner dealing with:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Time-consuming routine tasks taking up team's time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Manual reporting and campaign management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Inconsistent workflow processes</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FF2E63]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Solution</h4>
                <p className="text-muted-foreground">
                  We created an automation system that:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Automates routine tasks like reporting and data entry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Manages campaigns with minimal human intervention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Standardizes workflows across the agency</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Result: Tom's team saved 20 hours per week and increased client capacity by 50%.
              </p>
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && activePopup === 'ai-fundamentals' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#FF2E63]">AI Fundamentals Training Example</h3>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FF2E63]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Comprehensive AI Foundation Course</h4>
                <p className="text-muted-foreground">
                  This course covers the fundamentals of AI, machine learning, and deep learning. You'll learn about neural networks, decision trees, and more.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Introduction to AI and machine learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Neural networks and deep learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Practical applications of AI in business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Hands-on projects to apply your learning</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FF2E63]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Theoretical Knowledge and Hands-on Practice</h4>
                <p className="text-muted-foreground">
                  We'll cover the theoretical underpinnings of AI and machine learning, and then apply this knowledge through practical exercises.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Understanding AI concepts and algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Building simple AI models and testing them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Applying AI to real-world problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Building a portfolio of AI projects</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FF2E63]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Real-World Application of Learning</h4>
                <p className="text-muted-foreground">
                  We'll explore how AI is already transforming various industries, and how you can apply AI to your business.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>AI in healthcare: improving patient outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>AI in finance: automating financial analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>AI in marketing: personalizing customer experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>AI in manufacturing: optimizing supply chain management</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FF2E63]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">8 Weeks of Training (4 Hours/Week)</h4>
                <p className="text-muted-foreground">
                  This course is structured to be completed over 8 weeks, with 4 hours of live training per week. You'll learn at your own pace, but we'll cover a lot of ground in that time.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Week 1: Introduction to AI and machine learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Week 2: Neural networks and deep learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Week 3: Practical applications of AI in business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Week 4: Building AI models and testing them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Week 5: Applying AI to real-world problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Week 6: Building a portfolio of AI projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Week 7: AI in healthcare: improving patient outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#FF2E63]" />
                    <span>Week 8: AI in finance: automating financial analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && activePopup === 'web3-dev' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#702DFF]">Web3 Development Training Example</h3>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#702DFF]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Professional Web3 Development Program</h4>
                <p className="text-muted-foreground">
                  This course covers the fundamentals of blockchain technology, smart contract development, and decentralized applications. You'll learn about Ethereum, Solidity, and building real-world applications.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Introduction to blockchain technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Understanding Ethereum and smart contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Building decentralized applications with Solidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Deploying and interacting with smart contracts</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#702DFF]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Build Real Decentralized Applications</h4>
                <p className="text-muted-foreground">
                  We'll work on real projects, from ideation to deployment. You'll learn how to:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Identify a problem and develop a solution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Design a smart contract using Solidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Deploy your contract on the Ethereum blockchain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Interact with your contract using web3.js</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#702DFF]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Gain Practical Experience with Web3 Technologies</h4>
                <p className="text-muted-foreground">
                  We'll cover a range of Web3 technologies, from basic concepts to advanced applications. You'll learn how to:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Using web3.js to interact with the blockchain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Building decentralized applications with React</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Integrating Web3 with existing applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Advanced topics like gas optimization and security</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#702DFF]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">10 Weeks of Training (6 Hours/Week)</h4>
                <p className="text-muted-foreground">
                  This course is structured to be completed over 10 weeks, with 6 hours of live training per week. You'll learn at your own pace, but we'll cover a lot of ground in that time.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Week 1: Introduction to blockchain technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Week 2: Understanding Ethereum and smart contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Week 3: Building decentralized applications with Solidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Week 4: Deploying and interacting with smart contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Week 5: Building a portfolio of Web3 projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Week 6: Advanced topics in Web3 development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Week 7: Building real-world applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Week 8: Building decentralized applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Week 9: Advanced Web3 concepts and projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#702DFF]" />
                    <span>Week 10: Final project presentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && activePopup === 'ai-web3' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#08D9D6]">AI-Web3 Integration Training Example</h3>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#08D9D6]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Advanced Integration Course</h4>
                <p className="text-muted-foreground">
                  This course covers the advanced techniques for integrating AI with blockchain technologies. You'll learn about AI-powered smart contracts, decentralized autonomous organizations (DAOs), and more.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Introduction to AI-Web3 integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Building AI-powered smart contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Creating decentralized autonomous organizations (DAOs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Integrating AI with blockchain-based ML</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#08D9D6]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Latest Techniques for AI-Powered Smart Contracts</h4>
                <p className="text-muted-foreground">
                  We'll cover the latest techniques for building AI-powered smart contracts. You'll learn about:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Building AI-powered smart contracts with Solidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Using AI to optimize smart contract logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Implementing AI-powered decision-making in smart contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Building AI-powered DAOs with Solidity</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#08D9D6]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Decentralized AI Models and Blockchain-based ML</h4>
                <p className="text-muted-foreground">
                  We'll cover the latest techniques for building decentralized AI models and blockchain-based machine learning. You'll learn about:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Building decentralized AI models with Solidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Implementing blockchain-based machine learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Integrating AI with blockchain-based ML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Building AI-powered DAOs with Solidity</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#08D9D6]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">12 Weeks of Training (8 Hours/Week)</h4>
                <p className="text-muted-foreground">
                  This course is structured to be completed over 12 weeks, with 8 hours of live training per week. You'll learn at your own pace, but we'll cover a lot of ground in that time.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 1: Introduction to AI-Web3 integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 2: Building AI-powered smart contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 3: Creating decentralized autonomous organizations (DAOs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 4: Integrating AI with blockchain-based ML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 5: Building AI-powered DAOs with Solidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 6: Advanced AI-Web3 integration concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 7: Building real-world AI-Web3 applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 8: Building decentralized AI models and blockchain-based ML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 9: Advanced AI-Web3 integration projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 10: Building AI-powered DAOs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 11: Integrating AI with blockchain-based ML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#08D9D6]" />
                    <span>Week 12: Final project presentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && activePopup === 'customer-experience' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#EEBF35]">Customer Experience AI Example</h3>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#EEBF35]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Real-World Example: Online Retail Store</h4>
                <p className="text-muted-foreground">
                  Meet Sarah, an online retailer struggling with:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#EEBF35]" />
                    <span>High customer service response times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#EEBF35]" />
                    <span>Limited personalization capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#EEBF35]" />
                    <span>Customer churn due to poor experience</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#EEBF35]/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Solution</h4>
                <p className="text-muted-foreground">
                  We implemented an AI-powered customer experience system that:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#EEBF35]" />
                    <span>Provides 24/7 intelligent customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#EEBF35]" />
                    <span>Personalizes product recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-[#EEBF35]" />
                    <span>Proactively addresses customer needs</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Result: Sarah's customer satisfaction score increased by 45% and customer retention improved by 30%.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 