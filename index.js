function doPost(e) {
	try {
		// 1. Parse the incoming data
		const data = JSON.parse(e.postData.contents);
		const weight = data.weight;

		// 2. Open the sheet
		const ss = SpreadsheetApp.getActiveSpreadsheet();
		const sheet = ss.getSheetById(0);

		// 3. Get current date formatted
		const date = new Date();
		const dateStr = Utilities.formatDate(date, "GMT+1", "yyyy-MM-dd");

		// 4. Append row [Date, Weight]
		sheet.appendRow([dateStr, weight]);

		// 5. Return success
		return ContentService.createTextOutput(
			JSON.stringify({ result: "success" })
		);
	} catch (error) {
		return ContentService.createTextOutput(
			JSON.stringify({ result: "error", message: error.message })
		);
	}
}
