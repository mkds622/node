var mongo = require('mongodb').MongoClient

var first = process.argv[2]
var last = process.argv[3]
var doc = { firstName: first 
    , lastName: last
}
console.log("ttt")
var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err,db){
    console.log(JSON.stringify("connected"));
    if(err) throw err;
    var collection = db.collection('docs');

    
    collection.insert(doc,function(err,data){
        if(err) throw err;
        console.log(JSON.stringify(doc));
        db.close();
    });
    
})

// var mongo = require('mongodb').MongoClient

// var firstName = process.argv[2]
// var lastName = process.argv[3]
// var doc = {
//   firstName: firstName
// , lastName: lastName
// }

// var url = 'mongodb://localhost:27017/learnyoumongo'
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var collection = db.collection('docs')
//   collection.insert(doc, function(err, data) {
//     if (err) throw err
//     console.log(JSON.stringify(doc))
//     db.close()
//   })
// })