var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
// /api/events
//get and post

// /api/eventTimes
//get and post

app.post('/api/event', (req, res) => {
console.log(req.body)
  db.Events.create(req.body).then(response => {
    res.status(200);
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

