import { RouterModule, Routes} from '@angular/router';

import {PagesComponent} from './pages.component';
import { PeopleComponent } from './people/people.component';




const pagesRoutes: Routes = [
  { path: '', component: PagesComponent,
  children: [
    { path: 'people', component: PeopleComponent }
    ] }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
