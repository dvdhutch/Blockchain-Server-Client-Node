// ./routes/index.js
// Load Route files
// * Imports
const fs = require("fs"); 
function dynamicallyLoadRoutes(app) {
    // Read filenames
    fs.readdirSync(__dirname).forEach(function (file) {
        //  Skips non-JS files
        if (
            file === "index.js" ||
            file.substr(file.lastIndexOf(".") + 1) !== "js"
        )
            return;

        // Obtain filename
        let name = file.substr(0, file.indexOf("."));
        // Send routes file to export
        require("./" + name)(app);
    });
}

// Exports function
module.exports = dynamicallyLoadRoutes;