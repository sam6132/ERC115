const { web3, Tx } = require("../helper/web3");

const {
  sendSignedTransactionsForContracts,
  sendSignedTransactionsForMethods
} = require("../helper/sendSignedTransaction");

const BigNumber = require("bignumber.js");

const { abi, address, byte_code } = require("../contract/erc1155");
const contractInstance = new web3.eth.Contract(abi);

const qs = require("querystring");
const http = require("http");

module.exports.getBalance = async (req, res) => {
  const token_id = req.query.token_id;
  const owner_address = req.query.address;

  if (!owner_address || !token_id)
    return res.send({
      status: "failed",
      message: "insufficent data"
    });
  let contract = new web3.eth.Contract(abi, address);

  contract.methods.balanceOf(owner_address, token_id).call((err, result) => {
    if (err) return res.send({ status: "failed", message: err.message });

    res.send({
      status: "success",
      balanace: result
    });
  });
};

module.exports.transfer = async (req, res) => {
  try {
    const token_id = req.query.token_id;

    const senderAddress = req.body.senderAddress;
    const senderPassword = req.body.senderPassword;
    const toAddress = req.body.toAddress;
    let amount = req.body.amount;

    if (!token_id || !senderAddress || !senderPassword || !toAddress || !amount)
      return res.send({
        status: "failed",
        message: "insufficent data"
      });

    amount = amount;

    let contract = new web3.eth.Contract(abi, address);

    let transfer = contract.methods.safeTransferFrom(
      senderAddress,
      toAddress,
      token_id,
      amount,
      ""
    );
    let transferABI = transfer.encodeABI();

    const data = await sendSignedTransactionsForContracts(
      transferABI,
      address,
      senderAddress,
      senderPassword,
      res
    );

    res.send({
      status: "success",
      message: "Transaction Successfull"
    });
  } catch (err) {
    res.send({ status: "failed", message: err.message });
  }
};

module.exports.create = async (req, res) => {
  try {
    let uriData = JSON.parse(req.body.jsonGenerator);
    uriData.image = `images/uploads/${req.file.filename}`;
    const json_gen_str = JSON.stringify(uriData);

    const json_gen = { json_source: json_gen_str, json_string: json_gen_str };

    var options = {
      method: "POST",
      hostname: "www.json-generator.com",
      port: null,
      path: "/api/json/save",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
        "postman-token": "b4b264ae-8316-2acb-6819-3d86dcd4f1bb"
      }
    };

    var reqGen = http.request(options, function(resGen) {
      var chunks = [];

      resGen.on("data", function(chunk) {
        chunks.push(chunk);
      });

      resGen.on("end", async function() {
        var body = Buffer.concat(chunks);

        const resJson = JSON.parse(body.toString());

        const uri = resJson.url;

        const senderAddress = req.body.senderAddress;
        const senderPassword = req.body.senderPassword;

        if (!uri || !senderAddress || !senderPassword)
          return res.send({
            status: "failed",
            message: "insufficent data"
          });

        let contract = new web3.eth.Contract(abi, address);

        let transfer = contract.methods.create(uri, false);
        let transferABI = transfer.encodeABI();

        const txHash = await sendSignedTransactionsForContracts(
          transferABI,
          address,
          senderAddress,
          senderPassword,
          res
        );

        res.send({
          status: "success",
          txHash,
          uri
        });
      });
    });

    reqGen.write(qs.stringify({ ...json_gen }));
    reqGen.end();
  } catch (err) {
    res.send({ status: "failed", message: err.message });
  }
};

module.exports.mint = async (req, res) => {
  try {
    const type = req.query.type;

    const senderAddress = req.body.senderAddress;
    const senderPassword = req.body.senderPassword;

    const toAddress = req.body.toAddress;

    if (!senderAddress || !senderPassword || !toAddress || !type)
      return res.send({
        status: "failed",
        message: "insufficent data"
      });

    let contract = new web3.eth.Contract(abi, address);

    let transfer = contract.methods.mintNonFungible(type, toAddress);
    let transferABI = transfer.encodeABI();

    const data = await sendSignedTransactionsForMethods(
      transferABI,
      address,
      senderAddress,
      senderPassword,
      res
    );

    res.send({
      status: "success",
      data
    });
  } catch (err) {
    res.send({ status: "failed", message: err.message });
  }
};
