const isConnected = require("./isConnected");

const deleteData = ({ connection, table, id }) => {
  return new Promise((resolve, reject) => {
    if (table && isConnected(connection) && id) {
      const query = `DELETE FROM ${table} WHERE id="${id}"`;
      connection?.query(query, (error, data) => {
        if (error) return reject(error);
        else if (data?.affectedRows > 0) return resolve({ status: 'success' });
        else return resolve({ error: true, message: "Delete failed on " + table + ' table.', ...data, status: 'failure' })
      })
    } else if (!table) {
      return reject({ error: true, message: `The table is couldn't found`, status: 'failure' })
    } else if (!id) {
      return reject({ error: true, message: 'Delete id not found.', status: 'failure' })
    } else {
      return reject({ error: true, message: 'Connection failed.', status: 'failure' })
    }
  })
};

module.exports = deleteData;