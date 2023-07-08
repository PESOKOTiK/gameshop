import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5055/api/users'; // Замените на ваш URL веб-API
  isLoggedIn: boolean = false;
  loggedInUser: string = '';
  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}