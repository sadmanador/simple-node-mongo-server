const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const person = [
  {id:1, name: "Tasnuva", email: "tas@gmail.com" },
  {id:2, name: "esha", email: "esh@gmail.com" },
  {id:3, name: "farhana", email: "far@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("user server is running");
});

app.get('/users', (req, res) => {
res.send(person)
});

app.listen(port, () => {
  console.log(`listening port 5000`);
});
