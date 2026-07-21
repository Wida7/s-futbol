export interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro',
	puntos: number
}

export const players: Player[] = [
	{ id: 1, equipo: 'negro',
		nombre: 'Jean Ramos ⭐', puntos: 74 },

	{ id: 2, equipo: 'blanco',
		nombre: 'Walter Gomez ⭐', puntos: 65 },

	{ id: 3, equipo: 'negro',
		nombre: 'Juan Tovar ⭐', puntos: 0 },

	{ id: 4, equipo: 'blanco',
		nombre: 'Camilo Camargo', puntos: 26 },

	{ id: 5, equipo: 'negro',
		nombre: 'Mauricio Amaya ⭐', puntos: 10 },

	{ id: 6, equipo: 'blanco',
		nombre: 'Keny Quemba ⭐', puntos: 65 },

	{ id: 7, equipo: 'negro',
		nombre: 'David Villarreal ⭐', puntos: 50 },

	{ id: 8, equipo: 'blanco',
		nombre: 'Jeisson Linares', puntos: 10 },

	{ id: 9, equipo: 'negro',
		nombre: 'Jefferson Linares', puntos: 0 },

	{ id: 10, equipo: 'blanco',
		nombre: 'Felipe Baquero ⭐', puntos: 0 },

	{ id: 11, equipo: 'negro',
		nombre: 'Reinel Capera', puntos: 25 },

	{ id: 12, equipo: 'blanco',
		nombre: 'Mauricio Pulido (Marang)', puntos: 38 },

	{ id: 13, equipo: 'negro',
		nombre: 'Camilo Rincon', puntos: 57 },

	{ id: 14, equipo: 'blanco',
		nombre: 'Alejo Colmenares', puntos: 50 },

	{ id: 15, equipo: 'negro',
		nombre: 'Jhon Guzman', puntos: 15 },

	{ id: 16, equipo: 'blanco',
		nombre: 'Brayan Álvarez', puntos: 0 },
]
