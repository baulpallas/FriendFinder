const express = require("express");
const app = express();
var path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var db = [
  {
    name: "Mikey",
    birthday: "07/04/1995",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  }
];

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
