import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "@sample-application/person-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private readonly _http: HttpClient) { }

  getPerson(id: number): Observable<Person> {
    return this._http.get<Person>(`/api/people/${id}`);
  }
}
