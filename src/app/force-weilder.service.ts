import { Injectable } from '@angular/core';

import { ForceWeilder } from './models/force-weilder';
import { WEILDERS } from './models/mock-force-weilder';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForceWeilderService {

  constructor() { }

  getWeilders(): Observable<ForceWeilder[]> {
    return of(WEILDERS);
  }
}
