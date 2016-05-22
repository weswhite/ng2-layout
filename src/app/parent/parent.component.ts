import { Component, OnInit, Input, ComponentResolver, ViewContainerRef } from '@angular/core';

import { Child1Component } from '../children/child1.component'
import { Child2Component } from '../children/child2.component'
import { Child3Component } from '../children/child3.component'

import { ParentService } from './parent.service'

@Component({
  selector: 'parent',
  directives: [Child1Component, Child2Component, Child3Component],
  providers: [ParentService],
  template: `
    <style>
      .parent{
        background-image: linear-gradient(141deg, #8ecb45 0%, #97cd76 71%, #96d885 100%);
        width: 100%;
        height: 200px;
      }
    </style>
    <div class="parent"></div>
  `
})
export class ParentComponent {
  constructor(private parentService:ParentService, private children: any, viewContainer: ViewContainerRef, private componentResolver: ComponentResolver) {

    this.children = parentService.getChildren();

    for(var i = 0; i < children.length; i++) {
      this.componentResolver.resolveComponent(children[i].component)
      .then(componentFactory => {
        const ctxInjector = viewContainer.injector;
        return viewContainer.createComponent(componentFactory, 0, ctxInjector);
      })
    }
  }
}
