import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {
    // this.login(); test
  }

  login() {
    this.loginService.login({ email: 'admin@localhost.com', password: 'admin' })
      .subscribe((user) => console.log(`login success. Get user:`, user));
  }
}
