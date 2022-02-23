// ./src/block.js
// Class definition of single block
// * Imports

const crypto = require("crypto");

// Defines SHA 256 hashfunction

function SHA256(message) {

    return crypto

        .createHash("sha256") // Creates hashing algorithm of SHA256

        .update(message) // Updates hash with message

        .digest("hex"); // Returns hash as hexadecimal string

}

class Block {

    constructor(prevHash = "", transactions = []) {

        this.timestamp = Date.now(); // Timestamp to now
        this.transactions = transactions; // Transaction list
        this.hash = this.getHash(); // Current block's hash
        this.prevHash = prevHash; // Previous block's hash
        this.nonce = 0; // Random value

        // Mines block

        this.mine();

    }

    // Returns hash of current block

    getHash() {

        // Combines all transctions

        let txStr = "";

        for (let i = 0; i < this.transactions.length; i++) {

            txStr += JSON.stringify(this.transactions[i]);

        }

        // Hash together

        return SHA256(

            this.prevHash + // Previous hash

                this.timestamp + // Block's timestamp

                txStr + // All transactions

                this.nonce // Random nonce

        );

    }

    // Generate working hash

    mine() {

        // Loop hash

        //  Length set from difficulty (default: 1)

        let checkString = Array(global.difficulty + 1).join("0");

        let tries = 0;

        while (!this.hash.startsWith(checkString)) {

            // Increases nonce

            this.nonce++;

            // Recomputes hash

            this.hash = this.getHash();

            // Count tries

            tries++;

        }


        // Check number of tries

        console.log(`Block mined with ${tries} attempts. Hash: ${this.hash}`);

    }

    // Print block

    prettify() {

        // Block parameters

        let blockStr = `<div><b>Block</b> #${this.hash}</div>`;

        blockStr += `<div><b>Timestamp:</b> ${this.timestamp}</div>`;

        blockStr += `<div><b>Previous Hash:</b> ${this.prevHash}</div>`;

        blockStr += "<div><b>Transactions:</b></div><div>";

        // Iterate through transactions

        for (let i = 0; i < this.transactions.length; i++) {

            blockStr += "    " + this.transactions[i].prettify();

        }

        blockStr += "</div>";

        return blockStr;

    }

}

// Export object

module.exports = Block;