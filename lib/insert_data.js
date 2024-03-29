const isConnected = require("./isConnected");

const insertData = ({ connection, table, data }) => {
  return new Promise((resolve, reject) => {
    const f_data = Object.keys(data);
    if (isConnected(connection) && table && f_data?.length > 0) {
      const keys = Object.keys(data);
      const values = Object.values(data).map((value) => `"${value}"`);
      const query = `INSERT INTO ${table}(${keys}) values(${values})`;
      connection?.query(query, (error, data) => {
        if (error) return reject(error);
        else if (data?.affectedRows > 0) return resolve(data);
        else return resolve({ error: true, message: "These values are couldn't add to database.", ...data })
      })
    } else if (!table) {
      return reject({ error: true, message: `Table couldn't found.` })
    } else if (!f_data.length) {
      return reject({ error: true, message: `Data not found.` })
    } else {
      return reject({ error: true, message: 'Connection failed.' })
    }
  })
};
module.exports = insertData;