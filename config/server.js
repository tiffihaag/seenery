//server.js

//Express
var express = require('express');
var app = express(); 
app.use(express.static(process.cwd() + '/public'));

//BodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Need this
var path = require('path');

//MethodOverride
var methodOverride  = require('method-override')
app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method-Override'));

//Takes me to the home page
app.get('/', function (req, res) {
    app.render('index');
});

//Setup express server
var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3002; // Sets an initial port

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//listening on the port for changes
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});