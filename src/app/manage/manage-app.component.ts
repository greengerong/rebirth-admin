import { Component } from '@angular/core';
import { menuBar } from './meun-options';

@Component({
  selector: 'app-manage-app',
  templateUrl: './manage-app.component.html',
  styleUrls: ['./manage-app.component.scss']
})
export class ManageAppComponent {
  menus = menuBar;

}
