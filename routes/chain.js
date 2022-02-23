
// ./routes/chain.js
// Print blockchain

function chain(app) {
    // Print blockchain
    app.get("/chain", function (request, response) {

        // Response message

        let chainStr = global.blockchain.prettify();

        // Send response for printing Blockchain

        response

            .status(200) // HTTP status code 200: OK

            .send(chainStr); // Response message

    });

}

module.exports = chain;