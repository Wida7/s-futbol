"use client";

import FastInformation from "@/components/FastInformation";
import {
  Trophy,
  CalendarCheck,
  Brain,
  ChevronRight,
  Medal,
  Flame,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_45%)]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-10">


          {/* BADGES */}
          <div className="mb-6 flex flex-wrap justify-center gap-3 lg:justify-start animate-[fade-in-down_0.6s_ease-out_both]">

            <div className="relative overflow-hidden flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-green-400 sm:text-base">
              {/* Animación */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
              <span className="inline-block animate-[spin_2s_linear_infinite] text-2xl">
                ⚽
              </span>

              LIGA AMISTOSA • 5 FECHAS
            </div>

            <div className="relative overflow-hidden rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-yellow-400 sm:text-base content-center">
              {/* Animación */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
              <span className="inline-block animate-bounce text-lg">
                🏆
              </span>
              PRIMERA EDICIÓN • 3 PREMIOS
            </div>
          </div>

          {/* HERO */}
          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div className="text-center lg:text-left">

              {/* MAIN TITLE */}
              <h1 className="flex items-center justify-center gap-1 text-5xl font-black uppercase tracking-tight sm:text-6xl md:text-7xl lg:justify-start animate-[fade-in-up_0.6s_ease-out_0.2s_both]">

                <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                  S
                </span>

                {/* BALL */}
                <span className="relative flex items-center justify-center">

                  {/* Glow */}
                  <span
                    className="
                      absolute
                      h-12
                      w-12
                      rounded-full
                      bg-green-400/20
                      blur-2xl
                      animate-pulse
                    "
                  />

                  <span
                    className="
                      relative
                      inline-block
                      text-green-400
                      drop-shadow-[0_0_14px_rgba(34,197,94,0.8)]
                    "
                  >
                    -
                  </span>
                </span>

                <span className="bg-gradient-to-b from-green-300 to-green-500 bg-clip-text text-transparent">
                  FÚTB
                </span>
                {/* BALL */}
                <span className="relative mx-[-7px] flex items-center justify-center">

                  {/* Glow */}
                  <span
                    className="
      absolute
      h-8
      w-8
      rounded-full
      bg-green-400/20
      blur-xl
      animate-pulse
    "
                  />

                  {/* Rotating shine */}
                  <span
                    className="
      absolute
      inset-0
      rounded-full
      bg-gradient-to-tr
      from-transparent
      via-white/25
      to-transparent
      animate-[spin_8s_linear_infinite]
    "
                  />

                  {/* Ball */}
                  <span
                    className="
                      relative
                      inline-block
                      scale-80
                      text-green-400
                      drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]
                      animate-[spin_20s_linear_infinite]
                    "
                  >
                    ⚽
                  </span>
                </span>
                <span className="bg-gradient-to-b from-green-300 to-green-500 bg-clip-text text-transparent">
                  L
                </span>
              </h1>

              {/* SECOND TITLE */}
              <h2 className="mt-8 text-center text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-left animate-[fade-in-up_0.6s_ease-out_0.3s_both]">
                EL QUE
                <span className="block text-green-400">
                  MÁS ASISTE
                </span>
                GANA.
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg lg:mx-0 animate-[fade-in-up_0.6s_ease-out_0.4s_both]">
                Aquí la constancia vale más que el talento.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-[fade-in-up_0.6s_ease-out_0.5s_both]">

                <button className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-green-500 px-8 text-base font-bold text-black transition-all hover:scale-[1.02] hover:bg-green-400 cursor-pointer"
                  onClick={() => router.push("/information")}>
                  Más información
                  <ChevronRight size={20} />
                </button>

                <button className="h-14 rounded-2xl border border-zinc-700 bg-zinc-900 px-8 text-base font-semibold text-white transition hover:bg-zinc-800 cursor-pointer">
                  Ver Tabla
                </button>
              </div>
            </div>

            <div className="animate-[fade-in-up_0.6s_ease-out_0.6s_both]">
              <FastInformation />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}