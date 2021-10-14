import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<any[]>(`${this.url}/listall-movie`)
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.url}/add-movie/`, movie)
  }

  read(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}/listall-movie/`)
  }

  readById(id: string): Observable<Movie> {
    const url = `${this.url}/list-movie/${id}`
    return this.http.get<Movie>(url)
  }

  update(movie: Movie): Observable<Movie> {
    const url = `${this.url}/edit-movie/${movie.movieId}`
    return this.http.put<Movie>(url, movie)
  }

  delete(movie: Movie): Observable<Movie> {
    const url = `${this.url}/delete-movie/${movie.movieId}`
    return this.http.put<Movie>(url, movie)
  }

}
