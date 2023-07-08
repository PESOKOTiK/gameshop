import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gameshop';
  showEditorMenu: boolean = false;
  showLoginMenu: boolean = false;
  showform: boolean = true;

  toggleEditorMenu() {
    this.showEditorMenu = !this.showEditorMenu;
    if(this.showLoginMenu)
    {
      this.showLoginMenu=!this.showLoginMenu;
    }
  }

  toggleLoginMenu() {
    this.showLoginMenu = !this.showLoginMenu;
    if(this.showEditorMenu)
    {
      this.showEditorMenu=!this.showEditorMenu;
    }
  }

  toggleAllMenu()
  {
    this.showEditorMenu=false;
    this.showLoginMenu=false;
  }
}
