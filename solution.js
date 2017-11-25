var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"+process.argv[2]

mongo.connect(url, function(err, db) {
    // db gives access to the database
    if (err) throw err
    var collection = db.collection(process.argv[3])
    collection.remove({
        _id: process.argv[4]
    }, (err) => {
        if (err) throw err
        db.close()
    })
})