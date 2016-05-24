import { Component, Input} from '@angular/core';

import { Loader } from './component-loader.component'

export class Child{
  component: string;
  template: string;
}

@Component({
  selector: 'parent',
  directives: [Loader],
  template: `
    <style>
      .parent{
        background-image: linear-gradient(141deg, #8ecb45 0%, #97cd76 71%, #96d885 100%);
        width: 100%;
        height: 1000px;
      }
    </style>
    <div class="parent">
      <div *ngFor="let child of children">
        <loader [type]="child"></loader>
      </div>
    </div>
  `
})
export class ParentComponent {
  @Input() children;
}
