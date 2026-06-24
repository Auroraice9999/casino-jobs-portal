/****************************************************************************
 *  HIRING PORTAL — Google Apps Script backend
 *  This receives applications from your website, saves the resume file to
 *  YOUR Google Drive, and records all the form data in YOUR Google Sheet.
 *  100% free. No database needed.
 *
 *  ---> Fill in the 3 values below, then follow SETUP-GUIDE.md (Step 3 & 4).
 ****************************************************************************/

// (A) The ID of the Google Drive FOLDER where resumes will be saved.
//     From the folder URL: drive.google.com/drive/folders/THIS_LONG_ID
var FOLDER_ID = "PASTE_YOUR_DRIVE_FOLDER_ID_HERE";

// (B) The ID of the Google SHEET that stores candidate data.
//     From the sheet URL: docs.google.com/spreadsheets/d/THIS_LONG_ID/edit
var SHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";

// (C) A secret password for the admin page. Make up your own.
//     You will type the SAME password into admin.html.
var ADMIN_KEY = "change-this-password-123";


/* ====== Column titles for the sheet (edit order/labels if you wish) ====== */
var HEADERS = ["Timestamp","Full Name","Contact Number","Telegram ID","Email","Age","Location",
               "Experience","Applied Role(s)","Expected Salary","Self Introduction","Resume Link"];


/**
 * Runs when the website submits an application (a POST request).
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // 1) Save the resume file into your Drive folder
    var fileUrl = "";
    if (data.fileData && data.fileName) {
      var folder = DriveApp.getFolderById(FOLDER_ID);
      var bytes = Utilities.base64Decode(data.fileData);
      var cleanName = String(data.fullName || "candidate").replace(/[^a-zA-Z0-9 _-]/g, "");
      var safeName = cleanName + "_" + new Date().getTime() + "_" + data.fileName;
      var blob = Utilities.newBlob(bytes, data.fileType || "application/octet-stream", safeName);
      var file = folder.createFile(blob);
      fileUrl = file.getUrl();
    }

    // 2) Add a row to your Google Sheet
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }
    sheet.appendRow([
      new Date(),
      data.fullName || "",
      "'" + (data.contact || ""),          // leading ' keeps phone numbers as text
      data.telegram || "",
      data.email || "",
      data.age || "",
      data.location || "",
      data.experience || "",
      (data.roles || []).join(", "),
      data.salary || "",
      data.intro || "",
      fileUrl
    ]);

    return json({ result: "success", fileUrl: fileUrl });

  } catch (err) {
    return json({ result: "error", message: String(err) });
  }
}


/**
 * Runs when the admin page asks for the list of candidates (a GET request).
 * Only returns data if the correct password (key) is provided.
 */
function doGet(e) {
  try {
    var p = (e && e.parameter) ? e.parameter : {};
    if (p.action === "list" && p.key === ADMIN_KEY) {
      var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
      var rows = sheet.getLastRow() > 0 ? sheet.getDataRange().getValues() : [HEADERS];
      return json({ result: "success", rows: rows });
    }
    if (p.action === "list") {
      return json({ result: "error", message: "Wrong password." });
    }
    return ContentService.createTextOutput("Hiring portal endpoint is live.");
  } catch (err) {
    return json({ result: "error", message: String(err) });
  }
}


/* Helper: return data as JSON */
function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
