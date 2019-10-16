const Web3 = require("web3");
const Tx = require("ethereumjs-tx");

const Personal = require("web3-eth-personal");
// const provider = "https://ropsten.infura.io/v3/8fde3daff49e4e4ba9966b2d75bba65a"

const provider = "http://67.205.141.108:22000";

// const provider = "http://localhost:8545";

const personal = new Personal(provider, null);

const web3 = new Web3(new Web3.providers.HttpProvider(provider));

module.exports = { web3, Tx, personal };
