import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccessService } from './access.service';

@Directive({
  selector: '[accessDirective]'
})
export class AccessDirective {
  hasView: boolean;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private accessService:AccessService,
  ) { }
  @Input() set accessDirective(nombre: string) {
    const shouldShow = () => {
      console.log(this.accessService.getPermisos());
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
    }
    this.accessService.getPermisosChanges().subscribe(shouldShow);
    shouldShow()
  }

}
