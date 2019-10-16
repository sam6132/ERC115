const express = require("express");
const router = express.Router();
const erc1155ctrl = require("../controllers/erc1155.controller");

const path = require("path");

router.get("/getbalance", erc1155ctrl.getBalance);

router.post("/create", erc1155ctrl.create);
router.post("/mint", erc1155ctrl.mint);

module.exports = router;
