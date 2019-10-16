const express = require("express");
const router = express.Router();

const {
  deploy,
  getBalance,
  getAllowance,
  transfer,
  getTotalSupply,
  approve,
  transferFrom,
  setScript,
  getScript
} = require("../controllers/erc20.controller");

// router.post("/deploy", (req, res) => deploy(req, res));

router.get("/getbalance", (req, res) => getBalance(req, res));
router.get("/allowance", (req, res) => getAllowance(req, res));
router.get("/totalsupply", (req, res) => getTotalSupply(req, res));
router.get("/getscript", (req, res) => getScript(req, res));

router.post("/transfer", (req, res) => transfer(req, res));
router.post("/transferfrom", (req, res) => transferFrom(req, res));
router.post("/approve", (req, res) => approve(req, res));
router.post("/setscript", (req, res) => setScript(req, res));

module.exports = router;
