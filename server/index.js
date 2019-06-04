const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../database');

const saltRounds = 10;
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.body.password, salt);
  db.User.create({
    username: req.body.username,
    password: hash,
  }).then((response) => {
    res.status(201);
    res.send(response);
  }).catch((err) => {
    res.status(409);
    res.send(err);
  });
});

app.get('/login', (req, res) => {
  db.User.findOne({
    where: {
      username: req.query.username,
    },
  }).then((user) => {
    bcrypt.compare(req.query.password, user.password, (err, response) => {
      if (response === true) {
        res.status(200);
        res.send(response);
      } else {
        res.status(400);
        res.send(err);
      }
    });
  });
});

app.get('/api/event', (req, res) => {
  db.Events.findAll({
    where: {
      username: req.query.username,
    },
    order: [
      ['date', 'ASC'],
    ],
  }).then((response) => {
    res.status(200);
    res.send(response);
  });
});

app.post('/api/event', (req, res) => {
  db.Events.create(req.body).then(() => {
    res.status(201);
    res.send('post worked');
  });
});

app.put('/api/edit', (req, res) => {
  db.Events.update({
    event: req.body.event,
    time: req.body.time,
  },
  {
    where:
      { id: req.body.id },
  }).then(() => {
    res.status(200);
    res.send('update worked');
  });
});

app.delete('/api/delete', (req, res) => {
  db.Events.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then(() => {
      res.send('destroyed');
    });
});

app.listen(3000, () => {
  console.log(`listening on port ${port}!`);
});
