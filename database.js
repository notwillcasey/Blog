const { Client } = require('pg');

const client = new Client({
  user: 'client',
  database: 'todo',
  password: 'client',
  port: 5432
})

client.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('DB connected')
  }
});

module.exports.createTable = (user) => {
  client.query(`CREATE TABLE ${user} (
    id serial PRIMARY KEY,
    username VARCHAR (50),
    date VARCHAR (25),
    task VARCHAR (500)
  );`)
}

module.exports.handleNewUser = (user) => {
  db.createTable(user)
    .then((response) => {
      return client.query(`SELECT * FROM ${user}`)
    })
    .catch((err) => {
      console.log('DID NOT RETURN USER', err)
    })
}

module.exports.getTasks = (user) => {
  return client.query(`SELECT * FROM ${user}`)
}

module.exports.addTask = (data) => {
  return client.query(`INSERT INTO ${data.user} (username, date, task) VALUES ('${data.user}', '${data.date}', '${data.task}');`)
}

module.exports.deleteTask = (data) => {
  return client.query(`DELETE FROM ${data.user} WHERE id=${data.id}`)
}

module.exports.updateTask = (user, id, date, task) => {

}