const Web3 = require("web3");
const Tx = require("ethereumjs-tx");

const Personal = require("web3-eth-personal");
const provider =
  "https://ropsten.infura.io/v3/a5a2a18dc23740d99120ed37f13b2af0";

// const provider = "http://localhost:8545";

// const provider = "http://localhost:8545";

const personal = new Personal(provider, null);

const web3 = new Web3(new Web3.providers.HttpProvider(provider));

module.exports = { web3, Tx, personal };
