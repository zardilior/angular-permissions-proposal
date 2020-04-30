import { 
  Injectable,
  Inject,
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
}
