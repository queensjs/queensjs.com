'use strict';

var express = require('express');
var app = express();
var hbs = require('hbs');

app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index');
});

var port = 8000;
var server = app.listen(port, function() {
  console.log('Server is now listening on port ' + port + '.');
});