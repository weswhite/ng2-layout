import { Component, Input, ViewContainerRef, ViewChild, ComponentResolver, ComponentRef, ComponentFactory } from '@angular/core';

@Component({
  selector: 'loader',
  template: `<div #target></div>`
})
export class Loader {
  @ViewChild('target', {read: ViewContainerRef}) target;
  @Input() type;
  componentRef:ComponentRef<any>;
  private isViewInitialized:boolean = false;

  constructor(private resolver: ComponentResolver) {}

  updateComponent() {
    if(!this.isViewInitialized) {
      return;
    }
    if(this.componentRef) {
      this.componentRef.destroy();
    }
    this.resolver.resolveComponent(this.type).then((factory:ComponentFactory<any>) => {
      this.componentRef = this.target.createComponent(factory)
    });
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if(this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
