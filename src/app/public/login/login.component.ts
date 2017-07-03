import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = {
    email: '',
    password: '',
  };

  constructor(private loginService: LoginService) {
    // this.login(); test
    // { email: 'admin@localhost.com', password: 'admin' }
  }

  login() {
    this.loginService.login(this.form)
      .subscribe((user) => console.log(`login success. Get user:`, user));
  }
}
