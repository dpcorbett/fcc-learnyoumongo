var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"+process.argv[2]

mongo.connect(url, function(err, db) {
    // db gives access to the database
    if (err) throw err
    var users = db.collection('users')
    users.update({
        username: "tinatime"
        }, {
            $set: {
                age: 40
            }
        }, (err) => {
            if (err) throw err
            db.close()
        })
})