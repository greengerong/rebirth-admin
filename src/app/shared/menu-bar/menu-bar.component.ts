import { Component, EventEmitter, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { WindowRef } from 'rebirth-ng';
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
export class MenuBarComponent implements OnInit, OnDestroy {


  static MAX_MIDDLE_SCREEN = 768;
  static MIN_MIDDLE_SCREEN = 576;
  @Input() menuConfig: MenuConfig;
  @Input() isTextMenuBarOpen: boolean;
  isIconMenuBarOpen = false;
  windowResize = new EventEmitter<any>();
  listens: any[] = [];

  constructor(private router: Router, private renderer: Renderer2, private windowRef: WindowRef) {
  }

  getClassNames() {
    const textMenuClass = this.isTextMenuBarOpen ? 'open-text-menu' : 'hide-text-menu';
    const iconMenuClass = this.isIconMenuBarOpen ? 'open-icon-menu' : 'hide-icon-menu';
    return `${textMenuClass} ${iconMenuClass}`;
  }

  updateMenuBarStatus() {
    this.isTextMenuBarOpen = this.windowRef.innerWidth >= MenuBarComponent.MAX_MIDDLE_SCREEN;
    this.isIconMenuBarOpen = this.windowRef.innerWidth >= MenuBarComponent.MIN_MIDDLE_SCREEN;
  }

  ngOnInit(): void {
    this.updateMenuBarStatus();
    this.windowResize
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(() => this.updateMenuBarStatus());

    this.listens.push(this.renderer.listen('window', 'resize',
      ($event) => this.windowResize.emit($event)));
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

  ngOnDestroy(): void {
    this.listens.forEach(listen => listen());
  }

}
