var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;



/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('newemployee', {
		title: 'Express'
	});
});
router.post('/', function(req, res) {
	console.log(req.body);
	var client = require('mongodb').MongoClient;
	var url = 'mongodb://localhost:27017/mycol';
	client.connect(url, function(err, db) {
		if (err == null) {
			console.log("connected correctly to mongodb");
			collection = db.collection('mycol');
			req.body._id = ObjectId(req.body._id);
			collection.update({
					_id: req.body._id
				}, req.body,
				function(err, user) {
					res.locals.formdata = req.body;

					res.render('first');
				});
		}
	});
});



module.exports = router;