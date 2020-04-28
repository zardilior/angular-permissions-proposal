import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccessService } from './access.service';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Service1Service } from './service1.service';
import { Service2Service } from './service2.service';
import { Service3Service } from './service3.service';
import { AccessDirective } from './access.directive';
import { AccesoFallidoService } from './acceso-fallido.service';
import { MiInfoService } from './mi-info.service';
import { PermisosService } from './permisos.service';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    AccessDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    AccessService,
    Service1Service,
    Service2Service,
    Service3Service,
    PermisosService,
    MiInfoService,
    AccesoFallidoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
