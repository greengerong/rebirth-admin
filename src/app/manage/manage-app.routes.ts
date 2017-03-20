import { Routes } from '@angular/router';
import { ManageAppComponent } from './manage-app.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: ManageAppComponent,
    children: [
      // { path: '', pathMatch: 'full', redirectTo: '/manage/home' },
    ]
  }
];
