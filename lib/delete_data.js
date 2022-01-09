const isConnected = require("./isConnected");

const deleteData = ({ connection, table, id }) => {
  return new Promise((resolve, reject) => {
    if (table && isConnected(connection) && id) {
      const query = `DELETE FROM ${table} WHERE id="${id}"`;
      connection?.query(query, (error, data) => {
        if (error) return reject(error);
        else if (data?.affectedRows > 0) return resolve(data);
        else return resolve({ error: true, message: "Delete failed on " + table + ' table.', ...data })
      })
    } else if (!table) {
      return reject({ error: true, message: `The table is couldn't found` })
    } else if (!id) {
      return reject({ error: true, message: 'Delete id not found.' })
    } else {
      return reject({ error: true, message: 'Connection failed.' })
    }
  })
};

module.exports = deleteData;