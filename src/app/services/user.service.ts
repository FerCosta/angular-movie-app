
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  
  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/add-user/`, user)
  }

  read(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/listall-user/`)
  }

  readById(id: string): Observable<User> {
    const url = `${this.url}/list-user/${id}`
    return this.http.get<User>(url)
  }

  update(user: User): Observable<User> {
    const url = `${this.url}/edit-user/${user.userId}`
    return this.http.put<User>(url, user)
  }

}
