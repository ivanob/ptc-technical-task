var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

const storeTaskPerform = taskObj => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("LLEGA AQUI")
    db.collection("tasks").insertOne(taskObj, function(err, res) {
      if (err) throw err;
      console.log("1 record inserted");
      db.close();
    });
  });
}

const getTaskPerform = id => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var query = { id: id };
    db.collection("tasks").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}

module.exports = {
  storeTaskPerform: data => storeTaskPerform(data),
  getTaskPerform: id => getTaskPerform(id)
}
