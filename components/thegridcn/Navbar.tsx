"use client"

import * as React from "react"
import { useToast } from "@/components/toast"

import {
  Zap,
  Menu,
  X,
} from "lucide-react"

/* ─────────────────────────────────────────────
 * Mock Data Constants
 * ───────────────────────────────────────────── */

const LANDING_NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Información", href: "/information" },
  { label: "Tabla", href: "/score" },
]



/* ─────────────────────────────────────────────
 * Navbar Template Component
 * ───────────────────────────────────────────── */

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { addToast } = useToast()

  return (
    <div className="text-foreground">
      {/* ── Sticky Navbar ─────────────────────────── */}
      <nav className="sticky top-0 z-40 border-b border-primary/20 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-primary/40 bg-primary/10">
              <span
                className="relative inline-block scale-120 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-[spin_10s_linear_infinite] "
              >
                ⚽
              </span>
            </div>
            <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              S - FÚTBOL
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-6 md:flex">
            {LANDING_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              /* href="#pricing" */
              onClick={() =>
                addToast({
                  title: "No no no!",
                  description: "No tienes permisos 🚫",
                  variant: "warning", // success | error | warning | info
                  duration: 24000,     // opcional, tiempo en ms
                })
              }
              className="rounded border border-primary bg-primary/20 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary shadow-[0_0_12px_rgba(var(--primary-rgb,0,180,255),0.15)] transition-all duration-300 hover:bg-primary/30"
            >
              Admin
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded border border-primary/30 text-foreground/60 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-primary/10 bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-3">
              {LANDING_NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-xs uppercase tracking-widest text-foreground/60 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                /* href="#pricing" */
                onClick={() => {
                addToast({
                  title: "No no no!",
                  description: "No tienes permisos 🚫",
                  variant: "warning", // success | error | warning | info
                  duration: 4000,     // opcional, tiempo en ms
                })
                  setMobileMenuOpen(false)
                }}
                className="mt-2 rounded border border-primary bg-primary/20 px-4 py-2 text-center font-mono text-[10px] uppercase tracking-widest text-primary"
              >
                Admin
              </a>
            </div>
          </div>
        )}
      </nav>

    </div>
  )
}
