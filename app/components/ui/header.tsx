"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
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
            <Link href="/projects" className="text-sm font-medium transition-colors hover:text-[#FF2E63]">
              Projects
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
                <Link href="/projects" className="text-lg font-medium transition-colors hover:text-[#FF2E63]">
                  Projects
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
  );
} 