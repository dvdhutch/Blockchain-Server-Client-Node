// ./routes/validate.js
// Validates blockchain

function validate(app) {

    // Validates instance of blockchain

    app.get("/validate", function (request, response) {

        // Checks if blockchain is valid

        let isValid = global.blockchain.isChainValid();

        // Response message OK

        let responseStr = "";

        if (isValid) {

            responseStr = "The blockchain is valid!";

        } else {

            responseStr = "The blockchain is invalid!";

        }

        // Sends response from validating blockchain

        response

            .status(200) // HTTP status code 200: OK

            .send(responseStr); // Response message

    });

}

module.exports = validate;