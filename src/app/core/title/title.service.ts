import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RoutesRecognized } from '@angular/router';
import { environment } from '../../../environments/environment';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TitleService {
  constructor(private title: Title, private router: Router) {}

  register() {
    this.router.events
      .pipe(
        filter(event => event instanceof RoutesRecognized),
        map((event: RoutesRecognized) => this.getRouteTitle(event)),
      )
      .subscribe(pageTitle => this.title.setTitle(pageTitle));
  }

  private getRouteTitle(event: RoutesRecognized) {
    let title = (event.state.root.data || {})['title'] || environment.title;
    let childRoute = event.state.root.firstChild;
    while (childRoute) {
      title = (childRoute.data || {})['title'] || title;
      childRoute = childRoute.firstChild;
    }
    return title;
  }
}
