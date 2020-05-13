import { 
  Injectable,
  Inject,
  Logger
} from '@nestjs/common';
// DB
import { Pool } from 'mysql2';
import { Trace } from 'src/decorators/trace-everything.decorator';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);
  constructor(
    @Inject('DB') private db: Pool
  ){}

  @Trace
  getAll():Promise<any[]> {
    return this.db.query(`SELECT * FROM users`);
  }
  async getPermisosByUserId(userId: number): Promise<string[]> {
    const [rows,fields] = await this.db.query(
      `
        SELECT permisos_users.permisos_nombre
          FROM permisos_users
        where permisos_users.users_id = ?
      `,
      [userId]
    );
    return rows.map(({ permisos_nombre }) => permisos_nombre);
  }

  @Trace
  addPermisos(id:number, permisos:string[]){
    if(permisos.length === 0)
      return;
    const values = permisos.map(
      permiso => [id, permiso]
    )
    return this.db.query(
      `insert into permisos_users(users_id,permisos_nombre) values ?`, [ values ]
    );
  }

  @Trace
  removePermisos(id:number, permisos:string[]){
    if(permisos.length === 0)
      return;
    return this.db.query(
      `
        delete from permisos_users
        where users_id=? and permisos_nombre in (?)
      `,
      [
        id,
        permisos
      ]
    );
  }
}
