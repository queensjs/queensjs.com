'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello world!');
});

var port = 8000;
var server = app.listen(port, function() {
  console.log('Server is now listening on port ' + port + '.');
});