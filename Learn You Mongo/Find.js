var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var ageCriteria = parseInt(process.argv[2]);
mongo.connect(url, function(err, db) {
    var parrots = db.collection('parrots');
    parrots.find({ 'age': { '$gt': +ageCriteria } }).toArray(function(err, docs) {
        //docs.forEach(doc => console.log(doc) );
        console.log(docs);
        db.close();
    })
})