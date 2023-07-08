import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Developer } from './developer.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  private apiUrl = 'http://localhost:5000/api/developers'; // Замените на ваш URL веб-API

  constructor(private http: HttpClient) { }

  getDevelopers(): Observable<Developer[]> {
    return this.http.get<Developer[]>(this.apiUrl);
  }

  getDeveloperById(id: number): Observable<Developer> {
    return this.http.get<Developer>(`${this.apiUrl}/${id}`);
  }

  updateDeveloper(id: number, developer: Developer): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, developer);
  }

  addDeveloper(developer: Developer): Observable<Developer> {
    return this.http.post<Developer>(this.apiUrl, developer);
  }

  deleteDeveloper(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}