import { Component, OnInit, Input } from '@angular/core';

import { Child1Component } from '../children/child1.component'
import { Child2Component } from '../children/child2.component'
import { Child3Component } from '../children/child3.component'

import { ParentService } from './parent.service'


class Parent{
  //parentId: any;
  children: any;
  constructor(){}
}

@Component({
  selector: 'parent',
  directives: [Child1Component, Child2Component, Child3Component],
  providers: [ParentService],
  template: `
    <div class="parent">
      <div *ngFor="let child of children">
        {{child.template}}
      </div>
    </div>
  `
})
export class ParentComponent implements OnInit{
  @Input() parent:Parent;
  children: any;
  //@Input('master') masterName: string;
  constructor(private parentService:ParentService) {
  }

  ngOnInit() {
    this.parentService.getChildren()
      .subscribe(children => this.children = children);
  }
}
