import { Routes } from '@angular/router';
import { ManageAppComponent } from './manage-app.component';
import { AuthLoginPermission } from 'rebirth-permission';

export const ROUTER_CONFIG: Routes = [
  {
    path: '',
    component: ManageAppComponent,
    canActivate: [AuthLoginPermission,],
    children: [

      // can use role AuthRolePermission
      // { path: '', pathMatch: 'full', redirectTo: '/manage/home' },
    ]
  }
];
