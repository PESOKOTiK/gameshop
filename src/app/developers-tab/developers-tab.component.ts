import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer.model';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-developers-tab',
  templateUrl: './developers-tab.component.html',
  styleUrls: ['./developers-tab.component.scss']
})
export class DevelopersTabComponent implements OnInit {
  developers: Developer[] = [];
  newDeveloperName: string="";
  showForm=false;
  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.getDevelopers();
  }

  getDevelopers() {
    this.developerService.getDevelopers()
      .subscribe(
        data => {
          this.developers = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteDeveloper(id: number) {
    this.developerService.deleteDeveloper(id)
      .subscribe(
        () => {
          this.getDevelopers();
        },
        error => {
          console.log(error);
        }
      );
  }

  addDeveloper() {
    if (this.newDeveloperName) {
      const newDeveloper: Developer = {
        id: 0,
        name: this.newDeveloperName
      };

      this.developerService.addDeveloper(newDeveloper)
        .subscribe(
          () => {
            this.newDeveloperName = '';
            this.getDevelopers();
          },
          error => {
            console.log(error);
          }
        );
    }
  }
}