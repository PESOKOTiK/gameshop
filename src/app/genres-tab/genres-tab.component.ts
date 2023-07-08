import { Component, OnInit } from '@angular/core';
import { Genre } from '../genre.model';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-genres-tab',
  templateUrl: './genres-tab.component.html',
  styleUrls: ['./genres-tab.component.scss']
})
export class GenresTabComponent implements OnInit {
  genres: Genre[]=[];
  newGenreName: string="";
  editid = 0;
  showForm: boolean = false;
  showForm2: boolean = false;

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres() {
    this.genreService.getGenres().subscribe(
      data => {
        this.genres = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteGenre(id: number) {
    this.genreService.deleteGenre(id).subscribe(
      data => {
        this.getGenres();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editGenre(id: number) {
    this.editid = id;
  }

  updateGenre(id: number, name: string) {
    const updatedGenre: Genre = {
      id: id,
      name: name
    };

    this.genreService.updateGenre(id, updatedGenre).subscribe(
      data => {
        this.editid = 0;
        this.newGenreName = '';
        this.getGenres();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addGenre() {
    const newGenre: Genre = {
      id: 0,
      name: this.newGenreName
    };

    this.genreService.addGenre(newGenre).subscribe(
      data => {
        this.getGenres();
        this.newGenreName = ''; // Очистить поле ввода после добавления жанра
      },
      (error) => {
        console.log(error);
      }
    );
  }
}