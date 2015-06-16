var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;


/* GET home page. */
router.get('/:id', function(req, res, next) {
	console.log(req.params.id);
	var client = require('mongodb').MongoClient;
	var url = 'mongodb://localhost:27017/mycol';
	client.connect(url, function(err, db) {
		if (err == null) {
			console.log("connected correctly to mongodb");
			collection = db.collection('mycol');
			collection.findOne({
				_id: ObjectId(req.params.id)
			}, function(err, user) {
				res.locals.formdata = user;
				console.log(user);
				res.render('first');
			});
		}
	});


});



module.exports = router;