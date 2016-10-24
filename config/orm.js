var connection = require('../config/connection.js');

var orm = {
	all: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	create: function (table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString = queryString + "(";
		queryString = queryString + cols;
		queryString = queryString + ") VALUES ('";
		queryString = queryString + vals;
		queryString = queryString + "')";

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},