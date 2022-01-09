import { type } from "os";
import db_conn from "./lib/connection";
import deleteData from "./lib/delete_data";
import getData from "./lib/get_data";
import insertData from "./lib/insert_data";
import updateData from "./lib/update_data";
interface Params {
  host: string;
  user: string;
  password: string;
  database: string;
  debug?: boolean;
  port?: number;
  mode: 'createPool' | 'createConnection'
}


class Connection {
  private connection;
  constructor({ host, user, password, database, debug, port, mode }: Params) {
    this.connection = db_conn[mode]({ host, user, password, database, debug, port });
  };
  get = (table: string) => getData({ connection: this.connection, table });
  set = (table: string, data: object) => insertData({ connection: this.connection, data, table });
  update = (table: string, data: object, id: string) => updateData({ connection: this.connection, data, table, id });
  delete = (table: string,  id: string) => deleteData({ connection: this.connection, table, id });
};

const nodesql = Connection;
module.exports = nodesql;
