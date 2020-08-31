const creds = require('./client_secret.json');
const spreadsheets = require('./spreadsheets.json').spreadsheets;
const { GoogleSpreadsheet } = require('google-spreadsheet');


async function accessSpreadsheet() {

    const doc = new GoogleSpreadsheet(spreadsheets[0]);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    // console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);


}

accessSpreadsheet();


