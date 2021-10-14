import { GenreService } from 'src/app/services/genre.service';
import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-genre-update',
  templateUrl: './genre-update.component.html',
  styleUrls: ['./genre-update.component.css']
})
export class GenreUpdateComponent implements OnInit {

  genre: Genre = {
    name: '',
    language: {
      languageId: 1,
      tag: '',
      name: ''
    },
    active: true,
  }

  constructor(
    private genreService: GenreService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.genreService.readById(id).subscribe(genre => {
      this.genre = genre
    })
  }

  updateGenre(): void {
    this.genreService.update(this.genre).subscribe(() => {
      this.router.navigate(['adm/genre'])
    })
  }

  cancel(): void {
    this.router.navigate(['adm/genre'])
  }

}
