// ./src/transaction.js
// Class definition for single transaction
// Generate random IPv4 address string as a mock address

function generateRandomIPv4() {

    let ipv4 = "";

    // Create network

    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";

    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";

    // Create host

    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";

    ipv4 += Math.floor(Math.random() * 255) + 1;

    return ipv4;

}

// Generate random amount of money

function generateRandomMoney() {

    return Math.floor(Math.random() * 1000000);

}

class Transaction {

    constructor(fromAddress = "", toAddress = "", amount = 0) {

        this.fromAddress = generateRandomIPv4();

        this.toAddress = generateRandomIPv4();

        this.amount = generateRandomMoney();

    }

    // Prints transaction

    prettify() {

        let txStr = `<div>Host <i>${this.fromAddress}</i> sent <i>${this.toAddress}</i> \$${this.amount}.</div>`;

        return txStr;

    }

}

// Export object

module.exports = Transaction;