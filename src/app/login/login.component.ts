import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = {
    id: 0,
    email: '',
    password: '',
    name: ''
  };
  users: User[]=[];
  showOk: boolean = false;
  showError: boolean = false;

  constructor(private userService: UserService,private appService: AppComponent,private router: Router) { }

  loginUser() {
    this.userService.getUser().subscribe(
      response => {
        this.users = response;
        this.showError=false;
        this.showOk=false;
        for(var user1 of this.users)
        {
          if(this.user.email == user1.email && this.user.password==user1.password)
          {
              this.showOk=true;
              this.userService.isLoggedIn=true;
              this.userService.loggedInUser=this.user.name;
              this.appService.showform = false;
              this.appService.toggleAllMenu();
              this.router.navigate(['/']);
          }
        }
        if(this.showOk==false)
        {
          this.showError=true;
        }
      },
      (error) => {
        console.log('Login failed', error);
        // Здесь можно обработать ошибку входа в систему
        this.showError=true;
      }
    );
  }
}