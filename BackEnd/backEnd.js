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

app.get("/", (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("regalmojo");
    let user = dbo
      .collection("signedInData")
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        res.send(result);
      });
  });
});

app.post("/addMember", (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("regalmojo");
    let user = dbo
      .collection("signedInData")
      .insertOne(req.body, (err, res) => {
        if (err) throw err;
        else if (req.body == "") {
          console.log("Invalid data");
        } else console.log("Inserted Successfully");
      });
  });
});

app.put("/passwordChange", (req, res) => {
  console.log(req.body);
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("regalmojo");
    var myId = { email: req.body.email };
    let dataUpdate = { $set: { password: req.body.password } };
    dbo.collection("signedInData").updateOne(myId, dataUpdate, (err, res) => {
      if (err) throw err;
      else if (req.body == "") {
        console.log("Invalid data");
      } else {
        console.log("updated Successfully");
        console.log(myId);
      }
    });
  });
});
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`connected to the server ${port}`));
