const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 2000;
const crypto = require('crypto');
const secretKey = 'testingHash'


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
  const hashedPass = crypto.createHmac('sha256', req.body.hashword)
                           .update(secretKey)
                           .digest('hex')

  const userInfo = {
  user: req.body.user,
  hashword: hashedPass
  }
  db.addUser(userInfo)
    .then((response) => {
      // res.status(201).send('user created')
      db.checkAuth(userInfo)
        .then((response) => {
          res.status(201).send(response.rows[0])
        })
        .catch((err) => {
          console.log('check error', err);
          res.status(400).send('unable to create user')
        })
    })
    .catch((err) => {
      res.status(400).send('unable to create user')
    })
})

app.post('/auth/checkUser', (req, res) => {
  const hashedPass = crypto.createHmac('sha256', req.body.hashword)
                           .update(secretKey)
                           .digest('hex')

  const userInfo = {
    user: req.body.user,
    hashword: hashedPass
  }

  db.checkAuth(userInfo)
    .then((response) => {
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