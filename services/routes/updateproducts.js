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
router.post('/:id', function(req, res, next) {
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
					title: req.body.title,
					des: req.body.des,
					price: req.body.price,
					brand: req.body.brand
				}
			},
			function(err, data) {
				if (err) {
					console.log('Data Updation Failed');
				}
				res.locals.product = req.body;
				res.render('updateproducts', {
					title: 'Data Updated'
				});
			});
	});
});
module.exports = router;