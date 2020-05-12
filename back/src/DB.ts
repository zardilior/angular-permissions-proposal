import { promisify } from 'util';
import * as mysql from 'mysql2';
import { database } from './keys';
const CONNECTION_LIMIT = 10;
const config = {...database, pool:CONNECTION_LIMIT };
const pool = mysql.createPool(config);

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
    console.error('Error en la configuación: ');
    console.error(e);
  }
}
