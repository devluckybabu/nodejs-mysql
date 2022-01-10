const isConnected = require("./isConnected");

const getData = ({ connection, table, id }) => {
  return new Promise((resolve, reject) => {
    if (table && isConnected(connection)) {
      if (id) {
        const query = `SELECT * FROM ${table} WHERE id=${JSON.stringify(id)}`;
        connection?.query(query, (error, data) => {
          if (error) return reject(error);
          return resolve(data[0]);
        })
      } else {
        const query = "SELECT * FROM " + table;
        connection?.query(query, (error, data) => {
          if (error) return reject(error);
          return resolve(data);
        })
      }
    } else if (!table) {
      return reject({ error: true, message: `The table is couldn't found` })
    } else {
      return reject({ error: true, message: 'Connection failed.' })
    }
  })
};

module.exports = getData;