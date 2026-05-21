'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Trophy } from 'lucide-react'

import { FieldBackground } from '@/components/draw/FieldBackground'
import { PlayerCard } from '@/components/draw/PlayerCard'

interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro'
}

const players: Player[] = [
	{ id: 1, nombre: 'David Villarreal', equipo: 'blanco' },
	{ id: 2, nombre: 'Walter Gomez', equipo: 'negro' },
	{ id: 3, nombre: 'Camilo Camargo', equipo: 'blanco' },
	{ id: 4, nombre: 'Keny Quemba', equipo: 'negro' },
	{ id: 5, nombre: 'Brayan Colmenares', equipo: 'blanco' },
	{ id: 6, nombre: 'David Silva', equipo: 'negro' },
	{ id: 7, nombre: 'Jean Medina', equipo: 'blanco' },
	{ id: 8, nombre: 'Juan Cristian', equipo: 'negro' },
	{ id: 9, nombre: 'Sebas Find', equipo: 'blanco' },
	{ id: 10, nombre: 'Daniel Alías', equipo: 'negro' },
	{ id: 11, nombre: 'Andres Juancho', equipo: 'blanco' },
	{ id: 12, nombre: 'Kevin FGeas (Tatto)', equipo: 'negro' },
	{ id: 13, nombre: 'Juan Rey (Vice presiden)', equipo: 'blanco' },
	{ id: 14, nombre: 'Pipe Bueno', equipo: 'negro' },
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
			<FieldBackground />

			<div className="relative z-10 flex h-full flex-col px-3 py-2">

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

					<h1 className="bg-linear-to-b from-white to-white/40 bg-clip-text text-2xl font-black uppercase tracking-[0.15em] text-transparent">
						Sorteo
					</h1>
				</motion.div>

				{/* CONTENIDO */}
				<div className="flex flex-1 flex-col justify-between py-2">

					{/* EQUIPO ARRIBA */}
					<div className="shrink-0 #bg-blue-600/15  h-[40%] content-center">
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
					<div className="shrink-0 h-[45%] #bg-red-600/15 content-center">
						<Formation team={teamBlack} side="bottom" />
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
		team.slice(0, 3),
		team.slice(3, 7),
		team.slice(8, 9),
	]

	const orderedRows =
		side === 'top'
			? [...rows].reverse()
			: rows

	return (
		<div className="space-y-2 #bg-amber-400/25">

			{orderedRows.map((row, rowIndex) => (
				<div
					key={rowIndex}
					className="flex items-center justify-center gap-2 "
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