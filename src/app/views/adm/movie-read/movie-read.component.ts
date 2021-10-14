import { Subscriber } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-read',
  templateUrl: './movie-read.component.html',
  styleUrls: ['./movie-read.component.css']
})
export class MovieReadComponent implements OnInit {

  movies: Movie[]

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.read().subscribe(movies => {
      this.movies = movies
    })
  }

}
