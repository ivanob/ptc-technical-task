const config = require('config')
var MongoClient = require('mongodb').MongoClient;
var url = config.get('mongo.url')
var coll = config.get('mongo.coll')

const storeTaskPerform = taskObj => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw errs
    db.collection(coll).insertOne(taskObj, function(err, res) {
      if (err) throw err
      console.log("1 record inserted")
      db.close();
    });
  });
}

const getTaskPerform = id => {
  return MongoClient.connect(url).then(function(db) {
      var collection = db.collection(coll);
      var query = { id: id }
      return collection.find(query).toArray();
    }).then(function(items) {
      if(items.length != 0){
        var newObj = items.reduce((a, b) => {return {id: id, duration:a.duration + b.duration}})
        newObj.duration /= items.length
        return newObj;
      }
  });
}

module.exports = {
  storeTaskPerform: data => storeTaskPerform(data),
  getTaskPerform: id => getTaskPerform(id)
}
