import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service1Service } from './service1/service1.service';
import { Service2Service } from './service2/service2.service';
import { Service3Service } from './service3/service3.service';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';



@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    Component3Component,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    Service1Service,
    Service2Service,
    Service3Service,
  ],
  exports: [
    Component1Component,
    Component2Component,
    Component3Component,
  ]
})
export class DemoModule { }
