import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {
    // this.login(); test
    // { email: 'admin@localhost.com', password: 'admin' }
  }

  login(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.loginService.login(form.value)
      .subscribe((user) => console.log(`login success. Get user:`, user));
  }
}
