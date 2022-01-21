const isConnected = require("../isConnected");

const where = ({ connection, table, expression, key, value }) => {
  return new Promise((resolve, reject) => {
    if (isConnected(connection) && table && expression && key && value) {
      connection?.query('select * from ' + table + " where " + key + expression + JSON.stringify(value), (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      })
    } else if (!isConnected(connection)) {
      return reject({ error: true, message: 'Connection failed.' })
    } else {
      return reject({ error: true, message: 'Please check parameters' })
    }
  })
};

module.exports = where;