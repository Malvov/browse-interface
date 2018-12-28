import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from '../../services/service.index';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    public _moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this._moviesService.getMovies().subscribe((movies: any) => {
      console.log(movies);
      this.movies = movies;
    });
  }

  searchMovies(term: string) {
    this._moviesService.searchMovies(term).subscribe((movies: any) => {
      this.movies = movies;
    });
  }

}
