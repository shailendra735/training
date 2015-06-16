var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.formdata = {};
	res.render('first', {
		title: 'Express'
	});
})

router.post('/', function(req, res) {

	var client = require('mongodb').MongoClient;
	var url = 'mongodb://localhost:27017/mycol';
	var collections;
	client.connect(url, function(err, db) {
		if (err == null) {
			console.log("connected correctly to mongodb");
			collection = db.collection('mycol');
		}
		var data = db.collection('mycol');

		data.insert(req.body, function(err, data) {
			if (err) return console.error(err);
			console.log(data);
		});
		res.locals.formdata = req.body;
		console.log(req.body);
		res.render('first');

	});


});



module.exports = router;