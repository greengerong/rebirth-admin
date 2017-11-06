import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { LoginService } from '../core/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = environment.title;
  loginForm: FormGroup;
  showError: boolean;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.login(this.loginForm.value)
      .subscribe(
        (user) => console.log(`login success. Get user:`, user),
        () => this.showError = true
      );
  }
}

