# Weight Tracker API

A lightweight Google Apps Script (GAS) backend that acts as a bridge between an Android Widget and a Google Sheets document.

## Features
* **POST Endpoint:** Receives weight data in JSON format.
* **Auto-Timestamping:** Automatically logs the date and time of entry.
* **Sheet Integration:** Appends data to the first sheet of the linked spreadsheet.

## Setup Instructions
1.  Open your Google Sheet.
2.  Go to **Extensions > Apps Script**.
3.  Paste the contents of `code.gs` into the editor.
4.  Click **Deploy > New Deployment**.
5.  Select **Web app**.
    * **Execute as:** Me
    * **Who has access:** Anyone
6.  Copy the **Web App URL** (you will need this for the Android Widget configuration).

## API Contract
**Endpoint:** `YOUR_WEB_APP_URL`  
**Method:** `POST`  
**Payload:**
```json
{
  "weight": "85.5"
}
