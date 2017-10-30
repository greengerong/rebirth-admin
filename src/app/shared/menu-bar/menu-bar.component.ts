import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MenuBarService } from './menu-bar.service';
import { WindowRef } from 'rebirth-ng';
import { Debounce } from '../debounce/debounce';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  host: {
    '[class]': `getClassNames()`,
  },
  exportAs: 'menuBar'
})
export class MenuBarComponent implements OnInit {
  static MAX_MIDDLE_SCREEN = 768;
  static MIN_MIDDLE_SCREEN = 576;
  @Input() configs;
  @Input() isTextMenuBarOpen: boolean;

  isIconMenuBarOpen = false;

  constructor(private menuBarService: MenuBarService, private windowRef: WindowRef) {
  }

  getClassNames() {
    let classNames = '';
    classNames += this.isTextMenuBarOpen ? 'open-text-menu' : 'hide-text-menu';
    classNames += ' ';
    classNames += this.isIconMenuBarOpen ? 'open-icon-menu' : 'hide-icon-menu';
    return classNames;
  }

  @HostListener('window:resize')
  @Debounce()
  updateMenuBarStatus() {
    this.isTextMenuBarOpen = this.windowRef.innerWidth >= MenuBarComponent.MAX_MIDDLE_SCREEN;
    this.isIconMenuBarOpen = this.windowRef.innerWidth >= MenuBarComponent.MIN_MIDDLE_SCREEN;
  }

  ngOnInit(): void {
    this.menuBarService.initPath();
    this.updateMenuBarStatus();
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
    this.isTextMenuBarOpen = !this.isTextMenuBarOpen;
    this.isIconMenuBarOpen = this.isTextMenuBarOpen;
  }

}
