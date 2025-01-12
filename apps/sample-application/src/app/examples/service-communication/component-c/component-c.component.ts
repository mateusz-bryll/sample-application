import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CommunicationService} from "../communication-service/communication.service";

@Component({
  selector: 'app-component-c',
    imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './component-c.component.html',
  styleUrl: './component-c.component.scss',
})
export class ComponentCComponent {
  constructor(readonly communication: CommunicationService) {
  }
}
