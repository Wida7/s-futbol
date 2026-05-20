import { getGoogleSheet } from "@/lib/db/googleSheets";

export async function getSheetData(range: string) {
	const sheets = await getGoogleSheet();

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.ENV_GOOGLE_SHEET_ID,
		range,
	});

	return response.data.values || [];
}