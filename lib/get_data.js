
const getData = ({ connection, table, options: { type, expression, value } }) => {
  return new Promise((resolve, reject) => {
    if (table && typeof (connection) == "object") {
      if (type && expression && value) {
        const query = `SELECT * FROM ${table} WHERE ${type + expression}'${value}'`;
        connection?.query(query, (error, data) => {
          if (error) return reject(error);
          return resolve(data);
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