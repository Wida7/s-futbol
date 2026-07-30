export interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro',
	puntos: number
	mvp?: boolean
}

export const MATCH_ID = 'fecha-2'
export const tittle = "SORTEO - SEGUNDA FECHA"

export const players: Player[] = [
	{ id: 1, equipo: 'negro',
		nombre: 'Alexander Rodriguez', puntos: 0 },

	{ id: 2, equipo: 'blanco',
		nombre: 'Keny Quemba', puntos: 11 },

	{ id: 3, equipo: 'negro',
		nombre: 'Walter Gomez', puntos: 7 },

	{ id: 4, equipo: 'blanco',
		nombre: 'Alejandro Colmenares', puntos: 11 },
		
	{ id: 5, equipo: 'negro',
		nombre: 'Nicolás Chacón', puntos: 0 },

	{ id: 6, equipo: 'blanco',
		nombre: 'Jhankarlo Gómez ⭐', puntos: 10, mvp: true },

	{ id: 7, equipo: 'negro',
		nombre: 'Jean Ramos', puntos: 7 },

	{ id: 8, equipo: 'blanco',
		nombre: 'Javier', puntos: 0 },

	{ id: 9, equipo: 'negro',
		nombre: 'Daniel Saavedra', puntos: 7 },

	{ id: 10, equipo: 'blanco',
		nombre: 'Alex Quiroga', puntos: 0 },

	{ id: 11, equipo: 'negro',
		nombre: 'Mauricio Pulido', puntos: 9 },

	{ id: 12, equipo: 'blanco',
		nombre: 'Andrés Gómez', puntos: 7 },

	{ id: 13, equipo: 'negro',
		nombre: 'Reinel Capera', puntos: 0 },

	{ id: 14, equipo: 'blanco',
		nombre: 'Jeisson Linares', puntos: 7 },

	{ id: 15, equipo: 'negro',
		nombre: 'Fabio Garcia', puntos: 9 },

	{ id: 16, equipo: 'blanco',
		nombre: 'Jhon Guzman', puntos: 7 },
]
