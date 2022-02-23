// ./index.js
// * Imports
const express = require("express"); // Imports Express's class definition
const morgan = require("morgan"); // Imports Morgan's class definition

// Initialize express class object
const app = express();
// Express uses Morgan for logging requests
app.use(morgan("dev")); // Pretty-print requests with the "dev" format

// Create port number (changed to 8081)
const port = 8081;

// Load routes from ./routes

require("./routes")(app);

// Import from class modules

const Blockchain = require("./src/blockchain");

// Global variables

global.difficulty = 5; // Difficulty level

global.blockchain = new Blockchain(); // Our copy of the blockchain

global.transactions = []; // Our current transactions

// Server configuration
app.listen(port, () => {
    // Log that server is running
    console.log(`Server is listening at http://localhost:${port}/`);
});



