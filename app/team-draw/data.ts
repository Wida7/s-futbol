export interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro',
	puntos: number
	mvp?: boolean
}

export const MATCH_ID = 'fecha-5'
export const tittle = "SORTEO - QUINTA FECHA"

export const players: Player[] = [
	{ id: 3, equipo: 'negro', 
		nombre: 'Camilo Rincon', puntos: 8 },

	{ id: 4, equipo: 'blanco', 
		nombre: 'Jean Ramos', puntos: 40, mvp: true },

	{ id: 5, equipo: 'negro', 
		nombre: 'Jhon Guzman', puntos: 31 },

	{ id: 6, equipo: 'blanco', 
		nombre: 'Andrés Gómez', puntos: 32 },

	{ id: 7, equipo: 'negro', 
		nombre: 'Daniel Saavedra', puntos: 16 },

	{ id: 8, equipo: 'blanco', 
		nombre: 'Sebastian Patiño', puntos: 14 },

	{ id: 9, equipo: 'negro', 
		nombre: 'Ricardo', puntos: 6 },

	{ id: 10, equipo: 'blanco', 
		nombre: 'Jeisson Linares', puntos: 25 },

	{ id: 11, equipo: 'negro', 
		nombre: 'Juan David', puntos: 14 },

	{ id: 12, equipo: 'blanco', 
		nombre: 'Camilo Camargo', puntos: 6 },

	{ id: 13, equipo: 'negro', 
		nombre: 'Keny Quemba', puntos: 40, mvp: true },		

	{ id: 14, equipo: 'blanco', 
		nombre: 'Freddy', puntos: 15 },

	{ id: 15, equipo: 'negro', 
		nombre: 'Jefferson Linares', puntos: 8 },

	{ id: 16, equipo: 'blanco', 
		nombre: 'Andrés Zapata', puntos: 9 },

	{ id: 17, equipo: 'negro', 
		nombre: 'Wilson Fierro', puntos: 0 },

	{ id: 18, equipo: 'blanco', 
		nombre: 'Alexander Rodriguez', puntos: 22 },
]
