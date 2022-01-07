const updateData = ({ connection, table, data, id }) => {
  return new Promise((resolve, reject) => {
    const f_data = Object.keys(data)
    if (connection && table && f_data?.length > 0 && id) {
      const values = Object.keys(data).map((key) => (`${key}='${data[key]}'`));
      const query = `UPDATE ${table} SET ${values} WHERE id='${id}'`;
      connection?.query(query, (error, data) => {
        if (error) return reject(error);
        return resolve(data);
      })
    } else if (!table) {
      return reject({ error: true, message: `Table couldn't found.` })
    } else if (!f_data?.length) {
      return reject({ error: true, message: `Data not found.` })
    } else if (!id) {
      return reject({ error: true, message: 'Update id not found.' })
    } else {
      return reject({ error: true, message: 'Connection failed.' })
    }
  })
};
module.exports = updateData;