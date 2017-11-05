import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';
import { CollapseDirective } from '../collapse/collapse.directive';
import { TestBedUtils } from '../../../test-utils/test-bed-utils';
import { MenuBarService } from './menu-bar.service';

describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(async(() => {
    TestBedUtils.configureTestingModule({
      declarations: [CollapseDirective, MenuBarComponent],
      providers: [MenuBarService]
    }, { ignoreShareModule: true })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
