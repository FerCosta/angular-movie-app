import { Genre } from 'src/app/models/genre.model';
import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-genre-delete',
  templateUrl: './genre-delete.component.html',
  styleUrls: ['./genre-delete.component.css']
})
export class GenreDeleteComponent implements OnInit {

  genre: Genre
  // genre: Genre = {
  //   name: '',
  //   language: {
  //     languageId: 1,
  //     tag: '',
  //     name: ''
  //   },
  //   active: true,
  // }


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

  deleteGenre(): void {
    this.genreService.delete(this.genre).subscribe(() => {
      this.router.navigate(['adm/genre'])
    })
  }

  cancel(): void {
    this.router.navigate(['adm/genre'])
  }

}
