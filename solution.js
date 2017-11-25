var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
var age = process.argv[2]

mongo.connect(url, function(err, db) {
    // db gives access to the database
    if (err) throw err
    var collection = db.collection('parrots')
    collection.count({
        age: {
            $gt: +age
        }
    }, (err, count) => {
        if (err) throw err
        console.log(count)
        db.close()
    })
})