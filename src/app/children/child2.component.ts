import { Component, Input } from '@angular/core';

class Child2{
  constructor(){}
}

@Component({
  selector: 'child2',
  template: `
   <div style="background-image: linear-gradient(141deg, #f32a3e 0%, #ed6c63 71%, #f39376 100%); width: 100%; height: 100px">
      <h3>{{child2.name}}</h3>
    </div>
  `
})
export class Child1Component {
  @Input() child2: Child2;
  //@Input('master') masterName: string;
}
