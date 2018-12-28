import { RouterModule, Routes} from '@angular/router';

import {PagesComponent} from './pages.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person.component';
import { MovieComponent } from './movies/movie.component';
import { MoviesComponent } from './movies/movies.component';




const pagesRoutes: Routes = [
  { path: '', component: PagesComponent,
  children: [
    { path: 'people', component: PeopleComponent },
    { path: 'people/:id', component: PersonComponent },
    { path: 'movies', component: MoviesComponent},
    { path: 'movies/:id', component: MovieComponent }
    ] }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
