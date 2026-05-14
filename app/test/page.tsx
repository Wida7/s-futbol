"use client"

import * as React from "react"
import { HeroSection } from "@/components/thegridcn/hero-section"
/* import { LogoCloud } from "@/components/thegridcn/logo-cloud"
import { BentoGrid } from "@/components/thegridcn/bento-grid"
import { StatsCounter } from "@/components/thegridcn/stats-counter"
import { PricingCard } from "@/components/thegridcn/pricing-card"
import { ComparisonTable } from "@/components/thegridcn/comparison-table"
import { CTABanner } from "@/components/thegridcn/cta-banner"
import { FAQ } from "@/components/thegridcn/faq"
import { NewsletterForm } from "@/components/thegridcn/newsletter-form"
import { Footer } from "@/components/thegridcn/footer"
import { AgentAvatar } from "@/components/thegridcn/agent-avatar" */
import {
    Zap,
    Shield,
    Palette,
    Layers,
    Monitor,
    Code,
    Globe,
    Lock,
    Cpu,
    Menu,
    X,
} from "lucide-react"

/* ─────────────────────────────────────────────
 * Mock Data Constants
 * ───────────────────────────────────────────── */


/* ─────────────────────────────────────────────
 * Landing Template Component
 * ───────────────────────────────────────────── */

export function LandingTemplate() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <div className="min-h-screen bg-background text-foreground">

            {/* ── Hero Section ──────────────────────────── */}
            <section className="relative px-2 md:py-0">
                {/* Subtle circuit-like background pattern */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb,0,180,255),0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb,0,180,255),0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

                <div className="mx-auto max-w-6xl">
                    <HeroSection
                        align="center"
                        className="border-0 bg-transparent px-0 md:px-0 md:py-4 lg:py-4"
                    >
                        <a
                            href="#pricing"
                            className="rounded border border-primary bg-primary/20 px-6 py-2.5 font-mono text-[10px] uppercase tracking-widest text-primary shadow-[0_0_16px_rgba(var(--primary-rgb,0,180,255),0.2)] transition-all duration-300 hover:bg-primary/30"
                        >
                            Más información
                        </a>
                        <a
                            href="/components"
                            className="rounded border border-primary/30 px-6 py-2.5 font-mono text-[10px] uppercase tracking-widest text-foreground/60 transition-colors hover:border-primary/50 hover:text-primary"
                        >
                            Tabla de posiciones
                        </a>
                    </HeroSection>
                </div>
            </section>


        </div>
    )
}

// Default export for Next.js page
export default function TestPage() {
  return <LandingTemplate />;
}