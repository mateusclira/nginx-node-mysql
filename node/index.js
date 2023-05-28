const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')

var connection = mysql.createConnection(config)
const createTable = `create table IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`
connection.query(createTable)
connection.end()


connection = mysql.createConnection(config)
const insert = `INSERT INTO people(name) values ('Mateus')`
connection.query(insert)
connection.end()

app.get('/', (req, resp) => {
  const connection = mysql.createConnection(config)

  connection.query('SELECT name FROM people', (err, rows, fields) => {
    if (!err) {
      var names = "";
      rows.forEach(row => {
        names = names + `<li>${row.name}</li>`
      })

      resp.send(`
        <h1>Full Cycle Rocks!</h1>
        <br>
        <ul>`
          +
          names
          +
        `</ul>`
      )
    } else {
      console.log(err);
    }
  });
  connection.end()
  
  //resp.send("<h1>Full Cycle Rocks!</h1>");
})

app.listen(port, ()=> {
  console.log('Rodando na porta ' + port)
})