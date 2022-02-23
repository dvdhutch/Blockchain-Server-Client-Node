// ./routes/brew.js

function brew(app) {
    // We're brewing coffee!
    app.get("/brew", function (request, response) {
        // brew response
        response
            .status(418) // HTTP status code 418
            .send("I'm a teapot, so I cannot brew coffee!"); // Response
    });
}

module.exports = brew;