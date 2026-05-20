import { getGoogleSheet } from "@/lib/db/googleSheets";

export interface Score {
	posicion: number
	nombre: string
	puntos: number
}

export const scoresRepository = {
	async getAll(): Promise<Score[]> {
		try {
			const sheets = await getGoogleSheet();
			const response = await sheets.spreadsheets.values.get({
				spreadsheetId: process.env.ENV_GOOGLE_SHEET_ID,
				range: "scores!A1:Z1000",
			});

			const rows = response.data.values || [];
			if (!rows.length) return [];

			const headers = rows[0];
			const dataFromApi = rows.slice(1).map((row) => {
				return headers.reduce((acc, header, index) => {
					acc[header] = row[index] || "";
					return acc;
				}, {} as Record<string, string>);
			});

			const data = dataFromApi
				.map((item: any) => {
					return {
						nombre: item.nombre || '',
						puntos: Number(item.puntos) || 0,
						posicion: Number(item.posicion) || 0,
					}
				})

			return data;
		} catch (error) {
			console.error("Error fetching directly from Google Sheets:", error);
			return [];
		}
	},
}