import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {CommunicationService} from "../communication-service/communication.service";
import {Observable} from "rxjs";
import {Person} from "@sample-application/person-model";

@Component({
  selector: 'app-component-a',
  imports: [CommonModule, MatFormField, MatLabel, MatInput, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.scss',
})
export class ComponentAComponent {

  person$: Observable<Person>;

  constructor(communication: CommunicationService) {
    this.person$ = communication.currentPerson$;
  }
}
