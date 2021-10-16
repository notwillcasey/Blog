const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 2000;

const db = require('./database.js');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./client/public'));

app.get('/api/getTask', (req, res) => {
  db.getTasks(req.query.user)
    .then((response) => {
      res.status(200).send(response.rows)
    })
    .catch((err) => {
      if (err.message.includes('does not exist')) {
        db.handleNewUser(req.query.user)
          .then((response) => {
            res.status(200).send(response.rows)
          })
          .catch((err) => {
            res.status(400).send('ERROR creating new user')
          })
      }  else {
        res.status(400).send('DB connection issue, try again later')
      }
    })
})

app.post('/api/addTask', (req, res) => {
  db.addTask(req.body)
    .then((response) => {
      return db.getTasks(req.body.user)
    })
    .then((response) => {
      res.status(200).send(response.rows)
    })
    .catch((err) => {
      res.status(400).send('error adding to DB')
    })
})

app.post('/api/deleteTask', (req, res) => {
  db.deleteTask(req.body)
    .then((response) => {
      return db.getTasks(req.body.user)
    })
    .then((response) => {
      res.status(200).send(response.rows)
    })
    .catch((err) => {
      res.status(400).send('error adding to DB')
    })
})

app.post('/auth/addUser', (req, res) => {
  db.addUser(req.body)
    .then((response) => {
      res.status(201).send('user created')
    })
    .catch((err) => {
      res.status(400).send('unable to create user')
    })
})

app.post('/auth/checkUser', (req, res) => {
  console.log(req.body)
  db.checkAuth(req.body)
    .then((response) => {
      console.log('check res', response.rows[0])
      res.status(201).send(response.rows[0])
    })
    .catch((err) => {
      console.log('check error', err);
      res.status(400).send('unable to create user')
    })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client', 'public', 'index.html'));
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})