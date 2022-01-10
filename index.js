const connection = require("./lib/connection");
const deleteData = require("./lib/delete_data");
const getData = require("./lib/get_data");
const insertData = require("./lib/insert_data");
const updateData = require("./lib/update_data");

class Connection {
  #connection;
  constructor({ host, user, password, database, debug, port }) {
    this.#connection = connection.createPool({ host, user, password, database, debug, port });
  };
  get = (table, id) => getData({ connection: this.#connection, table, id });
  set = (table, data) => insertData({ connection: this.#connection, data, table });
  update = (table, data, id) => updateData({ connection: this.#connection, data, table, id });
  delete = (table, id) => deleteData({ connection: this.#connection, table, id });
};
module.exports = Connection;
