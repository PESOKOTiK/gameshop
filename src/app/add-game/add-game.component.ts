import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';
import { Genre } from '../genre.model';
import { Developer } from '../developer.model';
import { GenreService } from '../genre.service';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {
  games: Game[] = [];
  newGame: Game = {
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
  showForm: boolean = false;
  showForm2: boolean = false;
  genres: Genre[] = [];
  developers: Developer[] = [];
  editid: number = 0;

  constructor(
    private gameService: GameService,
    private genreService: GenreService,
    private developerService: DeveloperService
  ) {}

  ngOnInit() {
    this.getGames();
    this.getGenres();
    this.getDevelopers();
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

  getGenres() {
    this.genreService.getGenres().subscribe(
      (data) => {
        this.genres = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getDevelopers() {
    this.developerService.getDevelopers().subscribe(
      (data) => {
        this.developers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteGame(id: number) {
    this.gameService.deleteGame(id).subscribe(
      () => {
        this.getGames();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addGame() {
    this.showForm2 = false;
    this.gameService.addGame(this.newGame).subscribe(
      () => {
        this.getGames();
        this.newGame = {
          id: 0,
          name: '',
          genreId: 0,
          rating: 0,
          description: '',
          poster: '',
          price: 0,
          developerId: 0,
          year: 0
        }; // Очистить форму после добавления игры
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getGenreName(genreId: number): string {
    const genre = this.genres.find((g) => g.id === genreId);
    return genre ? genre.name : '';
  }

  getDeveloperName(developerId: number): string {
    const developer = this.developers.find((d) => d.id === developerId);
    return developer ? developer.name : '';
  }

  editGame(id: number) {
    this.editid = id;
    this.showForm = false;
  }

  updateGame(id: number) {
    this.gameService.updateGame(id, this.newGame).subscribe(
      () => {
        this.editid = 0;
        this.newGame = {
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
        this.getGames();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
