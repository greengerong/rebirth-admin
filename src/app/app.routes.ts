import { Routes } from '@angular/router';


export const ROUTER_CONFIG: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/public/home' },
  { path: 'public', loadChildren: 'app/public/public-app.module#PublicAppModule' },
  { path: 'manage', loadChildren: 'app/manage/manage-app.module#ManageAppModule' },
];

