import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
//import 'rxjs/add/operator/map';

@Injectable()
export class ParentService {
  constructor(private http: Http) { }

  getChildren() {
    const response = [
      {
        "component": "Child1Component",
        "template": "<child1></child1>"
      },
      {
        "component": "Child2Component",
        "template": "<child2></child2>"
      },
      {
        "component": "Child3Component",
        "template": "<child3></child3>"
      }
    ]

    return response;

    // return this.http.get('app/children.json')
    //   .map((res: Response) => (res.json()));
  }
}
