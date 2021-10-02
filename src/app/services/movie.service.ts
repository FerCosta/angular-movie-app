import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../components/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = environment.url;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getMovie(): Observable<Movie> {
    return this.httpClient.get<Movie>(this.url + '/listall-movie')
  }
}
