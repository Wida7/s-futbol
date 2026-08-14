export interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro',
	puntos: number
	mvp?: boolean
}

export const MATCH_ID = 'fecha-3'
export const tittle = "SORTEO - TERCERA FECHA"

export const players: Player[] = [
	{ id: 1, equipo: 'negro', 
		nombre: 'Mauricio Pulido⭐', puntos: 21, mvp: true },

	{ id: 2, equipo: 'blanco', 
		nombre: 'Sebastian Patiño', puntos: 0 },

	{ id: 3, equipo: 'negro', 
		nombre: 'David Villarreal', puntos: 18 },

	{ id: 4, equipo: 'blanco', 
		nombre: 'Jhankarlo Gómez⭐', puntos: 10 },

	{ id: 5, equipo: 'negro', 
		nombre: 'Freddy', puntos: 0 },

	{ id: 6, equipo: 'blanco', 
		nombre: 'Jean Ramos', puntos: 16 },

	{ id: 7, equipo: 'negro', 
		nombre: 'Juan David', puntos: 0 },

	{ id: 8, equipo: 'blanco', 
		nombre: 'Keny Quemba', puntos: 19 },

	{ id: 9, equipo: 'negro', 
		nombre: 'Jhon Guzman', puntos: 13 },

	{ id: 10, equipo: 'blanco', 
		nombre: 'Daniel Saavedra', puntos: 16 },

	{ id: 11, equipo: 'negro', 
		nombre: 'Alejandro Colmenares', puntos: 12 },

	{ id: 12, equipo: 'blanco', 
		nombre: 'Gabriel Arias', puntos: 0 },

	{ id: 13, equipo: 'negro', 
		nombre: 'Jeisson Linares', puntos: 13 },

	{ id: 14, equipo: 'blanco', 
		nombre: 'Walter Gomez', puntos: 16 },

	{ id: 15, equipo: 'negro', 
		nombre: 'Andrés Gómez', puntos: 15 },

	{ id: 16, equipo: 'blanco', 
		nombre: 'Alex Quiroga', puntos: 6 },
]
