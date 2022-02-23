// ./src/blockchain.js
// Class definition for blockchain
// * Imports

const Block = require("./block"); // Class definition for block

class Blockchain {

    constructor() {

        this.chain = [new Block(Array(65).join("0"))]; // Create genesis block

    }

    // Returns the last block in the chain

    getLastBlock() {

        return this.chain[this.chain.length - 1];

    }

    // Returns length of our chain

    getChainLength() {

        return this.chain.length;

    }

    // Adds new block to the chain

    addBlock() {

        // Mines new block using previous hash

        let newBlock = new Block(this.getLastBlock().hash, global.transactions);

        // Creates new immutable block

        this.chain.push(Object.freeze(newBlock));

    }

    // Validates the chain

    isChainValid(blockchain = this) {

        // Iterate chain, skips Genesis block

        for (let i = 1; i < blockchain.chain.length; i++) {

            const currentBlock = blockchain.chain[i];

            const prevBlock = blockchain.chain[i - 1];

            // Validate hash from previous

            if (

                // Checks hash

                currentBlock.hash !== currentBlock.getHash() ||

                // Check prevHash matches

                prevBlock.hash !== currentBlock.prevHash

            ) {

                return false;

            }

            // Check hash validity

            let checkString = Array(global.difficulty + 1).join("0");

            if (!currentBlock.hash.startsWith(checkString)) {

                return false;

            }

        }

        //  chain is valid

        return true;

    }

    // Updates chain with new blockchain

    replaceChain(newChain) {

        // Checks length of new chain

        if (newChain.length <= this.chain.length) return;

        // Checks validity of new chain

        if (!this.isChainValid(newChain)) return;

        // Replaces our chain

        this.chain = newChain;

    }

    // Returns a string representation of the blockchain

    prettify() {

        let chainStr = "";

        for (let i = 0; i < this.chain.length; i++) {

            chainStr += this.chain[i].prettify();

            chainStr += "<br><hr>";

        }
        return chainStr;

    }

}

// Export object

module.exports = Blockchain;