var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var sizeCriteria = process.argv[2];
mongo.connect(url, function(err, db) {
    var prices = db.collection('prices');
    prices.aggregate([{
            $match: { size: sizeCriteria }
        },
        { $group: { _id: null, Average: { $avg: "$price" } } }
    ], (error, result) => {
        if (err) throw err;
        console.log(Number(result[0].Average).toFixed(2));

        db.close();
    });


})