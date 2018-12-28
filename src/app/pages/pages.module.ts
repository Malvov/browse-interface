import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { PeopleComponent } from './people/people.component';
import { PAGES_ROUTES } from './pages.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchInputComponent } from '../shared/search-input/search-input.component';
import { PersonComponent } from './people/person.component';



@NgModule({
  declarations: [
    PagesComponent,
    PeopleComponent,
    SearchInputComponent,
    PersonComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
      PAGES_ROUTES,
      CommonModule,
      RouterModule,
      FormsModule
  ]
})
export class PagesModule {

}
