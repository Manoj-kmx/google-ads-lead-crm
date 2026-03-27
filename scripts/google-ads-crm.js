function fetchGoogleAdsLeads() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");

  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Leads");
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Date",
      "Campaign",
      "Clicks",
      "Conversions",
      "Cost",
      "Status",
      "Notes"
    ]);
  }

  var query = `
    SELECT
      segments.date,
      campaign.name,
      metrics.clicks,
      metrics.conversions,
      metrics.cost_micros
    FROM campaign
    WHERE segments.date DURING LAST_7_DAYS
  `;

  var report = AdsApp.report(query);
  var rows = report.rows();

  while (rows.hasNext()) {
    var row = rows.next();

    var cost = row["metrics.cost_micros"] / 1000000;

    sheet.appendRow([
      row["segments.date"],
      row["campaign.name"],
      row["metrics.clicks"],
      row["metrics.conversions"],
      cost,
      "New",
      ""
    ]);
  }
}

function updateLeadStatus(rowNumber, status) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
  sheet.getRange(rowNumber, 6).setValue(status);
}
