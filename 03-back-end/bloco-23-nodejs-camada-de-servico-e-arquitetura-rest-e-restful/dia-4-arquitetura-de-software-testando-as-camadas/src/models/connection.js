const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'mM789456123365*',
  database: 'model_example'});

module.exports = connection;