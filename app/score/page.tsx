export const dynamic = 'force-dynamic';

import { scoresRepository } from "@/backend/repositories/scoresRepository";
import ScoreTable from "./ScoreTable";

export default async function ScorePage() {
	let scores: any[] = [];

	try {
		scores = await scoresRepository.getAll();
	} catch (error) {
		console.error("Error al obtener los puntajes:", error);
		// Si falla, scores queda como array vacío [] para que la tabla no rompa la UI
	}

	return (
		<div className="p-4 text-foreground/80 md:mx-auto">
			<h1 className="font-(family-name:--font-orbitron) font-black uppercase tracking-wider text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-center sm:text-start block bg-linear-to-b from-primary/50 to-primary/90 bg-clip-text text-transparent mb-4">
				Tabla de posiciones
			</h1>

			<ScoreTable data={scores} />
		</div>
	);
}
