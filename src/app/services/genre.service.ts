import { Genre } from './../models/genre.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  create(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(`${this.url}/add-genre/`, genre)
  }

  read(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.url}/listall-genre/`)
  }

  readById(id: string): Observable<Genre> {
    const url = `${this.url}/list-genre/${id}`
    return this.http.get<Genre>(url)
  }

  update(genre: Genre): Observable<Genre> {
    const url = `${this.url}/edit-genre/${genre.genreId}`
    return this.http.put<Genre>(url, genre)
  }

  delete(genre: Genre): Observable<Genre> {
    const url = `${this.url}/delete-genre/${genre.genreId}`
    return this.http.put<Genre>(url, genre)
  }
}
