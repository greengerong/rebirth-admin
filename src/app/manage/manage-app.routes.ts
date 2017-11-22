import { Routes } from '@angular/router';
import { ManageAppComponent } from './manage-app.component';
import { AuthLoginPermission } from 'rebirth-permission';
import { OrderMockComponent } from './order-mock/order-mock.component';
import { UserMockComponent } from './user-mock/user-mock.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '',
    component: ManageAppComponent,
    canActivate: [AuthLoginPermission],
    children: [
      // can use role AuthRolePermission
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: OrderMockComponent, data: { title: 'Home' } },
      {
        path: 'order',
        component: OrderMockComponent,
        data: { title: 'Order' },
      },
      { path: 'user', component: UserMockComponent, data: { title: 'User' } },
      {
        path: 'document',
        component: UserMockComponent,
        data: { title: 'Document' },
      },
    ],
  },
];
