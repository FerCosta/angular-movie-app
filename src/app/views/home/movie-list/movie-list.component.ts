import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/components/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    this.movieService.getMovie().subscribe(data => {
      //this.movies = data.title;
      console.log(this.movies)
    });
  }

}
