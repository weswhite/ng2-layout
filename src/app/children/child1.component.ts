import { Component, Input } from '@angular/core';

class Child1{
  constructor(){}
}

@Component({
  selector: 'child1',
  template: `
    <div style="background-image: linear-gradient(141deg, #ffbd3d 0%, #fce473 71%, #fffe8a 100%); width: 100%; height: 100px">
      <h3>{{child1.name}}</h3>
    </div>
  `
})
export class Child1Component {
  //@Input() child1: Child1;
  //@Input('master') masterName: string;
}


