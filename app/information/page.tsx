import FastInformation from "@/components/FastInformation";
import { ArrowLeft, CheckCircle2, AlertCircle, XCircle, Trophy, Users, Gift } from "lucide-react";
import Link from "next/link";

export default function InformationPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
            <section className="relative overflow-hidden pb-24">
                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_50%)]" />

                <div className="relative mx-auto w-full max-w-5xl px-5 py-10">

                    {/* Header with back button */}
                    <div className="mb-14 animate-[fade-in-down_0.5s_ease-out_forwards]">
                        <Link href="/" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                            <span className="font-medium">Volver al inicio</span>
                        </Link>

                        <h1 className="mt-10 text-5xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl text-center md:text-left">
                            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                                REGLAS Y
                            </span>
                            <span className="block text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                SISTEMA
                            </span>
                        </h1>
                        <p className="mt-6 text-zinc-400 max-w-2xl text-lg text-center md:text-left sm:text-xl leading-relaxed">
                            Todo lo que necesitas saber sobre la liga, cómo se asignan los puntos en cada fecha y los premios.
                        </p>
                    </div>

                    <div className="flex flex-col gap-24">
                        {/* Section 1: Fast Information */}
                        <div className="animate-[fade-in-up_0.6s_ease-out_0.2s_both]">
                            <div className="mb-10 text-center md:text-left">
                                <h2 className="text-3xl font-black uppercase text-white mb-3 flex items-center justify-center md:justify-start gap-3">
                                    <span className="text-green-400">01.</span> Información Rápida
                                </h2>
                                <div className="h-1.5 w-24 bg-green-500 rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            </div>

                            <FastInformation />
                        </div>

                        {/* Section 2: Scoring System */}
                        <div className="animate-[fade-in-up_0.6s_ease-out_0.4s_both]">
                            <div className="mb-10 text-center md:text-left">
                                <h2 className="text-3xl font-black uppercase text-white mb-3 flex items-center justify-center md:justify-start gap-3">
                                    <span className="text-green-400">02.</span> Sistema de Puntuación
                                </h2>
                                <div className="h-1.5 w-24 bg-green-500 rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                <p className="mt-5 text-zinc-400 text-lg max-w-2xl mx-auto md:mx-0">
                                    Así es como sumarás puntos a lo largo de las 5 fechas del torneo.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                {/* Puntos por Asistencia */}
                                <div className="group relative overflow-hidden rounded-3xl border border-green-500/30 bg-gradient-to-b from-green-500/10 to-transparent p-8 hover:border-green-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                                    {/* Animación */}
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20 text-green-400 ring-1 ring-green-500/50">
                                        <CheckCircle2 size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase text-white mb-2">Asistencia</h3>
                                    <div className="text-5xl font-black text-green-400 mb-4 drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">+10 <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts</span></div>
                                    <p className="text-base text-zinc-400 leading-relaxed">
                                        Solo por llegar a la cancha y jugar el partido. El premio más importante a la constancia.
                                    </p>
                                </div>

                                {/* Puntos por Victoria */}
                                <div className="group relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-gradient-to-b from-yellow-500/10 to-transparent p-8 hover:border-yellow-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">
                                    {/* Animación */}
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-500/50">
                                        <Trophy size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase text-white mb-2">Victoria</h3>
                                    <div className="text-5xl font-black text-yellow-400 mb-4 drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]">+5 <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts</span></div>
                                    <p className="text-base text-zinc-400 leading-relaxed">
                                        Puntos adicionales para los miembros del equipo que resulte ganador en cada fecha.
                                    </p>
                                </div>

                                {/* Puntos por Empate */}
                                <div className="group relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-transparent p-8 hover:border-blue-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                                    {/* Animación */}
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/50">
                                        <AlertCircle size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase text-white mb-2">Empate</h3>
                                    <div className="text-5xl font-black text-blue-400 mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">+3 <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts</span></div>
                                    <p className="text-base text-zinc-400 leading-relaxed">
                                        Si el partido termina igualado, ambos equipos suman este punto extra (además de la asistencia).
                                    </p>
                                </div>

                                {/* Puntos por Referidos */}
                                <div className="group relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-b from-purple-500/10 to-transparent p-8 hover:border-purple-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                                    {/* Animación */}
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/50">
                                        <Users size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase text-white mb-2">Referidos</h3>
                                    <div className="text-5xl font-black text-purple-400 mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">+2 <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts c/u</span></div>
                                    <p className="text-base text-zinc-400 leading-relaxed">
                                        Por cada invitado tuyo que asista a jugar. Hasta un máximo de 3 referidos por partido.
                                    </p>
                                </div>

                                {/* Sorteo de Puntos */}
                                <div className="group relative overflow-hidden rounded-3xl border border-pink-500/30 bg-gradient-to-b from-pink-500/10 to-transparent p-8 hover:border-pink-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] md:col-span-2">
                                    {/* Animación */}
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-400 ring-1 ring-pink-500/50">
                                        <Gift size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase text-white mb-2">Sorteo Puntos</h3>
                                    <div className="text-5xl font-black text-pink-400 mb-4 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)] tracking-widest animate-[gold-green-flash_2s_infinite]">?? <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts</span></div>
                                    <p className="text-base text-zinc-400 leading-relaxed">
                                        Puntos extra sorteados que se anuncian al realizar la convocatoria. La cantidad de puntos varía y aumentará en las últimas fechas, estos serán para mantener viva la emoción hasta el final y dependeran de la suerte.
                                        <span className="ml-2 inline-block font-black text-xl tracking-widest animate-[gold-green-flash_2s_infinite]">🍀 777 🎰</span>
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