import { TestBed, async, inject } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { RebirthNGConfig, RebirthNGModule } from 'rebirth-ng';
import { RebirthHttpModule, RebirthHttpProvider } from 'rebirth-http';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        RebirthNGModule.forRoot(),
        RebirthHttpModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
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
