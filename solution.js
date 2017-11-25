var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
var firstName = process.argv[2]
var lastName = process.argv[3]
var user = {
  firstName: firstName
, lastName: lastName
}

mongo.connect(url, function(err, db) {
    // db gives access to the database
    if (err) throw err
    var users = db.collection('docs')
    users.insert(user, (err, data) => {
        if (err) throw err
        console.log(JSON.stringify(user))
        db.close()
    })
})