const DB_HOST = '114.55.40.149';
const DB_PORT = '3366';
const DB_DATABASE = 'artisanote';
const DB_USER = 'root';
const DB_PASSWORD = '123456';

var mysql = require('mysql');
var connection = mysql.createConnection({host: DB_HOST, port: DB_PORT, database: DB_DATABASE, user: DB_USER, password: DB_PASSWORD});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
