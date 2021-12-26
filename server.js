const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./DBConnection.js")();
app.use(cors());
app.listen(process.env.PORT, () =>
  console.log("Client backend started successfully")
);
