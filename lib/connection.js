const mysql = require('mysql2');
class db_connection {
  createConnection = ({ host, user, password, database, port, debug }) => {
    return mysql.createConnection({ host, user, password, database, port, debug })
  };
  createPool = ({ host, user, password, database, port, debug }) => {
    return mysql.createPool({ host, user, password, database, port, debug })
  };
}

const db_conn = new db_connection();

module.exports = db_conn;