import { Component, Input, OnInit } from '@angular/core';
import { MenuBarService } from './menu-bar.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  @Input() configs;

  constructor(private menuBarService: MenuBarService) {
  }

  ngOnInit(): void {
    this.menuBarService.initPath();
  }

  shouldRenderCell(userRole): boolean {
    return this.menuBarService.hasPrivilege(userRole);
  }

  onToggleChildren(path): void {
    this.menuBarService.path = path;
  }

  shouldShowElement(path): boolean {
    return this.menuBarService.isStartWithCurrentPath(path);
  }

}
