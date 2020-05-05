import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AccessService } from 'src/app/access/access.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    public access: AccessService,
    public router: Router
  ) {}
  canActivate(route:ActivatedRouteSnapshot): boolean {
    const nombre = route.data.access;
    if (!this.access.hasAccess(nombre)) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
