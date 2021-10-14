import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {

  genre: Genre = {
    name: '',
    language: {
      languageId: 0,
      tag: '',
      name: ''
    },
    active: true
  }

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
  }

  createGenre(): void {
    this.genreService.create(this.genre).subscribe(() => {
    })
  }

}
