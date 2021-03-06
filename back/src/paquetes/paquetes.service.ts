import { 
  Injectable,
  Inject,
  HttpCode,
} from '@nestjs/common';
// DB
import { Pool } from 'mysql';
import { Paquete } from './paquetes.class';

@Injectable()
export class PaquetesService {
  constructor(
    @Inject('DB') private db: Pool
  ){}

  getAll():Promise<Paquete[]> {
    return this.db.query(
      `
        SELECT paquetes_permisos.*, 
          group_concat(relacion_paquetes_permisos.permisos_nombre) 
          as permisos FROM paquetes_permisos 
        left join relacion_paquetes_permisos 
        on relacion_paquetes_permisos.paquetes_permisos_id=paquetes_permisos.id
        group by paquetes_permisos.id
      `
    );
  }
  async create(paquete:Paquete) {
    const result = await this.db.query(
      `Insert into paquetes_permisos(nombre,categoria) values(?, ?)`,[
      paquete.nombre,
      paquete.categoria
    ]);
    paquete.id = result.insertId;
    return paquete;
  }

  remove(id: number) {
    return this.db.query(`DELETE FROM paquetes_permisos WHERE id = ?`,[
      id,
    ]);
  }

  addPermisos(id:number, permisos:string[]){
    if(permisos.length === 0)
      return;
    const values = permisos.map(
      permiso => [id, permiso]
    )
    return this.db.query(
      `insert into relacion_paquetes_permisos(paquetes_permisos_id,permisos_nombre) values ?`, [ values ]
    );
  }

  removePermisos(id:number, permisos:string[]){
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
