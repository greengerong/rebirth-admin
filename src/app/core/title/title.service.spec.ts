import { EventEmitter } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { TitleService } from './title.service';
import { Router, RouterEvent, RoutesRecognized } from '@angular/router';
import { Title } from '@angular/platform-browser';

describe('TitleService', () => {
  const router = {
    events: new EventEmitter<RouterEvent>(),
  };
  const titleService = {
    title: '',
    setTitle: title => {
      titleService.title = title;
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TitleService,
        {
          provide: Router,
          useValue: router,
        },
        {
          provide: Title,
          useValue: titleService,
        },
      ],
    });
  });

  it(
    'should set title when route change',
    inject([TitleService], (service: TitleService) => {
      const pageTitle = 'Login';
      service.register();
      const routerStateSnapshot = {
        root: {
          firstChild: {
            data: { role: 'admin' },
            firstChild: { firstChild: { data: { title: pageTitle } } },
          },
        },
      } as any;
      router.events.emit(
        new RoutesRecognized(0, '/login', '/login', routerStateSnapshot),
      );
      expect(titleService.title).toEqual(pageTitle);
    }),
  );
});
