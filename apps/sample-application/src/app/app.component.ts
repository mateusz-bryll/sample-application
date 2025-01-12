import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";

@Component({
  imports: [RouterModule, MatToolbar, MatIcon, MatIconButton, MatDrawerContainer, MatDrawer, MatDrawerContent, MatNavList, MatListItem],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
