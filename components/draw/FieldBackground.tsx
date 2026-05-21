'use client'

export function FieldBackground() {
	return (
		<>
			{/* Glow superior */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_60%)]" />

			{/* Textura cancha vertical */}
			<div className="absolute inset-0 opacity-20">
				{/* Contorno principal */}
				<div className="absolute inset-x-6 top-6 bottom-6 border border-white/70! rounded-[7px]" />

				{/* Línea central horizontal */}
				<div className="absolute left-1/2 top-1/2 h-px w-[85%] -translate-x-1/2 -translate-y-1/2 bg-white">
					{/* Punto central */}
					<div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
				</div>

				{/* Círculo central */}
				<div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white!" />

				{/* Área superior */}
				<div className="absolute left-1/2 top-6 h-32 w-52 -translate-x-1/2 border border-white! rounded-b-3xl" />

				{/* Área pequeña superior */}
				<div className="absolute left-1/2 top-6 h-16 w-28 -translate-x-1/2 border border-white! rounded-b-2xl" />

				{/* Punto penal superior */}
				<div className="absolute left-1/2 top-24 h-2 w-2 -translate-x-1/2 rounded-full bg-white" />

				{/* Área inferior */}
				<div className="absolute bottom-6 left-1/2 h-32 w-52 -translate-x-1/2 border border-white! rounded-t-3xl" />

				{/* Área pequeña inferior */}
				<div className="absolute bottom-6 left-1/2 h-16 w-28 -translate-x-1/2 border border-white! rounded-t-2xl" />

				{/* Punto penal inferior */}
				<div className="absolute bottom-24 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white" />

				{/* Arcos */}
				<div className="absolute left-1/2 top-3 h-4 w-20 -translate-x-1/2 border border-white! rounded-b-xl" />

				<div className="absolute bottom-3 left-1/2 h-4 w-20 -translate-x-1/2 border border-white! rounded-t-xl" />
			</div>

			{/* Gradiente oscuro cinematográfico */}
			<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.75),transparent_20%,transparent_80%,rgba(0,0,0,0.75))]" />

			{/* Líneas de césped */}
			{/* 			<div className="absolute inset-0 opacity-[0.04]">
				{Array.from({ length: 18 }).map((_, i) => (
					<div
						key={i}
						className="absolute left-0 right-0 h-[5%] bg-white"
						style={{
							top: `${i * 6}%`
						}}
					/>
				))}
			</div> */}
		</>
	)
}