import { Routes } from '@angular/router';
import { PublicAppComponent } from './public-app.component';
import { HomeComponent } from './home/home.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: PublicAppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/public/home' },
      { path: 'home', component: HomeComponent },
    ]
  }
];
