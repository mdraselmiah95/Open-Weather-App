const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send(" <h1> Server is Running.</h1>");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("App is Running on PORT" + PORT);
});
