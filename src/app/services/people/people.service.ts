import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SERVICES_URL } from 'src/app/config/config';
// import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {}

   getPeople() {
    let url = SERVICES_URL + '/people.json';
     return this.http.get(url);
   }

   searchPeople(term: string) {
     let url = SERVICES_URL + '/people?term=' + term;
     return this.http.get(url);
   }

}
