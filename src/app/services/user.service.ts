import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.url + '/add-user';

  constructor(private http:HttpClient) { }

  showMessage(msg: string): void {
   console.log(msg)
  }
  
  // create(user: User): Observable<User> {
  //   return this.http.post<User>(this.url, user)
  // }

}
