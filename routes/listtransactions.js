
// ./routes/listtransactions.js
// List transactions that are not on blocks
// * Imports
const Transaction = require("../src/transaction");
function listtransactions(app) {

    // Lists all transactions

    app.get("/listtransactions", function (request, response) {

        // Creates response string

        let txStr = "";

        for (let i = 0; i < global.transactions.length; i++) {

            txStr += global.transactions[i].prettify();

        }

        // Sends response to generate new transaction

        response

            .status(200) // HTTP status code 200: OK

            .send(txStr); // Response message

    });

}

module.exports = listtransactions;