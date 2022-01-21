const groupBy = ({ connection, table, groupBy }) => {
  return new Promise((resolve, reject) => {
    connection?.query('select * from ' + table + ' group by ' + groupBy, (error, result) => {
      if (error) return reject(error);
      return resolve(result);
    })
  })
};

module.exports = groupBy;