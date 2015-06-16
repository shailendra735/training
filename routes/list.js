var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {


	var client = require('mongodb').MongoClient;
	var url = 'mongodb://localhost:27017/mycol';
	client.connect(url, function(err, db) {
		if (err == null) {
			console.log("connected correctly to mongodb");
			collection = db.collection('mycol');
			collection.find().toArray(function(e, docs) {
				res.locals.employees = docs;
				res.render('list');
			});
		}
	});
});



module.exports = router;