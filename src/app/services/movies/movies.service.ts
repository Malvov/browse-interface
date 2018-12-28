import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SERVICES_URL } from 'src/app/config/config';
// import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {}

   getMovies() {
    let url = SERVICES_URL + '/movies';
     return this.http.get(url);
   }

   searchMovies(term: string) {
     let url = SERVICES_URL + '/movies?term=' + term;
     return this.http.get(url);
   }

   getMovie(id: string) {
     let url = SERVICES_URL + '/movies/' + id;
     return this.http.get(url);
   }

}
