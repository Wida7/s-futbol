"use client"

import * as React from "react"
import { HeroSection } from "@/components/thegridcn/hero-section"




/* ─────────────────────────────────────────────
 * Landing Template Component
 * ───────────────────────────────────────────── */

export function LandingTemplate() {


	return (
		<div className="bg-background text-foreground md:mt-18">

			{/* ── Hero Section ──────────────────────────── */}
			<section className="relative px-2 md:py-0">
				{/* Subtle circuit-like background pattern */}
				<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb,0,180,255),0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb,0,180,255),0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />

				<div className="mx-auto max-w-6xl">
					<HeroSection
						align="center"
						className="border-0 bg-transparent px-0 md:px-0 md:py-4 lg:py-4"
					>
						<a
							href="/information"
							className="rounded border border-primary bg-primary/20 px-6 py-2.5 font-mono text-[10px] uppercase tracking-widest text-primary shadow-[0_0_16px_rgba(var(--primary-rgb,0,180,255),0.2)] transition-all duration-300 hover:bg-primary/30"
						>
							Más información
						</a>
						<a
							href="/score"
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