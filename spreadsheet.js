const creds = require('./client_secret.json');
const { spreadsheets } = require('./spreadsheets.json');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { format } = require('date-fns');



exports.accessSpreadsheet = async function (amount, comment, form) {

    const doc = new GoogleSpreadsheet(spreadsheets[0]);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    // console.log(sheet);
    // console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);
    const larryRow = await sheet.addRow({ Fecha: format(new Date(), 'MM/dd/yyyy'), Monto: amount, Comentario: comment, Forma: form });
    // const larryRow = await sheet.addRow({ Fecha: Date() esto no lo pudo adjuntar porque no era el mismo header de la columna, Spread: '$200', Sheet: 'mensaje de prueba', Append: 80 });

    return "row created";
}


