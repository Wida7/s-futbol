"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { start } from "repl"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
	align?: "left" | "center" | "right" | "topCenter"
}

export function HeroSection({
	align = "topCenter",
	children,
	className,
	...props
}: HeroSectionProps) {
	const alignmentClasses = {
		left: "items-start text-left",
		center: "items-center text-center",
		right: "items-end text-right",
		topCenter: ""
	}

	return (
		<div
			data-slot="tron-hero-section"
			className={cn(
				"group relative overflow-hidden rounded border border-primary/20 bg-card/80 px-6 py-4 backdrop-blur-sm md:px-12 md:py-24 lg:py-32 mt-4",
				className
			)}
			{...props}
		>
			{/* Grid background */}
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb,0,180,255),0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(var(--primary-rgb,0,180,255),0.1)_1px,transparent_2px)] bg-size-[10px_10px]" />

			{/* Palos del arco */}
			<div className="absolute inset-0 border-t-6 border-l-6 border-r-6 border-white " />

			{/* Scanline overlay */}
			<div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />

			{/* Radial glow from center-top */}
			<div className="pointer-events-none absolute -top-1/4 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb,0,180,255),0.06),transparent_70%)]" />

			{/* Animated horizontal scan line */}
			<div
				className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
				style={{ animation: "heroScan 6s ease-in-out infinite" }}
			/>

			{/* Animated top border glow */}
			<div className="pointer-events-none absolute left-0 right-0 top-0 h-px">
				<div
					className="h-full w-1/4 bg-linear-to-r from-transparent via-primary/60 to-transparent"
					style={{ animation: "heroSweep 5s ease-in-out infinite" }}
				/>
			</div>

			{/* Animated bottom border glow */}
			<div className="pointer-events-none absolute  left-0 right-0 bottom-0 h-px">
				<div
					className="h-full w-1/4 bg-linear-to-r from-transparent via-primary/60 to-transparent"
					style={{ animation: "heroSweep 5s ease-in-out infinite reverse" }}
				/>
			</div>
			

			<style jsx>{`
        @keyframes heroScan {
          0%, 100% { top: 20%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { top: 80%; }
        }
        @keyframes heroSweep {
          0%, 100% { margin-left: -10%; }
          50% { margin-left: 86%; }
        }
      `}</style>

			{/* Content */}
			<div
				className={cn(
					"relative z-10 flex flex-col gap-4",
					alignmentClasses[align]
				)}
			>
				{/* Badge */}
				<div className="flex flex-wrap gap-2 justify-center gap-x-10 mx-2">
				<div className="relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 shadow-[0_0_12px_rgba(var(--primary-rgb,0,180,255),0.1)]">
					<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />

					<span className="font-mono text-xs uppercase tracking-widest text-primary flex items-center">
						<span className="inline-block animate-[spin_2s_linear_infinite] text-xl mr-2">
							⚽
						</span>
						LIGA AMISTOSA
						<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary mx-2" />
						5 FECHAS
					</span>
				</div>
				<div className="relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-white bg-yellow-500/10  px-4 py-1.5 shadow-[0_0_12px_rgba(var(--primary-rgb,0,180,255),0.1)]">
					<div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />

					<span className="font-mono text-xs uppercase tracking-widest flex items-center text-yellow-500">
						<span className="inline-block animate-bounce text-xl mr-2">
							🏆
						</span>
						PRIMERA EDICIÓN
						<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-600 mx-2" />
						3 PREMIOS
					</span>
				</div>
</div>
				{/* Pre-Title */}
				<div className="font-mono text-[12px] uppercase tracking-widest text-foreground/50 wrap-normal mx-4">
					Aquí la constancia vale más que el talento.
				</div>

				{/* Title */}
				<h1 className="max-w-4xl font-display text-5xl font-bold uppercase tracking-wider text-foreground md:text-6xl lg:text-7xl flex items-center justify-center">
					<span className="bg-linear-to-b from-primary/90 to-primary/40 bg-clip-text text-transparent font-black animate-[fade-in-up_0.9s_ease-out_0.3s_both]">
						S
					</span>
					{/* BALL */}
					<span className="relative flex items-center justify-center">

						{/* Glow */}
						<span
							className="absolute h-12 w-12 rounded-full bg-green-400/20 blur-2xl animate-pulse"
						/>
						<span
							className=" relative inline-block text-primary/80 drop-shadow-[0_0_14px_rgba(255,255,255,0.9)] animate-[fade-in-up_0.8s_ease-out_0.3s_both]"
						>
							-
						</span>
					</span>
					<span className="bg-linear-to-b from-primary/80 to-primary/50 bg-clip-text text-transparent font-black animate-[fade-in-up_0.8s_ease-out_0.3s_both]">
						FÚTB
					</span>
					{/* BALL */}
					<span className="relative mx-[-7px] flex items-center justify-center">

						{/* Glow */}
						<span
							className="absolute h-8 w-8 rounded-full bg-yellow-200/20 blur-xl animate-pulse "
						/>

						{/* Rotating shine */}
						<span
							className="absolute inset-0 rounded-full bg-linear-to-tr from-transparent via-primary/20 to-transparent animate-[spin_4s_linear_infinite] "
						/>

						{/* Ball */}
						<span
							className="relative inline-block scale-70 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-[spin_20s_linear_infinite] "
						>
							⚽
						</span>
					</span>
					<span className="bg-linear-to-b from-primary/90 to-primary/40 bg-clip-text text-transparent font-black animate-[fade-in-up_0.6s_ease-out_0.3s_both]">
						L
					</span>


				</h1>

				{/* Title underline accent */}
				<div
					className={cn(
						"flex gap-1",
						align === "center" && "justify-center",
						align === "right" && "justify-end"
					)}
				>
					<div className="h-px w-12 bg-primary/60" />
					<div className="h-px w-6 bg-primary/30" />
					<div className="h-px w-3 bg-primary/15" />
				</div>

				<h2 className="mt-4 text-center text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl md:text-5xl lg:text-left animate-[fade-in-up_1.0s_ease-out_0.4s_both] ">
					<span className="block bg-linear-to-b from-white/80 to-primary/60 bg-clip-text text-transparent">
						EL QUE
					</span>
					<span className="block bg-linear-to-b from-primary/80 to-primary/50 bg-clip-text text-transparent">
						MÁS ASISTE
					</span>
					<span className="block bg-linear-to-b from-primary/60 to-white/90 bg-clip-text text-transparent">
						GANA.
					</span>
				</h2>

				{/* CTA / children */}
				{children && (
					<div className="mt-4 flex flex-wrap items-center gap-3 justify-center">
						{children}
					</div>
				)}
			</div>

			{/* Side accent lines (left) */}
			<div className="pointer-events-none absolute bottom-8 left-0 top-8 flex flex-col justify-between">
				<div className="h-16 w-px bg-gradient-to-b from-primary/40 to-transparent" />
				<div className="h-16 w-px bg-gradient-to-t from-primary/40 to-transparent" />
			</div>

			{/* Side accent lines (right) */}
			<div className="pointer-events-none absolute bottom-8 right-0 top-8 flex flex-col justify-between">
				<div className="h-16 w-px bg-gradient-to-b from-primary/40 to-transparent" />
				<div className="h-16 w-px bg-gradient-to-t from-primary/40 to-transparent" />
			</div>

			{/* Corner decorations */}
			<div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-primary/40" />
			<div className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary/40" />
			<div className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b-1 border-l-2 border-primary/40" />
			<div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-1 border-r-2 border-primary/40" />
		</div>
	)
}