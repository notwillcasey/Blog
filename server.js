const express = require('express');
const app = express();
const path = require('path');
const PORT = 2000;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'client',
  database: 'todo',
  password: 'client',
  port: 5432
})

app.use(express.static('./client/public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client', 'public', 'index.html'));
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})