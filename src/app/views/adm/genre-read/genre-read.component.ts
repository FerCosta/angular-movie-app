import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre-read',
  templateUrl: './genre-read.component.html',
  styleUrls: ['./genre-read.component.css']
})
export class GenreReadComponent implements OnInit {

  genres: Genre[]

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.read().subscribe(genres => {
      this.genres = genres
  })
}

}
