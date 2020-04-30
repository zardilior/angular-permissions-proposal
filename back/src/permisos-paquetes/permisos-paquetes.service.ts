import { 
  Injectable,
  Inject,
} from '@nestjs/common';
// DB
import { Pool } from 'mysql';

@Injectable()
export class PermisosPaquetesService {
  constructor(
    @Inject('DB') private db: Pool
  ){}

  add(id:number, permisos:string[]){
    if(permisos.length === 0)
      return;
    const values = permisos.map(
      permiso => [id, permiso]
    )
    return this.db.query(
      `insert into relacion_paquetes_permisos(paquetes_permisos_id,permisos_nombre) values ?`, [ values ]
    );
  }

  remove(id:number, permisos:string[]){
    if(permisos.length === 0)
      return;
    return this.db.query(
      `
        delete from relacion_paquetes_permisos 
        where paquetes_permisos_id=? and permisos_nombre in (?)
      `,
      [
        id,
        permisos
      ]
    );
  }

}

@Injectable()
export class PermisosService {

}
