var mongo = require('mongodb').MongoClient;
var dbName = process.argv[2];
var collectionName = process.argv[3];
var documentID = process.argv[4];
var baseURL = "mongodb://localhost:27017/";
mongo.connect(baseURL + dbName, function(err, db) {
    if (err) throw err
    var collection = db.collection(collectionName);
    collection.remove({
        _id: documentID
    }, (err, result) => {
        if (err) throw err
        console.log(result)
    });
    db.close();
})