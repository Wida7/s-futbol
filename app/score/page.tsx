import { playersRepository } from '@/backend/repositories/playersRepository';

export default async function ScorePage() {
  // Obtenemos los players directamente del repositorio al ser un Server Component
  const players = await playersRepository.getAll();

  return (
    <div className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Prueba de conexión: Players</h1>
      
      {players.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-500">No hay jugadores registrados en la tabla.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {players.map((player: any) => (
            <div key={player.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-2">{player.name || 'Sin nombre'}</h2>
              <div className="text-sm text-gray-600">
                <p><span className="font-medium text-gray-800">ID:</span> {player.id}</p>
                {player.position && <p><span className="font-medium text-gray-800">Posición:</span> {player.position}</p>}
                {player.number && <p><span className="font-medium text-gray-800">Número:</span> {player.number}</p>}
                {player.teamId && <p><span className="font-medium text-gray-800">Equipo ID:</span> {player.teamId}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Raw Data (JSON)</h3>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-auto text-xs shadow-inner max-h-96">
          {JSON.stringify(players, null, 2)}
        </pre>
      </div>
    </div>
  );
}
