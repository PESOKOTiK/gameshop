import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent implements OnInit {
  games: Game[]=[];
  selectedGame: Game={
    id: 0,
    name: '',
    genreId: 0,
    rating: 0,
    description: '',
    poster: '',
    price: 0,
    developerId: 0,
    year: 0
  };;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames().subscribe(
      (data) => {
        this.games = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  expandGameCell(game: Game) {
    if (this.selectedGame && this.selectedGame.id === game.id) {
      this.selectedGame = {
        id: 0,
        name: '',
        genreId: 0,
        rating: 0,
        description: '',
        poster: '',
        price: 0,
        developerId: 0,
        year: 0
      };
    } else {
      this.selectedGame = game;
    }
  }
}