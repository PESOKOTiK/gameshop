import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from './genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apiUrl = 'http://localhost:5055/api/genres'; // Замените на ваш URL веб-API

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiUrl);
  }

  getGenreById(id: number): Observable<Genre> {
    return this.http.get<Genre>(`${this.apiUrl}/${id}`);
  }

  updateGenre(id: number, genre: Genre): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, genre);
  }

  addGenre(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.apiUrl, genre);
  }

  deleteGenre(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}