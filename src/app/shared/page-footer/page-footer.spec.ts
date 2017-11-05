import { TestBed, inject } from '@angular/core/testing';
import { PageFooterComponent } from './index';
import { TestBedUtils } from '../../../test-utils/test-bed-utils';
import { By } from '@angular/platform-browser';

describe('Page footer Component', () => {

  beforeEach(() => {
    TestBedUtils.configureTestingModule({
      declarations: [PageFooterComponent],
    }, { ignoreShareModule: true });
  });


  it('should contain a footer text', () => {

    const fixture = TestBed.createComponent(PageFooterComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.footer')).nativeElement.textContent.length).toBeGreaterThan(0);
  });
});
