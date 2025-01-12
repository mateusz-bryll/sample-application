import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Person} from "@sample-application/person-model";
import {ApiService} from "../../../utils";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private _subject$: BehaviorSubject<Person>;

  constructor(private readonly _api: ApiService) {
    this._subject$ = new BehaviorSubject<Person>({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
    this.currentPerson$ = this._subject$.asObservable();
  }

  currentPerson$: Observable<Readonly<Person>>;

  updateCurrentPerson(person: Required<Person>): void {
    this._subject$.next(person);
  }

  fetchPersonData() {
    this._api.getPerson(1).subscribe(data => { this.updateCurrentPerson(data) });
  }
}
