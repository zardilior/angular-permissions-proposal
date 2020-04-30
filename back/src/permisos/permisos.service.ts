import { 
  Injectable,
  Inject,
} from '@nestjs/common';
// DB
import { Pool } from 'mysql';
import { Permiso } from './permisos.class';

@Injectable()
export class PermisosService {
  constructor(
    @Inject('DB') private db: Pool
  ){}

  getAll():Promise<Permiso[]> {
    return this.db.query(`SELECT * FROM permisos`);
  }
  async create(permiso:Permiso) {
    const result = await this.db.query(`Insert into permisos values(?, ?)`,[
      permiso.nombre,
      permiso.nombre_mostrable
    ]);
    return permiso;
  }
  delete(nombre:string) {
    return this.db.query(`DELETE FROM permisos WHERE nombre = ?`,[
      nombre,
    ]);
  }
}
