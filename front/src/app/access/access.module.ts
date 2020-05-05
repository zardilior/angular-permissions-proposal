import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessService } from './access.service';
import { AccessDirective } from './access.directive';

@NgModule({
  declarations: [
    AccessDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AccessService
  ],
  exports: [
    AccessDirective
  ]
})
export class AccessModule { }
