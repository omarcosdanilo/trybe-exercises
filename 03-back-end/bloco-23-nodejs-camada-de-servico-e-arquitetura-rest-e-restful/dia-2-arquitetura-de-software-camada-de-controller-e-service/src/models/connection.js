const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "trybe",
  password: "mM789456123365*",
})

module.exports = db;