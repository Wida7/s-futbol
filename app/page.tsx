import {
  Trophy,
  CalendarCheck,
  Brain,
  ChevronRight,
  Medal,
  Flame,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_45%)]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-10">


          {/* BADGES */}
          <div className="mb-6 flex flex-wrap justify-center gap-3 lg:justify-start">

            <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-semibold tracking-wide text-green-400 sm:text-sm">

              <span className="inline-block animate-[spin_2s_linear_infinite] text-2xl">
                ⚽
              </span>

              LIGA AMISTOSA • 5 FECHAS
            </div>

            <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold tracking-wide text-yellow-400 sm:text-sm content-center">
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
              <h1 className="flex items-center justify-center gap-1 text-5xl font-black uppercase tracking-tight sm:text-6xl md:text-7xl lg:justify-start">

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
                <span className="relative mx-[-15px] flex items-center justify-center">

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
      scale-90
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
              <h2 className="mt-8 text-center text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-left">
                EL QUE
                <span className="block text-green-400">
                  MÁS ASISTE
                </span>
                GANA.
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg lg:mx-0">
                Aquí la constancia vale más que el talento.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

                <button className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-green-500 px-8 text-base font-bold text-black transition-all hover:scale-[1.02] hover:bg-green-400 cursor-pointer">
                  Más información
                  <ChevronRight size={20} />
                </button>

                <button className="h-14 rounded-2xl border border-zinc-700 bg-zinc-900 px-8 text-base font-semibold text-white transition hover:bg-zinc-800 cursor-pointer">
                  Ver Tabla
                </button>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative mx-auto w-full max-w-md">

              <div className="rounded-[32px] border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur">

                <div className="space-y-4">

                  <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">
                    <div className="flex items-center gap-3">

                      <CalendarCheck
                        className="mt-1 text-green-400"
                        size={32}
                      />

                      <div>
                        <h3 className="font-bold">
                          Asistir suma más puntos
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-zinc-400">
                          El torneo premia principalmente
                          a quienes llegan a la cancha.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">
                    <div className="flex items-center gap-3">

                      <Brain
                        className="mt-1 text-green-400"
                        size={32}
                      />

                      <div>
                        <h3 className="font-bold">
                          Equipos sorteados por IA
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-zinc-400">
                          Sorteados automáticamente para más diversión y equidad.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">
                    <div className="flex items-center gap-3">

                      <Medal
                        className="mt-1 text-green-400"
                        size={42}
                      />

                      <div>
                        <h3 className="font-bold">
                          Todos pueden competir
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-zinc-400">
                          No necesitas ser el mejor jugador, solo ser constante para garantizar buenas posiciones.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">
                    <div className="flex items-center gap-3">

                      <Flame
                        className="mt-1 text-green-400"
                        size={72}
                      />

                      <div>
                        <h3 className="font-bold">
                          El cierre vale más
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-zinc-400">
                          En las últimas fechas habrá más puntos en juego,
                          así que nadie queda fuera de lugar antes de tiempo
                          y todo puede cambiar hasta el final.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">
                    <div className="flex items-center gap-3">

                      <Trophy
                        className="mt-1 text-green-400"
                        size={26}
                      />

                      <div>
                        <h3 className="font-bold">
                          Premios finales
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-zinc-400">
                          Las primeras posiciones ganan premios al final de la liga.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-green-500 p-5 text-center text-black">
                  <p className="text-lg font-black uppercase">
                    No gana el más talentoso.
                  </p>

                  <p className="mt-1 text-lg font-black uppercase">
                    Gana el que nunca falta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}