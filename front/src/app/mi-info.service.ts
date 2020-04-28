import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
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
