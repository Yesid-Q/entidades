import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { forkJoin, map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IEntity } from '../../interfaces/entity.interface';

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  readonly #url: string = `${environment.url}/entity/v2.1/entities`;

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<IEntity[]> {
    const allFetch: Observable<IEntity>[] = [];

    for (let i = 1; i <= 10; i++) {
      allFetch.push(this.getById(i));
    }

    return forkJoin(allFetch);
  }

  public getById(id: number): Observable<IEntity> {
    return this.httpClient
      .get<IEntity>(`${this.#url}/${id}`)
      .pipe(map((res: any) => res.data));
  }

  public getByIds(ids: Array<number>): Observable<IEntity[]> {
    const allFetch: Observable<IEntity>[] = [];
    
    for(let id of ids) {
      allFetch.push(this.getById(id));
    }

    return forkJoin(allFetch);
  }
}
