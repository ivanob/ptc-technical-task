var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

const storeTaskPerform = taskObj => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw errs
    db.collection("tasks").insertOne(taskObj, function(err, res) {
      if (err) throw err
      console.log("1 record inserted")
      db.close();
    });
  });
}

const getTaskPerform = id => {
  return MongoClient.connect(url).then(function(db) {
      var collection = db.collection('tasks');
      var query = { id: id }
      return collection.find(query).toArray();
    }).then(function(items) {
      var newObj = items.reduce((a, b) => {return {id: id, duration:a.duration + b.duration}})
      newObj.duration /= items.length
      return newObj;
  });
}

module.exports = {
  storeTaskPerform: data => storeTaskPerform(data),
  getTaskPerform: id => getTaskPerform(id)
}
