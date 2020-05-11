import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PermisosModule } from './permisos/permisos.module';
import { AppRoutingModule } from './app-routing.module';
import { AccessModule } from './access/access.module';
import { MenuComponent } from './menu/menu.component';
import { PermisosService } from './permisos/permisos.service';
import { API_URL, API_URL_TOKEN } from './permisos/api-url.config';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PermisosModule,
    AccessModule,
  ],
  providers: [
    PermisosService,
    {
      provide: API_URL_TOKEN,
      useValue: API_URL 
    },
  ],
  bootstrap: [ AppComponent ],
  exports: [ 
    AppRoutingModule,
    AccessModule 
  ]
})
export class AppModule { }
