import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ApiMock, ApiMockService} from "../../../utils";

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private _subject$: BehaviorSubject<Person>;
  private _api: ApiMock<Person>;

  constructor(api: ApiMockService) {
    this._subject$ = new BehaviorSubject<Person>({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
    this.currentPerson$ = this._subject$.asObservable();

    this._api = api.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '123456789'
    }, 1000);
  }

  currentPerson$: Observable<Readonly<Person>>;

  updateCurrentPerson(person: Required<Person>): void {
    this._subject$.next(person);
  }

  fetchPersonData() {
    this._api.get().subscribe(data => { this.updateCurrentPerson(data) });
  }
}
