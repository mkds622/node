var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var ageCriteria = process.argv[2];
mongo.connect(url, function(err, db) {
    if(err) throw err;
    var parrots = db.collection('parrots');
    parrots.find({ 'age': { '$gt': +ageCriteria } },{ 'name':1, 'age' :1 , '_id' : 0}).toArray(function(err, docs) {
        //docs.forEach(doc => console.log(doc) );
        if(err) throw err;
        console.log(docs);
        db.close();
    })
})

