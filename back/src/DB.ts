const { promisify } = require('util');
import * as mysql from 'mysql';
const { database } = require('./keys');
const pool = mysql.createPool(database);
const CONNECTION_LIMIT = 10;

export async function DBFactory(): Promise<mysql.Pool>{
  try {
    pool.getConnection((err, connection) => {
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
    
      connection.release();
      console.log('DB is Connected');
    });
    
    // Convertir en promesas
    pool.query = promisify(pool.query);

    return pool;
  } catch (e) {
    console.log('Error en la configuación: ');
    console.log(e);
  }
}
