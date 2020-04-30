import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PermisosService } from './permisos.service';
import { API_URL, API_URL_TOKEN } from './api-url.config'; 
import { PermisosRoutingModule } from './permisos-routing.module'
import { PermisosComponent } from './pages/permisos/permisos.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { VerPermisosComponent } from './components/ver-permisos/ver-permisos.component';
import { VerPaquetesComponent } from './components/ver-paquetes/ver-paquetes.component';

@NgModule({
  declarations: [
    PermisosComponent,
    PaquetesComponent,
    VerPermisosComponent,
    UsuariosComponent,
    VerPaquetesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PermisosRoutingModule
  ],
  providers: [
    PermisosService,
    {
      provide: API_URL_TOKEN,
      useValue: API_URL 
    }
  ],
})
export class PermisosModule { }
