import { Routes } from '@angular/router';
import { PublicAppComponent } from './public-app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: PublicAppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/public/login' },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
    ]
  }
];
