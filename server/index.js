const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
require("./db/connect");
const quiz = require("./routes/quiz");
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || 3000;
const host = process.env.HOST;

app.use(function (req, res, next) {
  console.log("api: " + req.originalUrl);
  next();
});

app.use("/quiz", quiz.routes);
app.get("/", (req, res) => {
  res.json("Server is running");
});

server = app.listen(port, host, () => {
  console.log("Running Server at http://" + host + ":" + port);
});
module.exports = app;
