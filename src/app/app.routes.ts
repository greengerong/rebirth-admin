import { Routes } from '@angular/router';


export const ROUTER_CONFIG: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'manage', loadChildren: 'app/manage/manage-app.module#ManageAppModule' },
];

