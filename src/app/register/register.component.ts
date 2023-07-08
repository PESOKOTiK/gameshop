import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = {
    id: 0,
    email: '',
    password: '',
    name: ''
  };

  constructor(private userService: UserService,private appService: AppComponent,private router: Router) { }

  registerUser() {
    this.userService.registerUser(this.user).subscribe(
      data => {
        console.log('Registration successful', data);
        this.userService.isLoggedIn=true;
        this.userService.loggedInUser=this.user.name;
        this.appService.showform = false;
        this.router.navigate(['/games']);
        // Здесь можно выполнить дополнительные действия после успешной регистрации
      },
      (error) => {
        console.log('Registration failed', error);
        // Здесь можно обработать ошибку регистрации
      }
    );
  }
}