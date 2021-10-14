import { Movie } from './../../../models/movie.model';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

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

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.movieService.readById(id).subscribe(movie => {
    this.movie = movie
    })
  }

  updateMovie(): void {
    this.movieService.update(this.movie).subscribe(() => {
      this.router.navigate(['adm/movie'])
    })
  }

  cancel(): void {
    this.router.navigate(['adm/movie'])
  }

}
