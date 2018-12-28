import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/service.index';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})

export class MovieComponent implements OnInit {

  movie: any;
  movieId: string;
  constructor(
    public _moviessService: MoviesService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.movieId = params['id'];
      this.getPerson(this.movieId);
    });
  }

  getPerson(id: string) {
    this._moviessService.getMovie(id).subscribe( (res: any) => {
      this.movie = res;
      console.log(this.movie);
    });
  }
}
