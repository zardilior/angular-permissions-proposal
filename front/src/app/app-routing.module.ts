import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes = [
  {
    path:'menu',
    component: MenuComponent
  },
  {
    path: 'permisos',
    loadChildren: './permisos/permisos.module#PermisosModule'
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
