var express = require('express');
var router = express.Router();
var seen = require('../models/seen.js');

//Routes
router.get('/', function (req, res) {
	res.redirect('/seen');
});

router.get('/seen', function(req, res) {
	seen.all(function(data) {
		res.render('index', { seen : data });
	});
});

router.post('/seen/create', function (req, res) {
	var columnNames = 'seen'; 
	var objColVals = req.body.newseen;
	seen.create(columnNames, objColVals, function() {
		res.redirect('/seen');
		});  
	});

app.use('/*', function(req,res){
   res.send("<h1>Not looking at the seenery?</h1>");
});

module.exports = router;