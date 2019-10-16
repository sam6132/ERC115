const express = require("express");
const router = express.Router();
const { web3, Tx } = require("../helper/web3");

const { address, abi } = require("../contract/gold");

router.get("/createAddressWithPrivateKey", (req, res) => {
  web3.eth.accounts.create().then(account => {
    console.log(account);
    res.send(account);
  });
});

router.get("/createaccount", (req, res) => {
  web3.eth.personal.newAccount(req.query.password).then(account => {
    res.send(account);
  });
});

router.get("/getrecipt", (req, res) => {
  const txHash = req.query.txHash;

  if (!txHash) {
    return res.send("Insufficent data");
  }

  //   console.log(txHash);
  let getTransaction = setInterval(async () => {
    const result = await web3.eth.getTransactionReceipt(txHash);

    if (result) {
      clearInterval(getTransaction);
      return res.send({
        status: "success",
        contract_address: result.contractAddress
      });
    }
  }, 2000);
});

router.get("/getblock", (req, res) => {
  web3.eth
    .getBlockNumber()
    .then(blockNumber => {
      return res.json({ blockNumber: blockNumber });
    })
    .catch(err => {
      return res.json({ error: err.message });
    });
});

router.get("/tokendetail", (req, res) => {
  let contractInstance = new web3.eth.Contract(abi, address);

  var data = {};
  contractInstance.methods
    .name()
    .call({ from: "0x450d87bddD609537aADFC6761Eb96BeB8E5E7C10", gas: 0x47b760 })
    .then(name => {
      data["name"] = name;
      return contractInstance.methods.symbol().call({
        from: "0x450d87bddD609537aADFC6761Eb96BeB8E5E7C10",
        gas: 0x47b760
      });
    })
    .then(symbol => {
      data["symbol"] = symbol;
      return contractInstance.methods.decimals().call({
        from: "0x450d87bddD609537aADFC6761Eb96BeB8E5E7C10",
        gas: 0x47b760
      });
    })
    .then(decimals => {
      data["decimals"] = decimals;
      return contractInstance.methods.totalSupply().call();
    })
    .then(totalSupply => {
      data["totalSupply"] = totalSupply.toString() / 10 ** data["decimals"];
      Object.assign(data, { status: "success" });
      res.json(data);
    })
    .catch(error => {
      console.log(error);
      res.json({ error: error, status: "failed" });
    });
});

module.exports = router;
