import { Brain, CalendarCheck, Flame, Medal, Trophy } from 'lucide-react'
import React from 'react'

function FastInformation() {
    return (
        <>
            {/* CARD FAST INFORMATION */}
            <div className="relative mx-auto w-full max-w-md">

                <div className="rounded-[32px] border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur">

                    <div className="space-y-4">

                        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-4 active:scale-[0.98] transition-transform">
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
                            <div className="relative flex items-center gap-3">

                                <CalendarCheck
                                    className="mt-1 text-green-400"
                                    size={32}
                                />

                                <div>
                                    <h3 className="font-bold">
                                        Asistir suma más puntos
                                    </h3>

                                    <p className="mt-1 text-base leading-relaxed text-zinc-400">
                                        El torneo premia principalmente
                                        a quienes llegan a la cancha.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-4 active:scale-[0.98] transition-transform">
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite_0.5s]" />
                            <div className="relative flex items-center gap-3">

                                <Brain
                                    className="mt-1 text-green-400"
                                    size={32}
                                />

                                <div>
                                    <h3 className="font-bold">
                                        Equipos sorteados por IA
                                    </h3>

                                    <p className="mt-1 text-base leading-relaxed text-zinc-400">
                                        Sorteados automáticamente para más diversión y equidad.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-4 active:scale-[0.98] transition-transform">
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite_1s]" />
                            <div className="relative flex items-center gap-3">

                                <Medal
                                    className="mt-1 text-green-400"
                                    size={42}
                                />

                                <div>
                                    <h3 className="font-bold">
                                        Todos pueden competir
                                    </h3>

                                    <p className="mt-1 text-base leading-relaxed text-zinc-400">
                                        No necesitas ser el mejor jugador, solo ser constante para garantizar buenas posiciones.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-4 active:scale-[0.98] transition-transform">
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite_1.5s]" />
                            <div className="relative flex items-center gap-3">

                                <Flame
                                    className="mt-1 text-green-400"
                                    size={72}
                                />

                                <div>
                                    <h3 className="font-bold">
                                        El cierre vale más
                                    </h3>

                                    <p className="mt-1 text-base leading-relaxed text-zinc-400">
                                        En las últimas fechas habrá más puntos en juego,
                                        así que nadie queda fuera de lugar y todo puede cambiar hasta el pitido final.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-4 active:scale-[0.98] transition-transform">
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite_2s]" />
                            <div className="relative flex items-center gap-3">

                                <Trophy
                                    className="mt-1 text-green-400"
                                    size={26}
                                />

                                <div>
                                    <h3 className="font-bold">
                                        Premios finales
                                    </h3>

                                    <p className="mt-1 text-base leading-relaxed text-zinc-400">
                                        Las 3 primeras posiciones ganan premios al final de la liga.
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
        </>
    )
}

export default FastInformation