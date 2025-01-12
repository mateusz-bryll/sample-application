import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";

export interface ApiMock<T> {
  get(): Observable<T>;
}

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {
  create<T>(data: T, fetchDelay: number): ApiMock<T> {
    return new ObservableApiMock(data, fetchDelay);
  }
}

class ObservableApiMock<T> implements ApiMock<T> {
  constructor(private readonly _data: T, private readonly _fetchDelay: number) { }

  get(): Observable<T> {
    return of(this._data).pipe(delay(this._fetchDelay));
  }
}
