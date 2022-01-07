const mysql = require('mysql2');
class connection {
  createConnection = ({ host, user, password, database, port, debug }) => {
    return mysql.createConnection({ host, user, password, database, port, debug })
  };
  createPool = ({ host, user, password, database, port, debug }) => {
    return mysql.createPool({ host, user, password, database, port, debug })
  };
  createPoolCluster = ({ host, user, password, database, port, debug }) => {
    return mysql.createPoolCluster({ host, user, password, database, port, debug })
  };
}

module.exports = new connection();