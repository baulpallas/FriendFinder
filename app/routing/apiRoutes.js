const express = require("express");
const app = express();
var path = require("path");

const db = require("../data/friends.js").db;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/results", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/results.html"));
});

app.get("/api/friends", (req, res) => {
  res.json(db);
});

app.post("/api/friends", (req, res) => {
  console.log("POST /api/friends", req.body);
  let message;
  console.log(req.body);
  db.push(req.body);
  message = `Thanks for joining our dating app!`;
  res.status(201).json({ message });
});

app.listen(3000);
