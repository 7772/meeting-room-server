var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

app.get('/', function(req, res) {
  res.status(200).json();
});

app.listen(3000, function() {
  console.log('Listening on port 3000..');
});