const getData = require("../get_data");
const where = require("./where");
const groupBy = require("./groupBy");

class getMethod {
  #connection;
  #table;
  constructor({ connection, table }) {
    this.#connection = connection;
    this.#table = table;
  }
  where = (key, expression, value) => where({ connection: this.#connection, table: this.#table, expression, key, value });
  data = () => getData({ connection: this.#connection, table: this.#table });
  groupBy = (value) => groupBy({ connection: this.#connection, table: this.#table, groupBy: value });
};

module.exports = getMethod;