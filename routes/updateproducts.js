var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
	var MongoClient = require('mongodb').MongoClient,
		objectID = require('mongodb').ObjectID;
	MongoClient.connect('mongodb://localhost:27017/product', function(err, db) {
		if (err) {
			console.log('Connection Failed');
		}
		db.collection('products').findOne({
			'_id': objectID(req.params.id)
		}, function(err, data) {
			if (err) {
				console.log('Data Retrieval Failed');
			}
			res.locals.product = data;
			res.render('updateproducts');
		});
	});
});
router.put('/:id', function(req, res, next) {
	var MongoClient = require('mongodb').MongoClient,
		ObjectID = require('mongodb').ObjectID;
	MongoClient.connect('mongodb://localhost:27017/product', function(err, db) {
		if (err) {
			console.log('Connection Failed');
		}
		db.collection('products').update({
				'_id': ObjectID(req.params.id)
			}, {
				$set: {
					title: title.value,
					des: des.value,
					price: price.value,
					brand: brand.value
				}
			},
			function(err, data) {
				if (err) {
					console.log('Data Updation Failed');
				}
				console.log(data);
				res.render('updateproducts', {
					title: 'Data Updated'
				});
			});
	});
});
module.exports = router;