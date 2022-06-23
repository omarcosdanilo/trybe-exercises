const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'trybe',
  password: 'mM789456123365*',
  host: 'localhost',
  database: 'users_crud'
})

module.exports = connection;