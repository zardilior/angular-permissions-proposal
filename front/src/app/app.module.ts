import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PermisosModule } from './permisos/permisos.module';
import { AppRoutingModule } from './app-routing.module';
//import { DemoModule } from './demo/demo.module';
import { AccessModule } from './access/access.module';
import { MenuComponent } from './menu/menu.component';
import { PermisosServiceToken } from './access/permisos-service.interface';
import { KeyServiceToken } from './access/key-service.interface';
import { FailedAccessServiceToken } from './access/failed-access-service.interface';
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
    // DemoModule,
  ],
  providers: [
    PermisosService,
    {
      provide: API_URL_TOKEN,
      useValue: API_URL 
    },
    {
      provide: PermisosServiceToken,
      useExisting: PermisosService 
    },
    {
      provide: KeyServiceToken,
      useExisting:  PermisosService
    },
    {
      provide: FailedAccessServiceToken,
      useExisting: PermisosService 
    },
  ],
  bootstrap: [ AppComponent ],
  exports: [ AppRoutingModule , AccessModule ]
})
export class AppModule { }
