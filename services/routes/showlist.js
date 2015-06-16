var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var MongoClient = require('mongodb').MongoClient;
	MongoClient.connect('mongodb://localhost:27017/product', function(err, db) {
		if (err) {
			console.log('Connection Error');
		}
		db.collection('products').find().toArray(function(err, data) {
			if (err) {
				console.log('Data Retrieval Failed');
			}
			res.locals.products = data;
			res.render('showlist', {
				title: 'Data Fetched'
			});
		});
	});

});
module.exports = router;