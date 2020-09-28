let express = require("express");
let app = express();
const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");
const url = "mongodb://localhost:27017/book-an-appoinment";
var cors = require("cors");
var bodyParser = require("body-parser");
var ObjectID = require("mongodb").ObjectID;
app.use(bodyParser());
app.use(cors());

app.post("/addMember", (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("regalmojo");
    let emp = dbo.collection("signedInData").insertOne(req.body, (err, res) => {
      if (err) throw err;
      else if (req.body == "") {
        console.log("Invalid data");
      } else console.log("Inserted Successfully");
    });
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`connected to the server ${port}`));
