function doPost(e) {
  try {
    // 1. Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    var weight = data.weight;
    
    // 2. Open the sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetById(0);
    
    // 3. Get current date formatted
    var date = new Date();
    var dateStr = Utilities.formatDate(date, "GMT+1", "yyyy-MM-dd HH:mm"); // Adjust GMT if needed
    
    // 4. Append row [Date, Weight]
    sheet.appendRow([dateStr, weight]);
    
    // 5. Return success
    return ContentService.createTextOutput(JSON.stringify({result: "success"}));
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({result: "error", message: error.message}));
  }
}
