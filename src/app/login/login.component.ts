import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

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

  constructor(private userService: UserService) { }

  loginUser() {
    this.userService.getUser().subscribe(
      response => {
        if (response && response.password == this.user.password) {
          console.log('Login successful', response);
          // Здесь можно выполнить дополнительные действия после успешного входа в систему
        } else {
          console.log('Login failed: invalid email or password');
          // Здесь можно обработать ошибку неверного email или пароля
        }
      },
      (error) => {
        console.log('Login failed', error);
        // Здесь можно обработать ошибку входа в систему
      }
    );
  }
}