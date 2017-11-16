import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ValidationService } from '../core/validation/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginErrorMessage: string;
  title = environment.title;
  loginForm: FormGroup;
  showError: boolean;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private validationService: ValidationService,
  ) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loginErrorMessage = this.validationService.getMessage(
      'validation.login',
    );
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService
      .login(this.loginForm.value)
      .subscribe(
        user => this.router.navigateByUrl('/manage/home'),
        () => (this.showError = true),
      );
  }
}
