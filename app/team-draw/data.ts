export interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro',
	puntos: number
	valoracion?: any
	mvp?: boolean
}

export const MATCH_ID = 'fecha-1'
export const tittle = "SORTEO - PRIMER FECHA"

export const players: Player[] = [
	{ id: 1, equipo: 'blanco',
		nombre: 'Jean Ramos', valoracion: 9.7, puntos: 0, mvp: true },

	{ id: 2, equipo: 'negro',
		nombre: 'Wilson Fierro', valoracion: 7.0, puntos: 0 },

	{ id: 3, equipo: 'blanco',
		nombre: 'Camilo Rincón', valoracion: 8.2, puntos: 0 },

	{ id: 4, equipo: 'negro',
		nombre: 'Sebastián Patiño', valoracion: 7.2, puntos: 0 },

	{ id: 5, equipo: 'blanco',
		nombre: 'Camilo Camargo', valoracion: 7.8, puntos: 0, mvp: true },

	{ id: 6, equipo: 'negro',
		nombre: 'Jhon Guzman', valoracion: 7.0, puntos: 0 },

	{ id: 7, equipo: 'blanco',
		nombre: 'Reinel Capera', valoracion: 7.3, puntos: 0 },

	{ id: 8, equipo: 'negro',
		nombre: 'Mauricio Amaya', valoracion: 7.0, puntos: 0 },

	{ id: 9, equipo: 'blanco',
		nombre: 'Freddy', valoracion: 6.0, puntos: 0 },

	{ id: 10, equipo: 'negro',
		nombre: 'Jeisson Linares', valoracion: 6.8, puntos: 0 },

	{ id: 11, equipo: 'blanco',
		nombre: 'Andrés Zapata', valoracion: 5.3, puntos: 0 },

	{ id: 12, equipo: 'negro',
		nombre: 'Keny Quemba', valoracion: 6.5, puntos: 0, mvp: true },

	{ id: 13, equipo: 'blanco',
		nombre: 'Alexander Rodriguez', valoracion: 4.8, puntos: 0 },

	{ id: 14, equipo: 'negro',
		nombre: 'Andrés Gómez', valoracion: 5.0, puntos: 0 },

	{ id: 15, equipo: 'blanco',
		nombre: 'Alex Quiroga', valoracion: 4.5, puntos: 0 },

	{ id: 16, equipo: 'negro',
		nombre: 'Alejandro Colmenares', valoracion: 4.2, puntos: 0 },
]
