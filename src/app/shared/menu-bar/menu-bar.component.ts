import { Component, Input, OnInit } from '@angular/core';
import { MenuBarService } from './menu-bar.service';
import { WindowRef } from 'rebirth-ng';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  host: {
    '[class]': 'isOpen ? "open-menu" : "hide-menu"'
  },
  exportAs: 'menuBar'
})
export class MenuBarComponent implements OnInit {
  static MAX_MIDDLE_SCREEN = 768;
  @Input() configs;

  @Input() isOpen: boolean;

  constructor(private menuBarService: MenuBarService, windowRef: WindowRef) {
    this.isOpen = windowRef.innerWidth >= MenuBarComponent.MAX_MIDDLE_SCREEN;
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

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
