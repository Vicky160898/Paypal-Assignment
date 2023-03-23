require("dotenv").config();
const express = require("express");
const app = express();
const connect = require("./config/db");
const PORT = process.env.PORT || 8080;
connect();
app.listen(PORT, () => {
  console.log("server started");
});
