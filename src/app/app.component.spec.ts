import { TestBed, async, inject } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RebirthNGConfig } from 'rebirth-ng';
import { By } from '@angular/platform-browser';
import { TestBedUtils } from '../test-utils/test-bed-utils';
import { RebirthHttpProvider } from 'rebirth-http';

describe('AppComponent', () => {
  let fixture;
  beforeEach(async(() => {
    TestBedUtils.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should setup router outlet`, async(() => {
    expect(fixture.debugElement.query(By.css('router-outlet')).nativeElement).toBeDefined();
  }));

  it(`should setup @Rebirth/NG`, async(inject([RebirthNGConfig], (rebirthNGConfig: RebirthNGConfig) => {
    expect(rebirthNGConfig.rootContainer).toBeDefined();
  })));

  it(`should setup @Rebirth/Http`, async(inject([RebirthHttpProvider], (rebirthHttpProvider: RebirthHttpProvider) => {
    expect(rebirthHttpProvider.getInterceptors().length).toBeGreaterThan(0);
  })));

});
