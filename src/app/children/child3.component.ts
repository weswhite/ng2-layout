import { Component, Input } from '@angular/core';

class Child3{
  constructor(){}
}

@Component({
  selector: 'child3',
  template: `
    <div style="background-image: linear-gradient(141deg, #13bfdf 0%, #42afe3 71%, #53a1eb 100%); width: 100%; height: 100px">
      <h3>{{child3.name}}</h3>
    </div>
  `
})
export class Child3Component {
  //@Input() child3: Child3;
  //@Input('master') masterName: string;
}
