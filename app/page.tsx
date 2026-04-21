"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { ClipsSection } from "@/components/sections/clips-section"
import { CoversSection } from "@/components/sections/covers-section"
import { MessagesSection } from "@/components/sections/messages-section"
import { CreditsSection } from "@/components/sections/credits-section"
import { NavigationDots } from "@/components/navigation-dots"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SoapdaxRecap() {
  return (
    <main className="relative">
      <ThemeToggle />
      <NavigationDots />
      <HeroSection />
      <TimelineSection />
      <ClipsSection />
      <CoversSection />
      <MessagesSection />
      <CreditsSection />
    </main>
  )
}
