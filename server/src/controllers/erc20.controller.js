const { web3, Tx } = require("../helper/web3");

const {
  sendSignedTransactionsForContracts,
  sendSignedTransactionsForMethods
} = require("../helper/sendSignedTransaction");

const BigNumber = require("bignumber.js");

const { abi, address, byte_code } = require("../contract/gold");
const contractInstance = new web3.eth.Contract(abi);

const decimals = 18;

async function deploy(req, res) {
  console.log(req.body);
  let _name = req.body.name;
  let _symbol = req.body.symbol;
  let _decimals = req.body.decimals;
  let totalSupply = req.body.totalSupply;

  if (!_name || !_symbol || !totalSupply || !_decimals) {
    return res.status(200).send({ message: "data insufficient" });
  }

  try {
    let contractData = contractInstance
      .deploy({
        data: byte_code,
        arguments: [_symbol, _name, _decimals, totalSupply]
      })
      .encodeABI();

    const result = await sendSignedTransactionsForContracts(
      contractData,
      req.body.senderAddress,
      req.body.senderPrivateKey
    );
    // console.log(result)
    res.send({
      status: "success",
      message: "Your ERC20 contract has been deployed successfully",
      contract_address: result
    });
  } catch (err) {
    // console.log("errr.....", err)
    res.send({
      status: "failed",
      message: err.message
    });
  }
}

async function getBalance(req, res) {
  const from_address = req.query.address;

  if (!from_address)
    return res.send({
      status: "failed",
      message: "insufficent data"
    });
  let contract = new web3.eth.Contract(abi, address);

  contract.methods.balanceOf(from_address).call((err, result) => {
    if (err) return res.send({ status: "failed", message: err.message });

    res.send({
      status: "success",
      balanace: result / 10 ** decimals
    });
  });
}

async function getAllowance(req, res) {
  const owner = req.query.owner;
  const spender = req.query.spender;

  if (!owner || !spender)
    return res.send({
      status: "failed",
      message: "insufficent data"
    });

  let contract = new web3.eth.Contract(abi, address);

  contract.methods
    .allowance(owner, spender)
    .call({ from: spender }, (err, result) => {
      if (err) return res.send({ status: "failed", message: err.message });

      res.send({
        status: "success",
        allowance: result / 10 ** decimals
      });
    });
}

async function getTotalSupply(req, res) {
  let contract = new web3.eth.Contract(abi, address);

  contract.methods.totalSupply().call(
    {
      from: "0xE62bAe6303bbb24326a95dB30c6428f552F8F2C2",
      gas: web3.utils.toHex(1000000),
      gasPrice: web3.utils.toHex(10000)
    },
    (err, result) => {
      if (err) return res.send({ status: "failed", message: err.message });
      res.send({
        status: "success",
        totalSupply: result / 10 ** decimals
      });
    }
  );
}

async function transfer(req, res) {
  try {
    const senderAddress = req.body.senderAddress;
    const senderPassword = req.body.senderPassword;
    const toAddress = req.body.toAddress;
    let amount = req.body.amount;

    if (!senderAddress || !senderPassword || !toAddress || !amount)
      return res.send({
        status: "failed",
        message: "insufficent data"
      });

    amount = amount;

    let contract = new web3.eth.Contract(abi, address);

    let transfer = contract.methods.transfer(toAddress, amount);
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
      message: "Transaction Successfull"
    });
  } catch (err) {
    res.send({ status: "failed", message: err.message });
  }
}

async function approve(req, res) {
  try {
    const senderAddress = req.body.senderAddress;
    const senderPassword = req.body.senderPassword;
    const toAddress = req.body.toAddress;
    let amount = req.body.amount;

    if (!senderAddress || !senderPassword || !toAddress || !amount)
      return res.send({
        status: "failed",
        message: "insufficent data"
      });

    amount = amount;

    let contract = new web3.eth.Contract(abi, address);

    let approve = contract.methods.approve(toAddress, amount);
    let approveABI = approve.encodeABI();

    const data = await sendSignedTransactionsForMethods(
      approveABI,
      address,
      senderAddress,
      senderPassword,
      res
    );

    res.send({
      status: "success",
      message: `${amount} is approved for ${toAddress}`
    });
  } catch (err) {
    res.send({ status: "failed", message: err.message });
  }
}

async function transferFrom(req, res) {
  try {
    const from = req.body.fromAddress;
    const to = req.body.toAddress;
    const senderAddress = req.body.senderAddress;
    const senderPassword = req.body.senderPassword;
    let amount = req.body.amount;

    if (!from || !to || !senderAddress || !senderPassword || !amount)
      return res.send({
        status: "failed",
        message: "insufficent data"
      });

    amount = amount * 10 ** decimals;

    let contract = new web3.eth.Contract(abi, address);

    let transferFrom = contract.methods.transferFrom(from, to, amount);
    let transferFromABI = transferFrom.encodeABI();

    const data = await sendSignedTransactionsForMethods(
      transferFromABI,
      address,
      senderAddress,
      senderPassword,
      res
    );

    res.send({
      status: "success",
      message: `${amount} is transfered for ${to} from ${from}`
    });
  } catch (err) {
    res.send({ status: "failed", message: err.message });
  }
}

async function setScript(req, res) {
  try {
    const id = req.body.id;
    const uri = req.body.script_uri;
    const senderAddress = req.body.senderAddress;
    const senderPassword = req.body.senderPassword;

    if (!id || !uri)
      return res.send({
        status: "failed",
        message: "insufficent data"
      });
    let contract = new web3.eth.Contract(abi, address);

    let setScript = contract.methods.setScript(id, uri);
    let setScriptABI = setScript.encodeABI();

    const data = await sendSignedTransactionsForMethods(
      setScriptABI,
      address,
      senderAddress,
      senderPassword,
      res
    );

    res.send({
      status: "success",
      message: `Script successfully added`
    });
  } catch (err) {
    res.send({ message: err.message });
  }
}

async function getScript(req, res) {
  const script_id = req.body.script_id;
  if (!script_id)
    return res.send({
      status: "failed",
      message: "insufficent data"
    });
  let contract = new web3.eth.Contract(abi, address);

  contract.methods.getScript(req.query.script_id).call((err, result) => {
    if (err) return res.send({ status: "failed", message: err.message });

    res.send({
      status: "success",
      uri: result
    });
  });
}

function longnumberstring(n) {
  var str,
    str2 = "",
    data = n
      .toExponential()
      .replace(".", "")
      .split(/e/i);
  (str = data[0]), (mag = Number(data[1]));
  if (mag >= 0 && str.length > mag) {
    mag += 1;
    return str.substring(0, mag) + "." + str.substring(mag);
  }
  if (mag < 0) {
    while (++mag) str2 += "0";
    return "0." + str2 + str;
  }
  mag = mag - str.length + 1;
  while (mag > str2.length) {
    str2 += "0";
  }
  return str + str2;
}

module.exports = {
  deploy,
  getBalance,
  getAllowance,
  transfer,
  getTotalSupply,
  approve,
  transferFrom,
  setScript,
  getScript
};
