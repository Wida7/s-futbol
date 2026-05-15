
import { playersRepository } from '@/backend/repositories/playersRepository';
import DataTableWithExportDemo from '@/components/shadcn-studio/data-table/data-table-12';
import Image from "next/image"

export default async function ScorePage() {

	// Obtenemos los players directamente del repositorio al ser un Server Component
	//const players = await playersRepository.getAll();

	return (
		<div className="p-4 text-gray-900">
      <h1 className="font-(family-name:--font-orbitron) font-black uppercase tracking-wider text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-center sm:text-start block bg-linear-to-b from-primary/50 to-primary/90 bg-clip-text text-transparent">
        Tabla de posiciones
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-3xl leading-relaxed text-foreground/60 md:text-4xl mx-auto text-center">
        En construcción.
      </p>
			        <Image
          src="/tft.gif"   // coloca tu gif en la carpeta public/
          alt="Animación cohete"
          width={100}
          height={100}
          className="mx-auto"
        />


      <div className="mt-8 flex justify-center">
        <Image
          src="/notidea.gif"   // coloca tu gif en la carpeta public/
          alt="Animación cohete"
          width={250}
          height={250}
          className="mx-auto"
        />
      </div>	

      {/* GIF centrado */}
      <div className="mt-8 flex justify-center">

      </div>


			{/* <DataTableWithExportDemo /> */}
		</div>
	);
}
