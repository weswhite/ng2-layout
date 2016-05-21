import { Component, Input,  } from '@angular/core';
import { Child1Component } from '../children/child1.component'
import { Child2Component } from '../children/child2.component'
import { Child3Component } from '../children/child3.component'



class Parent{
  //parentId: any;
  children: any;
  constructor(){}
}

@Component({
  selector: 'parent',
  directives: [Child1Component, Child2Component, Child3Component],
  template: `
    <div class="parent">
      <div *ngFor="child in children">
        {{child.template}}
      </div>
    </div>
  `
})
export class ParentComponent {
  @Input() parent: Parent;
  //@Input('master') masterName: string;
}
