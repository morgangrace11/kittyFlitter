var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

// /api/events
//get and post

// /api/eventTimes
//get and post


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

