const isConnected = require("./isConnected");

const getData = ({ connection, table }) => {
  return new Promise((resolve, reject) => {
    if (table && isConnected(connection)) {
      const query = "SELECT * FROM " + table;
      connection?.query(query, (error, data) => {
        if (error) return reject(error);
        return resolve(data);
      })
    } else if (!table) {
      return reject({ error: true, message: `The table is couldn't found` })
    } else {
      return reject({ error: true, message: 'Connection failed.' })
    }
  })
};

module.exports = getData;