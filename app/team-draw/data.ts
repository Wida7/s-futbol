export interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro',
	puntos: number
	valoracion?: any
	mvp?: boolean
}

export const MATCH_ID = 'fecha-3'
export const tittle = "SORTEO - TERCERA FECHA"

export const players: Player[] = [
  {
    id: 1,
    nombre: 'Jean Ramos ⭐',
    puntos: 16,
    equipo: 'blanco',
    mvp: true,
  },
  {
    id: 9,
    nombre: 'Wilson Fierro',
    puntos: 18,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 2,
    nombre: 'Jhon Guzman',
    puntos: 18,
    equipo: 'blanco',
    mvp: false,
  },
  {
    id: 7,
    nombre: 'Mauricio Pulido ⭐',
    puntos: 0,
    equipo: 'negro',
    mvp: true,
  },
  {
    id: 11,
    nombre: 'Keny Quemba ⭐',
    puntos: 15,
    equipo: 'blanco',
    mvp: true,
  },
  {
    id: 10,
    nombre: 'Walter Gomez',
    puntos: 9,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 3,
    nombre: 'Jeisson Linares',
    puntos: 18,
    equipo: 'blanco',
    mvp: false,
  },
  {
    id: 12,
    nombre: 'David Villarreal',
    puntos: 18,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 14,
    nombre: 'Fabio Garcia',
    puntos: 0,
    equipo: 'blanco',
    mvp: false,
  },
  {
    id: 6,
    nombre: 'Luis Varón',
    puntos: 0,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 5,
    nombre: 'Alejandro Colmenares ⭐',
    puntos: 20,
    equipo: 'blanco',
    mvp: true,
  },
  {
    id: 13,
    nombre: 'Juan',
    puntos: 0,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 99,
    nombre: 'Camilo Pulido',
    puntos: 0,
    equipo: 'blanco',
    mvp: false,
  },
  {
    id: 4,
    nombre: 'Brayan Rivero',
    puntos: 6,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 8,
    nombre: 'CUPO DISPONIBLE',
    puntos: 0,
    equipo: 'blanco',
    mvp: false,
  },
  {
    id: 16,
    nombre: 'CUPO DISPONIBLE',
    puntos: 0,
    equipo: 'negro',
    mvp: false,
  },
]
