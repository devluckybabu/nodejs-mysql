const connection = require('./lib/connection');
const deleteData = require('./lib/delete_data');
const getData = require('./lib/get_data');
const insertData = require('./lib/insert_data');
const updateData = require('./lib/update_data');

class Connection {
  createConnection = connection.createConnection;
  createPool = connection.createPool;
  createPoolCluster = connection.createPoolCluster;
  set = insertData;
  get = getData;
  update = updateData;
  delete = deleteData;
};
const nodesql = new Connection();
module.exports = nodesql;