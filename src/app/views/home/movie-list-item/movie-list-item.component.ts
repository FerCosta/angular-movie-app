import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  movie: Array<any>;

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.movieService.list().subscribe(data => this.movie = data);
  }

}
