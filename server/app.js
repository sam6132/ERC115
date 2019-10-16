const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const erc1155 = require("./src/routes/erc1155");
const index = require("./src/routes/index");
const app = express();

const path = require("path");
app.use(express.json());
app.use(helmet());
app.use(cors());

const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public", "images", "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getMilliseconds().toString() + "-" + file.originalname);
  }
});

var upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", index);
app.use("/api/erc1155", upload.single("image"), erc1155);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
