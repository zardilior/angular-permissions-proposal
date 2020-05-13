import { promisify } from 'util';
import * as mysql from 'mysql2/promise';
import { database } from './keys';
import { tracer } from './tracer';
const zipkinClient = require('./zipkin-instrumentation-mysql2')
const CONNECTION_LIMIT = 10;
const config = {...database, pool:CONNECTION_LIMIT };
const unwrappedPool = mysql.createPool(config);
const pool = new zipkinClient(tracer, unwrappedPool,config);

export async function DBFactory(): Promise<mysql.Pool>{
  try {
    const connection = await pool.getConnection();
    /*
    if (err) {
      switch(err.code) {
        case "PROTOCOL_CONNECTION_LOST":
          console.error('Database connection was closed');
          break;
        case "ER_CON_COUNT_ERROR":
          console.error('Database has to many connections');
          break;
        case "ECONNREFUSED":
          console.error('Database connection was refused');
          break;
        case "ER_ACCESS_DENIED_ERROR":
          console.error('Database access denied');
          break;
      }
      return;
    }
     */
    connection.release();
    console.log('DB is Connected');

    return pool;
  } catch (e) {
    console.error('Error en la configuación: ');
    console.error(e);
  }
}
