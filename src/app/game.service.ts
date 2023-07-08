import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'http://localhost:5000/api/games'; // Замените на ваш URL веб-API

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${id}`);
  }

  updateGame(id: number, game: Game): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, game);
  }

  addGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, game);
  }

  deleteGame(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}