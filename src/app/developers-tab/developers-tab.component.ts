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
  showForm2=false;
  editid=0;
  newDevName="";
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

  editDeveloper(id: number) {
    this.editid = id;
  }

  updateDeveloper(id: number, name: string) {
    const updatedDeveloper: Developer = {
      id: id,
      name: name
    };

    this.developerService.updateDeveloper(id, updatedDeveloper).subscribe(
      data => {
        this.editid = 0;
        this.newDevName = '';
        this.getDevelopers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteDeveloper(id: number) {
    this.developerService.deleteDeveloper(id)
      .subscribe(
       data => {
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
          data => {
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