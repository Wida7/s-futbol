'use client'

import { motion } from 'motion/react'

export default function Page() {
	return (
		<div className="flex min-h-dvh items-center justify-center bg-black">
			<motion.div
				initial={{
					scale: 0,
					opacity: 0,
					y: 100,
				}}
				animate={{
					scale: 1,
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 1,
				}}
				className="rounded-3xl bg-white px-10 py-8 text-3xl font-black text-black"
			>
				MOTION TEST
			</motion.div>
		</div>
	)
}