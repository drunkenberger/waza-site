"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, CheckCircle } from "lucide-react";
import { Footer } from "../components/ui/footer";
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
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
              <Link href="/#features" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
                Features
              </Link>
              <Link href="/services" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
                Services
              </Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
                About
              </Link>
              <Link href="/#benefits" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
                Benefits
              </Link>
              <Link href="/#pricing" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
                Pricing
              </Link>
              <ThemeToggle />
              <Button
                asChild
                className="bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-md"
              >
                <Link href="/#cta">Get Started</Link>
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
                  <Link href="/#features" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                    Features
                  </Link>
                  <Link href="/services" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                    Services
                  </Link>
                  <Link href="/about" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                    About
                  </Link>
                  <Link href="/#benefits" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                    Benefits
                  </Link>
                  <Link href="/#pricing" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                    Pricing
                  </Link>
                  <ThemeToggle />
                  <Button
                    asChild
                    className="mt-4 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-md"
                  >
                    <Link href="/#cta">Get Started</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#252A34] via-[#252A34] to-[#0D0D0D] overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/bg.png')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF2E63]/20 to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#FF2E63]/20 bg-[#FF2E63]/10 px-3 py-1 text-sm text-[#FF2E63]">
                <span>Our Story</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                About{" "}
                <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                  WAZA
                </span>
              </h1>
              <p className="max-w-[700px] text-[#F9F7F7] md:text-xl text-lg">
                We create technology that grows stronger through use—transforming static products into living systems that continuously evolve, adapt, and improve.
              </p>
              <div className="pt-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] hover:from-[#FF2E63]/90 hover:to-[#702DFF]/90 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <Link href="#our-story" className="flex items-center gap-2">
                    Explore Our Story <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <div className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Brand Story Section */}
          <section id="our-story" className="mb-24 scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">Our Origin Story</h2>
                <p className="text-lg leading-relaxed text-foreground">
                  WAZA was born from a fundamental insight: the most powerful technology doesn't merely function—it evolves, adapts, and grows stronger through use. Founded by a diverse team of engineers, designers, and visionaries, WAZA set out to transcend the limitations of traditional development approaches that produce static, quickly outdated technologies.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Our founders recognized that the conventional separation between technical development and creative design was producing solutions that excelled in one dimension but underperformed in others. They envisioned a fundamentally different approach—one that treats artificial intelligence not as a tool but as a true collaborator in the creative process.
                </p>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-3 text-[#252A34]">The Meaning Behind Our Name</h3>
                  <p className="text-lg mb-4">
                    The name "WAZA" was chosen for its rich multicultural significance, reflecting our global outlook and multifaceted approach:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF2E63] mt-1 flex-shrink-0" />
                      <span className="text-lg">In Japanese, "waza" (技) represents technique refined to artistry—the masterwork of a craftsman</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#702DFF] mt-1 flex-shrink-0" />
                      <span className="text-lg">In English slang, it's a greeting between friends who share a deep bond</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#08D9D6] mt-1 flex-shrink-0" />
                      <span className="text-lg">In Swahili, it means to imagine possibilities beyond what exists today</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF2E63] mt-1 flex-shrink-0" />
                      <span className="text-lg">In Spanish, it's playfulness—a joke shared between companions</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                <Image 
                  src="/images/about-story.jpg" 
                  alt="WAZA team collaborating" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </section>

          {/* Manifesto Section */}
          <section className="mb-24 bg-gradient-to-br from-[#252A34] to-[#0D0D0D] p-10 rounded-xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF2E63]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#702DFF]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">The WAZA Manifesto</h2>
              <div className="prose prose-lg max-w-none text-[#F9F7F7]">
                <p className="italic mb-6 text-2xl font-light">Waza transcends simple definition.</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      We believe that mastery and play are not opposing forces—they are complementary. The true master works with such fluency that creation becomes joyful. The expert at play discovers innovations that methodical work alone cannot reveal.
                    </p>
                    <p className="text-lg leading-relaxed">
                      We believe that the pinnacle of user experience is found in delight. Products should not merely function—they should bring joy. Technology should feel less like a tool and more like an extension of human creativity.
                    </p>
                    <p className="text-lg leading-relaxed">
                      We believe that AI and humanity grow stronger together. Not as master and servant, but as collaborators in an ongoing dialogue. Each amplifying the other's strengths, each compensating for the other's limitations.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      We believe in creating worlds, not just products. Cohesive ecosystems that evolve and respond. Living systems that grow more valuable and more capable with time.
                    </p>
                    <p className="text-lg leading-relaxed">
                      We are craftspeople with a sense of humor. We are engineers who dream beyond constraints. We are artists who build with logic and code.
                    </p>
                    <p className="text-lg leading-relaxed">
                      We are creating recursively improving systems—technology that enhances itself. We are developing companies that will transcend today's giants. We are writing the future, one line of code at a time.
                    </p>
                    <p className="font-bold text-xl text-[#FF2E63]">
                      We are Waza. And we're creating a cooler world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-card p-10 rounded-xl shadow-xl border border-border transform transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]">
                <div className="h-2 w-20 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/70 rounded-full mb-6"></div>
                <h3 className="text-2xl font-bold mb-4 text-[#FF2E63]">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To transform the digital landscape by creating AI-native products that seamlessly blend technological brilliance with human creativity, pushing the boundaries of what's possible while maintaining a spirit of playfulness and craftsmanship.
                </p>
              </div>
              <div className="bg-card p-10 rounded-xl shadow-xl border border-border transform transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]">
                <div className="h-2 w-20 bg-gradient-to-r from-[#702DFF] to-[#702DFF]/70 rounded-full mb-6"></div>
                <h3 className="text-2xl font-bold mb-4 text-[#702DFF]">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To build a world where AI and human intelligence amplify each other, creating products and companies that exceed traditional growth trajectories while making technology more intuitive, effective, and aligned with human values.
                </p>
              </div>
            </div>
          </section>

          {/* Brand Values Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-xl border border-border transform transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]">
                <div className="h-12 w-12 rounded-full bg-[#FF2E63]/10 flex items-center justify-center mb-6">
                  <span className="text-[#FF2E63] text-xl font-bold">TM</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#FF2E63]">Technical Mastery</h3>
                <p className="text-lg">We pursue excellence in our craft, refining technical skill to the level of artistry. We build with precision, attention to detail, and deep understanding.</p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-xl border border-border transform transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]">
                <div className="h-12 w-12 rounded-full bg-[#702DFF]/10 flex items-center justify-center mb-6">
                  <span className="text-[#702DFF] text-xl font-bold">CP</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#702DFF]">Creative Playfulness</h3>
                <p className="text-lg">We approach challenges with a spirit of exploration and joy. We believe the most innovative solutions emerge when work feels like play.</p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-xl border border-border transform transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]">
                <div className="h-12 w-12 rounded-full bg-[#08D9D6]/10 flex items-center justify-center mb-6">
                  <span className="text-[#08D9D6] text-xl font-bold">HC</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#08D9D6]">Human-AI Collaboration</h3>
                <p className="text-lg">We create technology where human and artificial intelligence enhance each other, with each contributing their unique strengths to create outcomes neither could achieve alone.</p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-xl border border-border transform transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]">
                <div className="h-12 w-12 rounded-full bg-[#FF2E63]/10 flex items-center justify-center mb-6">
                  <span className="text-[#FF2E63] text-xl font-bold">KZ</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#FF2E63]">Kaizen</h3>
                <p className="text-lg">We embrace continuous improvement in everything we do. Every day, every project, and every interaction is an opportunity to make small, meaningful changes that compound over time.</p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-xl border border-border transform transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]">
                <div className="h-12 w-12 rounded-full bg-[#702DFF]/10 flex items-center justify-center mb-6">
                  <span className="text-[#702DFF] text-xl font-bold">RI</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#702DFF]">Recursive Improvement</h3>
                <p className="text-lg">We design systems that grow stronger through use, continuously evolving and adapting rather than becoming obsolete.</p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-xl border border-border transform transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]">
                <div className="h-12 w-12 rounded-full bg-[#08D9D6]/10 flex items-center justify-center mb-6">
                  <span className="text-[#08D9D6] text-xl font-bold">GP</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#08D9D6]">Global Perspective</h3>
                <p className="text-lg">We embrace diverse cultural influences and perspectives, recognizing that the richest innovations come from the intersection of different worldviews.</p>
              </div>
            </div>
          </section>

          {/* Our Approach Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] order-2 md:order-1">
                <Image 
                  src="/images/about-approach.jpg" 
                  alt="WAZA approach to technology" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="order-1 md:order-2 space-y-8">
                <div className="bg-card p-6 rounded-xl shadow-lg border border-border transform transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-[#FF2E63]">AI-Native Foundation</h3>
                  <p className="text-lg leading-relaxed">
                    Unlike providers that add AI capabilities to existing approaches, WAZA builds with artificial intelligence as a foundational element, enabling systems that continuously learn and adapt based on interactions.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-lg border border-border transform transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-[#702DFF]">Technical-Creative Fusion</h3>
                  <p className="text-lg leading-relaxed">
                    In contrast to the industry's typical separation of technical and creative concerns, WAZA integrates these dimensions from the outset, creating solutions that are both technically excellent and emotionally engaging.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-lg border border-border transform transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-[#08D9D6]">Self-Recursive Improvement</h3>
                  <p className="text-lg leading-relaxed">
                    While conventional solutions require ongoing maintenance and eventual replacement, WAZA creates systems designed to improve themselves, delivering increasing value over time rather than depreciation.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-lg border border-border transform transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-[#FF2E63]">Ecosystem Thinking</h3>
                  <p className="text-lg leading-relaxed">
                    Instead of building isolated products or features, WAZA develops cohesive digital ecosystems—solutions designed as platforms rather than fixed products, with components that interact to create emergent capabilities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-br from-[#252A34] to-[#0D0D0D] p-16 rounded-xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF2E63]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#702DFF]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">Join Us in Creating the Future</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto text-[#F9F7F7]">
                We're always looking for partners who share our vision of technology that grows stronger through use.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] hover:from-[#FF2E63]/90 hover:to-[#702DFF]/90 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get in Touch <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#08D9D6] text-[#08D9D6] hover:bg-[#08D9D6]/10 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/services" className="flex items-center gap-2">
                    Explore Our Services <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 