var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
mongo.connect(url, function(err, db) {
    // db gives access to the database
    if (err) throw err
    var parrots = db.collection('parrots')
    parrots.find({
    age: {
      $gt: +process.argv[2]
    }
}).toArray(function(err, documents) {
    if (err) throw err
    console.log(documents)
    db.close()
    })
})