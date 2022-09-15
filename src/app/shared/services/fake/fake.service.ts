import { Injectable } from '@angular/core';
import { Observable, take, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor() { }

  fakeDelete(): Observable<number> {
    return timer(400).pipe(take(1));
  }

}
