import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisosComponent } from './pages/permisos/permisos.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes = [
  {
    path:'permisos',
    component:PermisosComponent,
  },
  {
    path:'paquetes',
    component:PaquetesComponent,
  },
  {
    path:'usuarios',
    component: UsuariosComponent
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
