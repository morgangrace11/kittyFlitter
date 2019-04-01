const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../database');

const app = express();
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(session({ secret: 'cats' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

//passport functions

passport.use(new LocalStrategy(
  (username, password, done) => {
    db.User.findOne({ username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  },
));

//routes

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/main',
    failureRedirect: '/login',
    failureFlash: true,
  }),
  );

app.get('/api/event', (req, res) => {
  db.Events.findAll().then((response) => {
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
  console.log('listening on port 3000!');
});
