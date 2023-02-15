const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');

//middleware
app.use(cors());
app.use(express.json());

//server credential
//user: sadmanAdor
//password: 35BFKXAJcX24x8P9

const users = [
  { id: 1, name: "Tasnuva", email: "tas@gmail.com" },
  { id: 2, name: "esha", email: "esh@gmail.com" },
  { id: 3, name: "farhana", email: "far@gmail.com" },
];



const uri = "mongodb+srv://sadmanAdor:35BFKXAJcX24x8P9@cluster0.9mathic.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  console.log("database connected")
  const collection = client.db("simple-node-mongo-sever").collection("users");
  // perform actions on the collection object
  client.close();
});


app.get("/", (req, res) => {
  res.send("user server is running");
});

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name;
    const filtered = users.filter(user => user.name.match(search));
    res.send(filtered);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  console.log("post api called");
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  console.log(user);
  res.send(user);
});

app.listen(port, () => {
  console.log(`listening port 5000`);
});
