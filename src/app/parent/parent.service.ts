import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ParentService {
  constructor(private http: Http) { }

  getChildren() {
    return this.http.get('app/children.json')
      .map((res: Response) => res.json());
  }
}
