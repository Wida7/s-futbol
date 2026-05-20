import { google } from "googleapis";
import { JWT } from "google-auth-library";

export async function getGoogleSheet() {
	const auth = new JWT({
		email: process.env.ENV_GOOGLE_CLIENT_EMAIL,
		key: process.env.ENV_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
		scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
	});

	return google.sheets({
		version: "v4",
		auth,
	});
}