'use client'

import { motion } from 'motion/react'
import { Shirt } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro'
	puntos: number
}

interface Props {
	player: Player
	featured?: boolean
	onClick?: () => void
	disabled?: boolean
	selected?: boolean
}

export function PlayerCard({
	player,
	featured,
	onClick,
	disabled,
	selected
}: Props) {

	const isWhite = player.equipo === 'blanco'

	return (
		<motion.div
			whileHover={{ scale: 1.03 }}
			className={cn(`
				relative overflow-hidden border backdrop-blur-2xl gap-4 

				${featured
					? 'w-full rounded-[28px] p-4 backdrop-blur-md!'
					: 'w-[77px] sm:w-[150px] h-[100px] sm:h-[145px] rounded-2xl p-2'
				}

				${isWhite
					? 'border-white/30! bg-white/10 shadow-[0_0_25px_rgba(255,255,255,0.15)]'
					: 'border-zinc-700! bg-black/70 shadow-[0_0_25px_rgba(0,0,0,0.8)]'
				}
			`, disabled && "opacity-20 grayscale cursor-not-allowed ",
        selected && "ring-4 ring-yellow-400")}
			onClick={!disabled ? onClick : undefined}
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
						: 'flex-col gap-0.5'
					}
				`}
			>

				{/* ICONO */}
				<div
					className={`
						flex items-center justify-center border

						${featured
							? 'h-14 w-14 sm:h-16 sm:w-16 rounded-2xl flex-col'
							: 'h-10 w-10 sm:h-14 sm:w-14 rounded-xl flex-col'
						}

						${isWhite
							? 'border-white/40! bg-white text-black'
							: 'border-zinc-700! bg-black text-white'
						}
					`}
				>
					<Shirt
						className={featured
							? 'h-8 w-8 sm:h-8 sm:w-8'
							: 'h-5 w-5 sm:h-6 sm:w-6'
						}
					/>

					{/* Puntos */}
					<div className={`mt-0.5 text-[10px] font-bold leading-none  
						${isWhite
							? 'text-black sm:text-[12px]'
							: ' text-white sm:text-[12px]'
						}`}>

						{featured
							? `${player.puntos} puntos`
							: `${player.puntos} pts`}



					</div>
				</div>

				{/* TEXTO */}
				<div className={featured ? '' : 'text-center'}>

					<p
						className={`
							font-black uppercase tracking-wide text-white

							${featured
								? 'text-lg'
								: 'text-[10px] sm:text-[17px] whitespace-normal wrap-break-word max-w-min'
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