import { Component, Input,  } from '@angular/core';

class Parent{
  constructor(){}
}

@Component({
  selector: 'parent',
  directives: [],
  template: `
    <div *ngFor
  `
})
export class ParentComponent {
  @Input() parent: Parent;
  //@Input('master') masterName: string;
}
