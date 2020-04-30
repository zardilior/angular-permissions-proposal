import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PermisosModule } from './permisos/permisos.module';
import { AppRoutingModule } from './app-routing.module';
//import { DemoModule } from './demo/demo.module';
//import { AccessModule } from './access/access.module';
import { MenuComponent } from './menu/menu.component';

const API_URL = 'API_URL';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PermisosModule,
    // AccessModule
    // DemoModule,
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ],
  exports: [ AppRoutingModule /*, AccessModule */]
})
export class AppModule { }
