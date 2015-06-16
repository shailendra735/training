var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('first', {
		title: 'Express'
	});
});
router.post('/', function(req, res) {
	res.render('first');
});



module.exports = router;