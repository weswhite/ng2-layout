import { Component } from '@angular/core';

import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './children/child1.component';
import { Child2Component } from './children/child2.component';
import { Child3Component } from './children/child3.component';

@Component({
  moduleId: module.id,
  selector: 'layout-app',
  directives: [ParentComponent],
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css']
})
export class LayoutAppComponent {
  types = [Child1Component, Child2Component, Child3Component ];
}
