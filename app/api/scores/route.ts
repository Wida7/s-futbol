import { NextResponse } from "next/server";
import { getGoogleSheet } from "@/lib/db/googleSheets";

export async function GET() {
	try {
		const sheets = await getGoogleSheet();

		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range: "scores!A1:Z1000",
		});

		const rows = response.data.values || [];

		if (!rows.length) {
			return NextResponse.json([]);
		}

		const headers = rows[0];

		const data = rows.slice(1).map((row) => {
			return headers.reduce((acc, header, index) => {
				acc[header] = row[index] || "";
				return acc;
			}, {} as Record<string, string>);
		});

		return NextResponse.json(data);
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{ error: "Error leyendo spreadsheet" },
			{ status: 500 }
		);
	}
}