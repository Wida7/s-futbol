export interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro',
	puntos: number
	valoracion?: any
	mvp?: boolean
}

export const MATCH_ID = 'fecha-4'
export const tittle = "SORTEO - CUARTA FECHA"

export const players: Player[] = [
	{ id: 1, equipo: 'negro',
		nombre: 'Mauricio Pulido', valoracion: 8.5, puntos: 0, mvp: true },

	{ id: 2, equipo: 'blanco',
		nombre: 'Jhon Guzman', valoracion: 7.0, puntos: 30 },

	{ id: 3, equipo: 'negro',
		nombre: 'Andrés Zapata', valoracion: 5.3, puntos: 12 },

	{ id: 4, equipo: 'blanco',
		nombre: 'Keny Quemba', valoracion: 6.5, puntos: 27, mvp: true },

	{ id: 5, equipo: 'negro',
		nombre: 'Freddy', valoracion: 6.0, puntos: 15 },

	{ id: 6, equipo: 'blanco',
		nombre: 'Jeisson Linares', valoracion: 6.8, puntos: 32 },

	{ id: 7, equipo: 'negro',
		nombre: 'Jean Ramos', valoracion: 5.5, puntos: 32, mvp: true },

	{ id: 8, equipo: 'blanco',
		nombre: 'Alejandro Colmenares', valoracion: 4.3, puntos: 32, mvp: true },

	{ id: 9, equipo: 'negro',
		nombre: 'Juan David', valoracion: 5.0, puntos: 12 },

	{ id: 10, equipo: 'blanco',
		nombre: 'Andrés Gómez', valoracion: 5.0, puntos: 18 },

	{ id: 11, equipo: 'negro',
		nombre: 'Brayan Rivero', valoracion: 5.0, puntos: 12 },

	{ id: 12, equipo: 'blanco',
		nombre: 'Deiby Guatavita', valoracion: 4.0, puntos: 0 },

	{ id: 13, equipo: 'negro',
		nombre: 'Fabio Garcia', valoracion: 4.0, puntos: 6 },

	{ id: 14, equipo: 'blanco',
		nombre: 'Oscar Zuluaga', valoracion: 4.0, puntos: 6 },

	{ id: 15, equipo: 'negro',
		nombre: 'CUPO DISPONIBLE', valoracion: 0.0, puntos: 0 },

	{ id: 16, equipo: 'blanco',
		nombre: 'CUPO DISPONIBLE', valoracion: 0.0, puntos: 0 },
]
