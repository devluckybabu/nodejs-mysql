const deleteData = ({ connection, table, id }) => {
  return new Promise((resolve, reject) => {
    if (table && typeof (connection) == "object" && id) {
      const query = `DELETE FROM ${table} WHERE id='${id}'`;
      connection?.query(query, (error, data) => {
        if (error) return reject(error);
        return resolve(data);
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