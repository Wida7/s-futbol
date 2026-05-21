'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Trophy } from 'lucide-react'

import { FieldBackground } from '@/components/draw/FieldBackground'
import { PlayerCard } from '@/components/draw/PlayerCard'

interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro'
}

const players: Player[] = [
	{ id: 1, nombre: 'David', equipo: 'blanco' },
	{ id: 2, nombre: 'Walter', equipo: 'negro' },
	{ id: 3, nombre: 'Camilo', equipo: 'blanco' },
	{ id: 4, nombre: 'Keny', equipo: 'negro' },
	{ id: 5, nombre: 'Colmenares', equipo: 'blanco' },
	{ id: 6, nombre: 'Silva', equipo: 'negro' },
	{ id: 7, nombre: 'Medina', equipo: 'blanco' },
	{ id: 8, nombre: 'Cristian', equipo: 'negro' },
	{ id: 9, nombre: 'Sebas', equipo: 'blanco' },
	{ id: 10, nombre: 'Daniel', equipo: 'negro' },
	{ id: 11, nombre: 'Andres', equipo: 'blanco' },
	{ id: 12, nombre: 'Kevin', equipo: 'negro' },
	{ id: 13, nombre: 'Juan', equipo: 'blanco' },
	{ id: 14, nombre: 'Pipe', equipo: 'negro' },
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
		}, 2200)

		return () => clearTimeout(timeout)
	}, [currentIndex])

	return (
		<main className="relative min-h-dvh overflow-hidden bg-[#07140d] text-white">
			<FieldBackground />

			<div className="relative z-10 mx-auto flex min-h-dvh max-w-md flex-col px-4 py-6">

				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mb-6 text-center"
				>
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
						<Trophy className="h-4 w-4 text-yellow-400" />

						<span className="text-xs font-bold tracking-[0.35em] text-white/80">
							S-FÚTBOL
						</span>
					</div>

					<h1 className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-4xl font-black uppercase tracking-[0.18em] text-transparent">
						Sorteo Oficial
					</h1>
				</motion.div>

				{/* CONTENIDO */}
				<div className="flex flex-1 flex-col justify-between">

					{/* EQUIPO ARRIBA */}
					<div className="pt-2">
						<TeamFormation team={teamWhite} side="top" />
					</div>

					{/* CARD CENTRAL */}
					<div className="flex items-center justify-center py-10">

						<AnimatePresence mode="wait">
							{currentPlayer && (
								<motion.div
									key={currentPlayer.id}
									initial={{
										opacity: 0,
										scale: 0.5,
										rotate: -15,
										y: 80,
									}}
									animate={{
										opacity: 1,
										scale: 1,
										rotate: 0,
										y: 0,
									}}
									exit={{
										opacity: 0,
										scale: 0.8,

										y:
											currentPlayer.equipo === 'blanco'
												? -280
												: 280,

										transition: {
											duration: 0.9,
										},
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
					<div className="pb-2">
						<TeamFormation team={teamBlack} side="bottom" />
					</div>

				</div>
			</div>
		</main>
	)
}

interface TeamFormationProps {
	team: Player[]
	side: 'top' | 'bottom'
}

function TeamFormation({
	team,
	side,
}: TeamFormationProps) {

	const rows = [
		team.slice(0, 3),
		team.slice(3, 6),
		team.slice(6, 7),
	]

	const orderedRows =
		side === 'top'
			? [...rows].reverse()
			: rows

	return (
		<div className="space-y-4">

			{orderedRows.map((row, rowIndex) => (
				<div
					key={rowIndex}
					className="flex items-center justify-center gap-3"
				>
					<AnimatePresence>
						{row.map((player, index) => (
							<motion.div
								key={player.id}
								initial={{
									opacity: 0,
									scale: 0.6,
									y: side === 'top' ? -40 : 40,
								}}
								animate={{
									opacity: 1,
									scale: 1,
									y: 0,
								}}
								transition={{
									duration: 0.45,
									delay: index * 0.05,
								}}
							>
								<PlayerCard player={player} />
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			))}
		</div>
	)
}