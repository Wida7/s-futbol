export interface Score {
	posicion: number
	nombre: string
	puntos: number
}

export const scoresRepository = {
	async getAll(): Promise<Score[]> {
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
		const response = await fetch(
			`${baseUrl}/api/scores`,
			{
				cache: 'no-store',
			}
		)

		const dataFromApi = await response.json()

		if (!Array.isArray(dataFromApi)) {
			return []
		}

		const data = dataFromApi
			.map((item: any) => {
				return {
					nombre: item.nombre || '',
					puntos: Number(item.puntos) || 0,
				}
			})
			.sort((a, b) => b.puntos - a.puntos)
			.map((player, index) => ({
				...player,
				posicion: index + 1,
			}))

		return data
	},
}