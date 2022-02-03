const custom = ({ connection, query }) => {
  return new Promise((resolve, reject) => {
    connection?.query(query, (error, result) => {
      if (error) return reject(error);
      return resolve(result);
    })
  })
};

module.exports = custom;