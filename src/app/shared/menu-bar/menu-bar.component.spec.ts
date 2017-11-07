import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';
import { TestBedUtils } from '../../../test-utils/test-bed-utils';
import { Router } from '@angular/router';

describe('MenuBarComponent', () => {
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(async(() => {
    TestBedUtils.configureTestingModule({})
      .compileComponents();
  }));

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

  it('should show up arrow in menu item', inject([Router], () => {
    const url = '/test';
    const component = fixture.componentInstance;
    (component as any).router = { url };
    expect(component.shouldShowUpArrow(url)).toBeTruthy();
  }));

});
