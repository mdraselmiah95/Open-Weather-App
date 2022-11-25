const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

app.use(express.static("public"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("App is Running on PORT" + " " + PORT);
  mongoose.connect(
    `mongodb+srv://weatherApp:<1234567890>@cluster0.4kpgg9t.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true },
    () => {
      console.log("Database Connected");
    }
  );
});
