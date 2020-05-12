import { 
  Injectable,
  Inject,
  Logger,
} from '@nestjs/common';
// DB
import { Pool } from 'mysql';
import { Permiso } from './permisos.class';
import { Trace } from 'src/decorators/trace-everything.decorator';

@Injectable()
export class PermisosService {
  private logger = new Logger(PermisosService.name);
  constructor(
    @Inject('DB') private db: Pool
  ){}

  @Trace
  getAll():Promise<Permiso[]> {
    return this.db.query(`SELECT * FROM permisos`);
  }

  @Trace
  async create(permiso:Permiso): Promise<Permiso> {
    const result = await this.db.query(`Insert into permisos values(?, ?)`,[
      permiso.nombre,
      permiso.nombre_mostrable
    ]);
    return permiso;
  }

  @Trace
  delete(nombre:string):Promise<any> {
    return this.db.query(`DELETE FROM permisos WHERE nombre = ?`,[
      nombre,
    ]);
  }
}
