const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'trybe',
  password: 'colocar senha',
  host: 'localhost',
  database: 'users_crud'
})

module.exports = connection;
