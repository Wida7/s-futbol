'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Trophy } from 'lucide-react'

import { FieldBackground } from '@/components/draw/FieldBackground'
import { PlayerCard } from '@/components/draw/PlayerCard'

interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro',
	puntos: number
}

const tittle = "SORTEO - FECHA 4"

const players: Player[] = [
	{ id: 1, equipo: 'negro', 
		nombre: 'Jhon Guzman ⭐', puntos: 0 },
	{ id: 2, equipo: 'blanco', 
		nombre: 'Walter Gomez', puntos: 55 },
	{ id: 3, equipo: 'negro', 
		nombre: 'Reinel Capera', puntos: 10 },
	{ id: 4, equipo: 'blanco', 
		nombre: 'Mauricio Pulido ⭐', puntos: 25 },
	{ id: 5, equipo: 'negro', 
		nombre: 'Jean Ramos ⭐', puntos: 51 },
	{ id: 6, equipo: 'blanco', 
		nombre: 'Brian Maldonado ⭐', puntos: 0 },
	{ id: 7, equipo: 'negro', 
		nombre: 'David Villarreal ⭐', puntos: 29 },
	{ id: 8, equipo: 'blanco', 
		nombre: 'Daniel Saavedra', puntos: 46 },
	{ id: 9, equipo: 'negro', 
		nombre: 'Juan Martínez ⭐', puntos: 15 },
	{ id: 10, equipo: 'blanco', 
		nombre: 'Deison Cagua ⭐', puntos: 10 },
	{ id: 11, equipo: 'negro', 
		nombre: 'Keny Quemba ⭐', puntos: 50 },
	{ id: 12, equipo: 'blanco', 
		nombre: 'Jeisson Linares ⭐', puntos: 0 },
	{ id: 13, equipo: 'negro', 
		nombre: 'Camilo Rincon', puntos: 29 },
	{ id: 14, equipo: 'blanco', 
		nombre: 'Alejo Colmenares ⭐', puntos: 40 },
	{ id: 15, equipo: 'negro', 
		nombre: 'Jhonatan Molina ⭐', puntos: 0 },
	{ id: 16, equipo: 'blanco', 
		nombre: 'Samuel Solarte ⭐', puntos: 15 },
]

export default function SorteoPage() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [revealedPlayers, setRevealedPlayers] = useState<Player[]>([])

	const currentPlayer = players[currentIndex]

	const teamWhite = useMemo(() => {
		return revealedPlayers.filter(player => player.equipo === 'blanco')
	}, [revealedPlayers])

	const teamBlack = useMemo(() => {
		return revealedPlayers.filter(player => player.equipo === 'negro')
	}, [revealedPlayers])

	useEffect(() => {
		if (currentIndex >= players.length) return

		const timeout = setTimeout(() => {
			setRevealedPlayers(prev => [...prev, players[currentIndex]])
			setCurrentIndex(prev => prev + 1)
		}, 2300)

		return () => clearTimeout(timeout)
	}, [currentIndex])

	return (
		<main
			className="relative overflow-hidden bg-[#0b1c13] sm:bg-[#07140d] text-white"
			style={{
				height: 'calc(100dvh - 57px)',
			}}
		>
			{/* CONTENEDOR LIMITADO */}
			<div className="relative mx-auto h-full w-full sm:max-w-3xl">
				<FieldBackground />

				<div className="relative z-10 flex h-full flex-col px-3 pt-1">

					{/* HEADER */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className="shrink-0 text-center"
					>
						{/* 					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-xl">
						<Trophy className="h-3 w-3 text-yellow-400" />

						<span className="text-[10px] font-bold tracking-[0.3em] text-white/80">
							S-FÚTBOL
						</span>
					</div> */}

						<h1 className="bg-linear-to-b from-white to-white/40 bg-clip-text text-xl sm:text-2xl font-black uppercase tracking-[0.15em] text-transparent">
							{tittle}
						</h1>
					</motion.div>

					{/* CONTENIDO */}
					<div className="flex flex-1 flex-col justify-between pb-2">

						{/* EQUIPO ARRIBA */}
						<div className="shrink-0 #bg-blue-600/15  h-[40%] mt-2 sm:mt-6 content-center">
							<Formation team={teamWhite} side="top" />
						</div>

						{/* CARD CENTRAL */}
						<div className="flex flex-1 items-center justify-center">
							<AnimatePresence mode="wait">
								{currentPlayer && (
									<motion.div
										key={currentPlayer.id}
										initial={{
											opacity: 0,
											scale: 0.45,
											rotate: -15,
											y: 70,
										}}
										animate={{
											opacity: 1,
											scale: 1,
											rotate: 0,
											y: 0,
										}}
										exit={{
											opacity: 0,
											scale: 0.75,

											y:
												currentPlayer.equipo === 'blanco'
													? -240
													: 240,
										}}
										transition={{
											duration: 0.7,
											type: 'spring',
										}}
									>
										<PlayerCard
											player={currentPlayer}
											featured
										/>
									</motion.div>
								)}
							</AnimatePresence>

						</div>

						{/* EQUIPO ABAJO */}
						<div className="shrink-0 h-[45%] #bg-red-600/15 content-center mb-6 sm:mb-6">
							<Formation team={teamBlack} side="bottom" />
						</div>

					</div>
				</div>
			</div>
		</main>
	)
}

interface FormationProps {
	team: Player[]
	side: 'top' | 'bottom'
}

function Formation({ team, side }: FormationProps) {

	const rows = [
		team.slice(0, 4),
		team.slice(4, 8),
		team.slice(8, 10),
	]

	const orderedRows =
		side === 'bottom'
			? [...rows].reverse()
			: rows

	return (
		<div className="space-y-4 sm:space-y-7 #bg-amber-400/25  ">

			{orderedRows.map((row, rowIndex) => (
				<div
					key={rowIndex}
					className="flex items-center justify-center gap-2"
				>
					{row.map((player, index) => (
						<motion.div
							key={player.id}
							initial={{
								opacity: 0,
								scale: 0.7,
								y: side === 'top' ? -30 : 30,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								y: 0,
							}}
							transition={{
								duration: 0.35,
								delay: index * 0.04,
							}}
						>
							<PlayerCard player={player} />
						</motion.div>
					))}
				</div>
			))}
		</div>
	)
}