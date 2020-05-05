import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisosComponent } from './pages/permisos/permisos.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AuthGuardService } from 'src/app/auth-guard.service';

const routes = [
  {
    path:'permisos',
    component:PermisosComponent,
    canActivate: [AuthGuardService],
    data: { access:'pagina-permisos' }
  },
  {
    path:'paquetes',
    component:PaquetesComponent,
    canActivate: [AuthGuardService],
    data: { access:'pagina-paquetes' }
  },
  {
    path:'usuarios',
    component: UsuariosComponent,
    canActivate: [AuthGuardService],
    data: { access:'pagina-permisos-usuario' }
  },
  {
    path: '',
    redirectTo: 'permisos',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisosRoutingModule {}
