import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {

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

deleteMovie(): void {
  this.movieService.delete(this.movie).subscribe(() => {
    this.router.navigate(['adm/movie'])
  })
}

cancel(): void {
  this.router.navigate(['adm/movie'])
}
}
