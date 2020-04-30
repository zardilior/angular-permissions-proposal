import { 
  Injectable,
  Inject,
} from '@nestjs/common';
// DB
import { Pool } from 'mysql';

@Injectable()
export class UsersService {
  constructor(
    @Inject('DB') private db: Pool
  ){}

  getAll():Promise<any[]> {
    return this.db.query(`SELECT * FROM users`);
  }
}
