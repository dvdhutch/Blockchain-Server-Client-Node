// ./routes/newtransaction.js
// Creates faux transaction
// * Imports

const Transaction = require("../src/transaction");

function newtransaction(app) {

    // Creates new transaction

    app.get("/newtransaction", function (request, response) {

        // Creates new Transaction object

        let tx = new Transaction();

        // Add Transaction to global transactions

        global.transactions.push(tx);

        // Sends response OK

        response

            .status(200) // HTTP status code 200: OK

            .send(tx.prettify()); // Response message

    });

}

module.exports = newtransaction;