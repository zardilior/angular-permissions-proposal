import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class MiInfoService {
  role: String;
  roleChanges = new Subject<string>();
  constructor() { 
  
  }

  getRole(){
    return this.role;
  }
  setRole(role){
    this.role = role;
    this.roleChanges.next(role);
  }
}
