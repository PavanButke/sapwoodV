let express = require("express");
// let data = require("./data.json");
let server = express();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://PavanButke:Pavan@1234@cluster0.nzbmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

server.get("/movies", function (req, res) {
  res.json(data);
});

server.get("/genre", function (req, res) {
  let allGenreObjects = data.map(function (el) {
    return el.genre;
  });
  res.json();
});

server.listen(4000);