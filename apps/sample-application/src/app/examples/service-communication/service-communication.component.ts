import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentAComponent} from "./component-a/component-a.component";
import {ComponentBComponent} from "./component-b/component-b.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ComponentCComponent} from "./component-c/component-c.component";

@Component({
  selector: 'app-service-communication',
  imports: [CommonModule, ComponentAComponent, ComponentBComponent, MatButtonModule, MatIconModule, ComponentCComponent],
  templateUrl: './service-communication.component.html',
  styleUrl: './service-communication.component.scss',
})
export class ServiceCommunicationComponent { }
