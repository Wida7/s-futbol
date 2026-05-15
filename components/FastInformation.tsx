"use client"

import { Brain, CalendarCheck, Flame, Medal, Trophy } from 'lucide-react'
import { RoughNotation } from "react-rough-notation";
import { useState, useEffect } from "react";
import React from 'react'

function FastInformation() {

	const [show, setShow] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setShow(false);
			setTimeout(() => setShow(true), 100); // reinicia
		}, 5000); // cada 4 segundos
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			{/* CARD FAST INFORMATION */}
			<div className="relative mx-auto w-full max-w-md">

				<div className="rounded-[32px] border border-primary/10 bg-primary/10 p-3 sm:p-6 shadow-2xl backdrop-blur">

					<div className="space-y-4 text-sm sm:text-sm md:text-lg lg:text-lg text-start">

						<div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-4 active:scale-[0.98] transition-transform">
							<div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
							<div className="relative flex items-center gap-2">

								<CalendarCheck
									className="mt-1 text-primary/90 w-14 h-14 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
									size={32}
								/>

								<div>
									<h3 className="font-bold">
										Asistir suma más puntos
									</h3>

									<p className="mt-1 text-sm sm:text-sm lg:text-sm leading-relaxed text-zinc-400">
										El torneo premia principalmente
										a quienes llegan a la cancha.
									</p>
								</div>
							</div>
						</div>

						<div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-4 active:scale-[0.98] transition-transform">
							<div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite_0.5s]" />
							<div className="relative flex items-center gap-2">

								<Brain
									className="mt-1 text-primary/90 w-14 h-14 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
									size={32}
								/>

								<div>
									<h3 className="font-bold">
										Equipos sorteados por IA
									</h3>

									<p className="mt-1 text-sm sm:text-sm lg:text-sm leading-relaxed text-zinc-400">
										Sorteados automáticamente para más diversión y equidad.
									</p>
								</div>
							</div>
						</div>

						<div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-4 active:scale-[0.98] transition-transform">
							<div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite_1s]" />
							<div className="relative flex items-center gap-2">

								<Medal
									className="mt-1 text-primary/90 w-22 h-22 sm:w-14 sm:h-14 lg:w-22 lg:h-22"
									size={42}
								/>

								<div>
									<h3 className="font-bold">
										Todos pueden competir
									</h3>

									<p className="mt-1 text-sm sm:text-sm lg:text-sm leading-relaxed text-zinc-400">
										No necesitas ser el mejor jugador, solo ser constante para garantizar buenas posiciones.
									</p>
								</div>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-4 active:scale-[0.98] transition-transform">
							<div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite_1.5s]" />
							<div className="relative flex items-center gap-2">

								<Flame
									className="mt-1 text-primary/90 w-26 h-26 sm:w-18 sm:h-18 lg:w-28lg:h-28"
									size={72}
								/>

								<div>
									<h3 className="font-bold">
										El cierre vale más
									</h3>

									<p className="mt-1 text-sm sm:text-sm lg:text-sm leading-relaxed text-zinc-400">
										En las últimas fechas habrá más puntos en juego,
										nadie queda fuera de lugar antes del pitido final.
									</p>
								</div>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-4 active:scale-[0.98] transition-transform">
							<div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite_2s]" />
							<div className="relative flex items-center gap-2">

								<Trophy
									className="mt-1 text-primary/90 w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
									size={26}
								/>

								<div>
									<h3 className="font-bold">
										Premios finales
									</h3>

									<p className="mt-1 text-sm sm:text-sm lg:text-sm leading-relaxed text-zinc-400">
										Las 3 primeras posiciones ganan premios al final de la liga.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-8 rounded-2xl bg-primary/40 p-5 text-center text-white/80 flex flex-col text-2sm">
						<div className="">
							<p className="font-black uppercase">
								<span>
									No {" "}
								</span>
								gana el más talentoso.
							</p>

							<p className="mt-1 font-black uppercase">
								<RoughNotation
									type="highlight"
									show={show}
									color="rgba(255,255,0,0.2)"
									animationDuration={4000}
									iterations={3}
								>
									<span className="p-3">Gana el que nunca falta.</span>
								</RoughNotation>
							</p>
						</div>

					</div>

				</div>
			</div>
		</>
	)
}

export default FastInformation