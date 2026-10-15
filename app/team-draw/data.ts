export interface Player {
	id: number
	nombre: string
	equipo: 'blanco' | 'negro',
	puntos: number
	valoracion?: any
	mvp?: boolean
}

export const MATCH_ID = 'fecha-2'
export const tittle = "SORTEO - SEGUNDA FECHA"

export const players: Player[] = [
  {
    id: 1,
    nombre: 'Jean Ramos ⭐',
    puntos: 6,
    equipo: 'blanco',
    mvp: true,
  },
  {
    id: 2,
    nombre: 'Camilo Camargo ⭐',
	puntos: 0,
    equipo: 'blanco',
    mvp: true,
  },
  {
    id: 3,
    nombre: 'Keny Quemba ⭐',
    puntos: 9,
    equipo: 'blanco',
    mvp: true,
  },
  {
    id: 4,
    nombre: 'Andrés Zapata',
    puntos: 6,
    equipo: 'blanco',
    mvp: false,
  },
  {
    id: 5,
    nombre: 'Juan David',
    puntos: 6,
    equipo: 'blanco',
    mvp: false,
  },
  {
    id: 6,
    nombre: 'Alexander Rodriguez',
    puntos: 6,
    equipo: 'blanco',
    mvp: false,
  },
  {
    id: 7,
    nombre: 'Alejandro Colmenares ⭐',
    puntos: 14,
    equipo: 'blanco',
    mvp: true,
  },
  {
    id: 8,
    nombre: 'Brayan Rivero',
    puntos: 0,
    equipo: 'blanco',
    mvp: false,
  },
  {
    id: 9,
    nombre: 'Wilson Fierro',
    puntos: 9,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 10,
    nombre: 'Walter Gomez',
    puntos: 0,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 11,
    nombre: 'Jhon Guzman',
    puntos: 9,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 12,
    nombre: 'Jeisson Linares',
    puntos: 9,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 13,
    nombre: 'Freddy',
    puntos: 6,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 14,
    nombre: 'Andrés Gómez',
    puntos: 9,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 15,
    nombre: 'Alex Quiroga',
    puntos: 6,
    equipo: 'negro',
    mvp: false,
  },
  {
    id: 16,
    nombre: 'Kevin Gómez',
    puntos: 0,
    equipo: 'negro',
    mvp: false,
  },
]
