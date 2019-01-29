var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/api/event', (req, res) => {
  db.Events.findAll().then(response => {
    res.status(200);
    res.send(response);
  })
});

app.post('/api/event', (req, res) => {
console.log(req.body)
  db.Events.create(req.body).then(response => {
    res.status(201);
    res.send('post worked')
  })
})

app.put('/api/edit', (req, res) => {
  db.Events.update({
      event: req.body.event,
      time: req.body.time
    },
    {where:
      { id: req.body.id }
    }).then(response => {
    res.status(200);
    res.send('update worked')
  })
})

app.delete('/api/delete', (req, res) => {
  console.log(req.body)
  db.Events.destroy({where: {
    id: req.body.id
  }})
  .then(response => {
    res.send('destroyed');
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

