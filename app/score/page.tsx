import { playersRepository } from '@/backend/repositories/playersRepository';
import DataTableWithExportDemo from '@/components/shadcn-studio/data-table/data-table-12';

export default async function ScorePage() {

    // Obtenemos los players directamente del repositorio al ser un Server Component
    const players = await playersRepository.getAll();

    return (
        <div className="min-h-screen p-8 bg-gray-50 text-gray-900">
            <h1 className="text-3xl font-bold mb-6 text-indigo-600">Tabla de posiciones</h1>

            <DataTableWithExportDemo />
        </div>
    );
}
