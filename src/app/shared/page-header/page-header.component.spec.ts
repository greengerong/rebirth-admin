import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PageHeaderComponent } from './page-header.component';
import { TestBedUtils } from '../../../test-utils';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(
    async(() => {
      TestBedUtils.configureTestingModule(
        {
          declarations: [PageHeaderComponent],
        },
        { ignoreShareModule: true },
      ).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render page header', () => {
    expect(
      fixture.debugElement.query(By.css('.main')).nativeElement,
    ).toBeDefined();
    expect(
      fixture.debugElement.query(By.css('.expandor')).nativeElement,
    ).toBeDefined();
    expect(
      fixture.debugElement.query(By.css('.fa-bars')).nativeElement,
    ).toBeDefined();
    expect(
      fixture.debugElement.query(By.css('.logo-area')).nativeElement,
    ).toBeDefined();
  });

  it('should call emit method when click expandor', () => {
    let onExpand = false;
    component.onExpand.subscribe(() => {
      onExpand = true;
    });

    component.handleExpandClick();
    expect(onExpand).toBeTruthy();
  });
});
