import { 
  Injectable,
  Inject,
} from '@nestjs/common';
// DB
import { Pool } from 'mysql';

@Injectable()
export class PermisosUsuariosService {

  constructor(
    @Inject('DB') private db: Pool
  ){}

  async getPermisosUsuario(userId: number) {
    const result = await this.db.query(
      `
        SELECT permisos_users.permisos_nombre
          FROM permisos_users
        where permisos_users.users_id = ?
      `,
      [userId]
    );
    return result.map(({ permisos_nombre }) => permisos_nombre);
  }

  add(id:number, permisos:string[]){
    if(permisos.length === 0)
      return;
    const values = permisos.map(
      permiso => [id, permiso]
    )
    console.log(values)
    return this.db.query(
      `insert into permisos_users(users_id,permisos_nombre) values ?`, [ values ]
    );
  }

  remove(id:number, permisos:string[]){
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
