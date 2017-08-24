var mongo = require('mongodb').MongoClient;
var databaseName = process.argv[2];
var baseURL = "mongodb://localhost:27017/";
mongo.connect(baseURL + databaseName, function(err, db) {
    var users = db.collection('users');
    users.update({ username: "tinatime" }, { $set: { age: 40 } }, { multi: false }, function(err, n, obj) {});
    db.close();
});