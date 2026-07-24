export interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro',
	puntos: number
}

export const tittle = "SORTEO - FECHA FINAL"

export const players: Player[] = [
	{ id: 1, equipo: 'blanco',
		nombre: 'Camilo Rincon', puntos: 0 },

	{ id: 2, equipo: 'negro',
		nombre: 'Walter Gomez', puntos: 0 },

	{ id: 3, equipo: 'blanco',
		nombre: 'Jhon Guzman', puntos: 0 },

	{ id: 4, equipo: 'negro',
		nombre: 'Daniel Saavedra', puntos: 0 },

	{ id: 5, equipo: 'blanco',
		nombre: 'Jean Ramos', puntos: 0 },

	{ id: 6, equipo: 'negro',
		nombre: 'José Martinez', puntos: 0 },

	{ id: 7, equipo: 'blanco',
		nombre: 'Keny Kemba', puntos: 0 },

	{ id: 8, equipo: 'negro',
		nombre: 'Jeisson Linares', puntos: 0 },

	{ id: 9, equipo: 'blanco',
		nombre: 'Armando Ortega', puntos: 0 },

	{ id: 10, equipo: 'negro',
		nombre: 'David Villarreal', puntos: 0 },

	{ id: 11, equipo: 'blanco',
		nombre: 'Edwin Miranda', puntos: 0 },

	{ id: 12, equipo: 'negro',
		nombre: 'Mauricio Pulido', puntos: 0 },

	{ id: 13, equipo: 'blanco',
		nombre: 'Jorge Hernández', puntos: 0 },

	{ id: 14, equipo: 'negro',
		nombre: 'Alejandro Colmenares', puntos: 0 },

	{ id: 15, equipo: 'blanco',		
		nombre: 'Fabio Garcia', puntos: 0 },

	{ id: 16, equipo: 'negro',
		nombre: 'Deison Cagua', puntos: 0 },
]
