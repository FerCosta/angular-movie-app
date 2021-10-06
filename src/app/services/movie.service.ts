import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class MovieService {

  private url = environment.url;


  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<any[]>(`${this.url}/listall-movie`);
  }

}
