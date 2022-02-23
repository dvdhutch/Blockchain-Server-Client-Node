// ./routes/mine.js
// * Mines a new block and adds to personal chain

function mine(app) {

    app.get("/mine", (request, response) => {

        // Add block to personal chain

        global.blockchain.addBlock();



        // Clears transactions

        global.transactions = [];



        // Sends response OK

        let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;

        response.status(200).send(msg);

    });

}

module.exports = mine;