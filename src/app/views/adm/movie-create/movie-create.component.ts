import { MovieService } from 'src/app/services/movie.service';
import { Movie } from './../../../models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movie: Movie = {
        title: '',
        synopsis: '',
        genre: {
          genreId: 1,
          name: '',
          active: true,
          language: {
            languageId: 1,
            tag: '',
            name: ''
        }
        },
        image: '',
        releaseDate: 2021,
        time: '',
        language: {
          languageId: 1,
          tag: '',
          name: ''
        },
        active: true
  }

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  createMovie(): void {
    this.movieService.create(this.movie).subscribe(() => {
    })
  }

}
