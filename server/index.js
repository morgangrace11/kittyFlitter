const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer');
const axios = require('axios');
const db = require('../database');

const saltRounds = 10;
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: '../files',
  filename(req, file, cb) {
    cb(null, `${req.body.name}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/files', upload.single('file'), (req, res) => {
  const file = req.file;
  console.log(req.file)
  const meta = req.body;
  console.log(req.body)
  axios.post('http://s3.amazonaws.com/kittflitter', {
    file,
    name: meta.name,
  })
    .then(response => res.status(200).json(response.data.data))
    .catch(error => res.status(500).json(error.response.data));
})


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
