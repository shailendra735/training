var MongoClient = require('mongodb').MongoClient;
var db = MongoClient.connect('mongodb://localhost:1267/product', function(err, db) {
	if (!err) {
		console.log('We are connected now.')
	}
	return db;
});
module.exports = db;