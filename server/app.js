const express = require("express");
const helmet = require('helmet')

const gold = require("./src/routes/erc20");
const index = require("./src/routes/index");

const app = express();

app.use(express.json());
app.use(helmet())


app.use("/api", index);
app.use("/api/gold", gold);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
