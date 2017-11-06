import { Component, HostListener, Input, OnInit } from '@angular/core';
import { WindowRef } from 'rebirth-ng';
import { Debounce } from '../debounce/debounce';
import { MenuConfig } from './menu-config.model';
import { Router } from '@angular/router';

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
  @Input() menuConfig: MenuConfig;
  @Input() isTextMenuBarOpen: boolean;
  isIconMenuBarOpen = false;

  constructor(private router: Router, private windowRef: WindowRef) {
  }

  getClassNames() {
    const textMenuClass = this.isTextMenuBarOpen ? 'open-text-menu' : 'hide-text-menu';
    const iconMenuClass = this.isIconMenuBarOpen ? 'open-icon-menu' : 'hide-icon-menu';
    return `${textMenuClass} ${iconMenuClass}`;
  }

  @HostListener('window:resize')
  @Debounce()
  updateMenuBarStatus() {
    this.isTextMenuBarOpen = this.windowRef.innerWidth >= MenuBarComponent.MAX_MIDDLE_SCREEN;
    this.isIconMenuBarOpen = this.windowRef.innerWidth >= MenuBarComponent.MIN_MIDDLE_SCREEN;
  }

  ngOnInit(): void {
    this.updateMenuBarStatus();
  }

  shouldShowElement(path): boolean {
    return this.router.url.indexOf(path) !== -1;
  }

  toggle() {
    this.isTextMenuBarOpen = !this.isTextMenuBarOpen;
    if (this.windowRef.innerWidth >= MenuBarComponent.MIN_MIDDLE_SCREEN) {
      this.isIconMenuBarOpen = true;
    } else {
      this.isIconMenuBarOpen = this.isTextMenuBarOpen;
    }
  }

}
