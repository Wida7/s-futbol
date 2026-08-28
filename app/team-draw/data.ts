export interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro',
	puntos: number
	mvp?: boolean
}

export const MATCH_ID = 'fecha-4'
export const tittle = "SORTEO - CUARTA FECHA"

export const players: Player[] = [
	{ id: 1, equipo: 'negro', 
		nombre: 'Don Julio', puntos: 9 },

	{ id: 2, equipo: 'blanco', 
		nombre: 'Mauricio Pulido⭐', puntos: 30, mvp: true },

	{ id: 3, equipo: 'negro', 
		nombre: 'Camilo Camargo', puntos: 0 },

	{ id: 4, equipo: 'blanco', 
		nombre: 'Jean Ramos', puntos: 28 },

	{ id: 5, equipo: 'negro', 
		nombre: 'Andrés Gómez', puntos: 26 },

	{ id: 6, equipo: 'blanco', 
		nombre: 'Ricardo', puntos: 0 },

	{ id: 7, equipo: 'negro', 
		nombre: 'Keny Quemba⭐', puntos: 34, mvp: true },

	{ id: 8, equipo: 'blanco', 
		nombre: 'Freddy', puntos: 6 },

	{ id: 9, equipo: 'negro', 
		nombre: 'Fabio Garcia', puntos: 12 },

	{ id: 10, equipo: 'blanco', 
		nombre: 'Jhon Guzman', puntos: 22 },

	{ id: 11, equipo: 'negro', 
		nombre: 'Alex Quiroga', puntos: 15 },

	{ id: 12, equipo: 'blanco', 
		nombre: 'Jeisson Linares', puntos: 22 },

	{ id: 13, equipo: 'negro', 
		nombre: 'Juan David', puntos: 8 },

	{ id: 14, equipo: 'blanco', 
		nombre: 'Alexander Rodriguez', puntos: 11 },

	{ id: 15, equipo: 'negro', 
		nombre: 'Camilo Rincon', puntos: 0 },

	{ id: 16, equipo: 'blanco', 
		nombre: 'Andrés Zapata', puntos: 0 },
]
