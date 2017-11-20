import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';
import { TestBedUtils } from '../../../test-utils/test-bed-utils';
import { Router } from '@angular/router';
import { WindowRef } from 'rebirth-ng';

describe('MenuBarComponent', () => {
  let fixture: ComponentFixture<MenuBarComponent>;
  beforeEach(
    async(() => {
      TestBedUtils.configureTestingModule({
        providers: [
          {
            provide: WindowRef,
            useValue: { innerWidth: 0 },
          },
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarComponent);
    fixture.detectChanges();
  });

  it('should show text & icon menu', () => {
    const component = fixture.componentInstance;
    component.isTextMenuBarOpen = true;
    component.isIconMenuBarOpen = true;
    expect(component.getClassNames()).toEqual('open-text-menu open-icon-menu');
  });

  it('should hide text & icon menu', () => {
    const component = fixture.componentInstance;
    component.isTextMenuBarOpen = false;
    component.isIconMenuBarOpen = false;
    expect(component.getClassNames()).toEqual('hide-text-menu hide-icon-menu');
  });

  it(
    'should show up arrow in menu item',
    inject([Router], () => {
      const url = '/test';
      const component = fixture.componentInstance;
      (component as any).router = { url };
      expect(component.shouldShowUpArrow(url)).toBeTruthy();
    }),
  );

  it(
    'should show text bar & menu bar when toggle with window width less than middle screen',
    inject([Router], () => {
      const component = fixture.componentInstance as any;
      component.windowRef.innerWidth = MenuBarComponent.MIN_MIDDLE_SCREEN - 10;
      component.toggle();

      expect(component.isTextMenuBarOpen).toBeTruthy();
      expect(component.isIconMenuBarOpen).toBeTruthy();
    }),
  );

  it(
    'should hide text bar & show menu bar when toggle with window width greater than middle screen',
    inject([], () => {
      const component = fixture.componentInstance as any;
      component.isTextMenuBarOpen = true;
      component.windowRef.innerWidth = MenuBarComponent.MIN_MIDDLE_SCREEN + 10;
      component.toggle();

      expect(component.isTextMenuBarOpen).toBeFalsy();
      expect(component.isIconMenuBarOpen).toBeTruthy();
    }),
  );

  it(
    'should show text menu bar when click icon menu bar',
    inject([], () => {
      const component = fixture.componentInstance as any;
      const mockEvent = {
        preventDefault: () => {},
      };
      component.isTextMenuBarOpen = false;
      component.isIconMenuBarOpen = true;
      component.windowRef.innerWidth = MenuBarComponent.MIN_MIDDLE_SCREEN + 10;
      component.showTextMenuBar(mockEvent);

      expect(component.isTextMenuBarOpen).toBeTruthy();
      expect(component.isTextMenuBarOpen).toBeTruthy();
    }),
  );

  it(
    'should update menu status when window resize',
    inject([], () => {
      const component = fixture.componentInstance as any;
      let resizeEventCall = false;
      component.windowResize.subscribe(() => {
        resizeEventCall = true;
      });

      window.dispatchEvent(new Event('resize'));

      expect(resizeEventCall).toBeTruthy();
    }),
  );
});
