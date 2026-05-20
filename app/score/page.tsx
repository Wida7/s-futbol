
import { playersRepository } from '@/backend/repositories/playersRepository';
import Image from "next/image"
import { scoresRepository } from "@/backend/repositories/scoresRepository";
import DataTable from '@/components/shadcn-studio/data-table/data-table';
import ScoreTable from "./ScoreTable";

export default async function ScorePage() {
  
  
  const scores = await scoresRepository.getAll();
  try {
    
    console.log(scores);
  } catch (error) {
    console.log(error);
    
  } finally {
    
    
  }
  
	// Obtenemos los players directamente del repositorio al ser un Server Component
	//const players = await playersRepository.getAll();

	return (
		<div className="p-4 text-foreground/80 mx-8 ">
      <h1 className="font-(family-name:--font-orbitron) font-black uppercase tracking-wider text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-center sm:text-start block bg-linear-to-b from-primary/50 to-primary/90 bg-clip-text text-transparent mb-4">
        Tabla de posiciones
      </h1>

      <ScoreTable data={scores} />
		</div>
	);
}
