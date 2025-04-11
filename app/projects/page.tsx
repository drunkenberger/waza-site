"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header";
import { ArrowRight, ExternalLink } from "lucide-react";

// Project data - in a real app, this would come from a database or CMS
// TODO: Replace these placeholder SVGs with actual project screenshots/logos:
// - tacos-nearme-preview.svg: Replace with screenshot of the taco finder interface or Taco Defense game
// - san-luis-way-preview.svg: Replace with screenshot of the city guide or service provider directory
// - sobrecitos-preview.svg: Replace with screenshot of the platform's main interface
const projects = [
  {
    id: 1,
    title: "TacosNearMe.net",
    description: "A community-driven platform helping users discover the best taquerias worldwide. Features include a unique arcade game 'Taco Defense Challenge' with real taco prizes, comprehensive city guides, and an engaged community of taco enthusiasts.",
    image: "/tacos-nearme-preview.svg",
    tags: ["Food Tech", "Community Platform", "Gamification"],
    link: "https://tacosnearme.net",
    aiFeatures: [
      {
        title: "AI-Powered Recommendations",
        description: "Personalized taco suggestions based on taste preferences and past reviews"
      },
      {
        title: "Smart Location Services",
        description: "Real-time geolocation for finding the nearest authentic taquerias"
      },
      {
        title: "Taste Profile Analysis",
        description: "AI analysis of user preferences to suggest new flavors and styles"
      }
    ]
  },
  {
    id: 2,
    title: "San Luis Way",
    description: "A comprehensive digital platform connecting expatriates and locals in San Luis Potosí. The platform offers curated recommendations, cultural guides, and a trusted network of service providers to help people navigate and integrate into the city's vibrant community.",
    image: "/san-luis-way-preview.svg",
    tags: ["Local Guide", "Community", "Expat Services"],
    link: "https://sanluisway.com",
    aiFeatures: [
      {
        title: "Cultural Assistant AI",
        description: "Virtual guide providing cultural insights and local customs"
      },
      {
        title: "Smart Service Matching",
        description: "AI-driven matching of expats with relevant service providers"
      },
      {
        title: "Language Learning AI",
        description: "Contextual language assistance for daily situations"
      }
    ]
  },
  {
    id: 3,
    title: "Sobrecitos.net",
    description: "An innovative digital platform focused on enhancing user experiences through AI-powered solutions. The platform demonstrates WAZA's capability to create adaptive, self-improving systems.",
    image: "/sobrecitos-preview.svg",
    tags: ["AI Platform", "Digital Experience", "Innovation"],
    link: "https://sobrecitos.net",
    aiFeatures: [
      {
        title: "Adaptive AI Agent",
        description: "Self-learning assistant that evolves with user interactions"
      },
      {
        title: "Predictive Analytics",
        description: "AI-driven insights for anticipating user needs"
      },
      {
        title: "Natural Language Processing",
        description: "Advanced language understanding for seamless communication"
      }
    ]
  }
];

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/50">
      <Header />
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[#252A34] via-[#252A34] to-[#0D0D0D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg.png')] opacity-10 bg-cover bg-center"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our{" "}
                <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Discover how our AI-native solutions are transforming businesses and creating new possibilities.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-24 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="max-w-[800px] space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Transforming Ideas into{" "}
                <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                  Intelligent Solutions
                </span>
              </h2>
              <p className="text-muted-foreground text-lg">
                At WAZA, we specialize in creating AI-powered platforms that evolve and improve through use. 
                Each project showcases our commitment to building intelligent, adaptive systems that deliver 
                real value to users. From community-driven platforms to sophisticated AI agents, explore how 
                we're shaping the future of digital experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#FF2E63]"></div>
                  <span className="text-sm">AI-Native Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#702DFF]"></div>
                  <span className="text-sm">Adaptive Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#08D9D6]"></div>
                  <span className="text-sm">User-Centric Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="group relative overflow-hidden border-0 bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF2E63] to-[#702DFF]"></div>
                <CardContent className="p-6">
                  <div className="aspect-video relative mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#FF2E63]/10 px-3 py-1 text-sm text-[#FF2E63]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-4 py-4">
                      {project.aiFeatures.map((feature, index) => (
                        <div key={index} className="space-y-1">
                          <h4 className="font-semibold text-[#FF2E63]">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Button
                        asChild
                        variant="ghost"
                        className="group/button hover:bg-[#FF2E63]/10 hover:text-[#FF2E63]"
                      >
                        <Link href={project.link} className="flex items-center gap-2">
                          Learn More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className="hover:bg-[#FF2E63]/10 hover:text-[#FF2E63] hover:border-[#FF2E63]"
                      >
                        <Link href={project.link}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#252A34] via-[#252A34] to-[#0D0D0D] text-white relative">
        <div className="absolute inset-0 bg-[url('/bg.png')] opacity-10 bg-cover bg-center"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Build Your{" "}
                <span className="bg-gradient-to-r from-[#FF2E63] to-[#702DFF] bg-clip-text text-transparent">
                  Next Project
                </span>
                ?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                Let's create something extraordinary together.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/90 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/80 text-white shadow-md"
              >
                <Link href="/#cta">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#08D9D6] text-[#08D9D6] hover:bg-[#08D9D6]/10"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 