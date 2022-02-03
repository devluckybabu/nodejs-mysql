const groupBy = ({ connection, table, groupBy, orderBy }) => {
  return new Promise((resolve, reject) => {
    connection?.query(`SELECT * FROM ${table} tc INNER JOIN products_collection pc ON tc.productId = pc.id`, (error, result) => {
      if (error) return reject(error);
      return resolve(result);
    })
  })
};

module.exports = groupBy;