import { Route } from '@angular/router';
import {ServiceCommunicationComponent} from "./examples";

export const appRoutes: Route[] = [
  {path: '', redirectTo: 'service-communication', pathMatch: 'full'},
 { path: 'service-communication', component: ServiceCommunicationComponent },
];
