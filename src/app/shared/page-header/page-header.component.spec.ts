import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
    expect(fixture.debugElement.nativeElement.textContent).toContain(
      'page-header works',
    );
  });
});
