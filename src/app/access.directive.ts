import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MiInfoService } from './mi-info.service';
import { AccessService } from './access.service';

@Directive({
  selector: '[accessDirective]'
})
export class AccessDirective {
  hasView: boolean;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private miInfoService:MiInfoService,
    private accessService:AccessService,
  ) { }
  @Input() set accessDirective(nombre: string) {
    console.log('accessDirective',nombre)
    this.miInfoService.roleChanges.subscribe(rol => {
      if (this.accessService.hasAccess(nombre)){
        this.viewContainer.clear()
        this.viewContainer.createEmbeddedView(
          this.templateRef
        )
        this.hasView = true;
      }
      else {
        this.viewContainer.clear()
        this.hasView = false;
      }
    });
  }

}
