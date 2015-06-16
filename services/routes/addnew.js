var express = require('express');
var router = express.Router();
var db = require('../services/service.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.formdata = {};
	res.render('addnew', {
		title: 'Product Entry'
	});
});

router.post('/', function(req, res, next) {
	var MongoClient = require('mongodb').MongoClient;
	MongoClient.connect('mongodb://localhost:27017/product', function(err, db) {
		if (err) {
			console.log('Connection Error.')
		}
		res.locals.formdata = req.body;
		db.collection('products').insert(req.body, function(err, data) {
			if (err) {
				console.log('Insertion failed')
			}
		});
		res.render('addnew', {
			title: 'Form Submitted'
		});
	});
});
module.exports = router;