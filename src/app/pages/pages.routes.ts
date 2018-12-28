import { RouterModule, Routes} from '@angular/router';

import {PagesComponent} from './pages.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person.component';




const pagesRoutes: Routes = [
  { path: '', component: PagesComponent,
  children: [
    { path: 'people', component: PeopleComponent },
    { path: 'people/:id', component: PersonComponent }
    ] }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
