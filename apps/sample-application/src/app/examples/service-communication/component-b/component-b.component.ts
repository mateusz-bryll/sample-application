import {Component, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {CommunicationService, Person} from "../communication-service/communication.service";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-component-b',
  imports: [CommonModule, MatCard, MatCardTitle, MatCardSubtitle, MatCardHeader, MatCardContent, MatFormField, MatLabel, MatInput, ReactiveFormsModule, MatCardActions, MatButton],
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.scss',
})
export class ComponentBComponent implements OnDestroy {

  private _personDataSubscription: Subscription;

  personForm: FormGroup;

  constructor(fb: FormBuilder, private readonly _communication: CommunicationService) {
    this.personForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      phone: ['', [ Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]{9}') ]],
    });

    this._personDataSubscription = _communication.currentPerson$.subscribe(person => {
      this.personForm.setValue(person);
    });
  }

  saveChanges() {
    const person = this.personForm.value as Person;
    this._communication.updateCurrentPerson(person);
  }

  ngOnDestroy(): void {
    if (this._personDataSubscription) {
      this._personDataSubscription.unsubscribe();
    }
  }

}
