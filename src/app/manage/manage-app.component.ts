import { Component, OnInit } from '@angular/core';
import { MenuConfig } from '../shared/menu-bar/menu-config.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-manage-app',
  templateUrl: './manage-app.component.html',
  styleUrls: ['./manage-app.component.scss']
})
export class ManageAppComponent implements OnInit {

  menuConfig: MenuConfig;

  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
    this.menuService.getMenuConfig()
      .subscribe(menuConfig => this.menuConfig = menuConfig);
  }
}
