'use client'

import { motion } from 'motion/react'
import { Shirt } from 'lucide-react'

interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro'
}

interface Props {
	player: Player
	featured?: boolean
}

export function PlayerCard({
	player,
	featured,
}: Props) {

	const isWhite = player.equipo === 'blanco'

	return (
		<motion.div
			whileHover={{ scale: 1.03 }}
			className={`
				relative overflow-hidden border backdrop-blur-2xl

				${featured
					? 'w-[220px] rounded-[28px] p-4'
					: 'w-[92px] rounded-2xl p-2'
				}

				${isWhite
					? 'border-white/30 bg-white/10 shadow-[0_0_25px_rgba(255,255,255,0.15)]'
					: 'border-zinc-700 bg-black/70 shadow-[0_0_25px_rgba(0,0,0,0.8)]'
				}
			`}
		>

			{/* SHINE */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute inset-0 -translate-x-full animate-[shine_5s_linear_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
			</div>

			<div
				className={`
					relative z-10 flex items-center

					${featured
						? 'gap-4'
						: 'flex-col gap-2'
					}
				`}
			>

				{/* ICONO */}
				<div
					className={`
						flex items-center justify-center border

						${featured
							? 'h-14 w-14 rounded-2xl'
							: 'h-10 w-10 rounded-xl'
						}

						${isWhite
							? 'border-white/40 bg-white text-black'
							: 'border-zinc-700 bg-black text-white'
						}
					`}
				>
					<Shirt
						className={featured
							? 'h-7 w-7'
							: 'h-5 w-5'
						}
					/>
				</div>

				{/* TEXTO */}
				<div className={featured ? '' : 'text-center'}>

					<p
						className={`
							font-black uppercase tracking-wide text-white

							${featured
								? 'text-lg'
								: 'text-[10px]'
							}
						`}
					>
						{player.nombre}
					</p>

					{featured && (
						<p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/40">
							Equipo {isWhite ? 'Blanco' : 'Negro'}
						</p>
					)}

				</div>
			</div>
		</motion.div>
	)
}