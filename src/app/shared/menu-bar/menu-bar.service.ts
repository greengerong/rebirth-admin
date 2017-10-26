import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthorizationService } from 'rebirth-permission';
import { Http } from '@angular/http';
import { intersection, startsWith } from 'lodash';
import { CurrentUser } from '../../shared';
import { Router } from '@angular/router';

@Injectable()
export class MenuBarService {

  path;

  constructor(protected  http: Http,
              private router: Router,
              private authorizationService: AuthorizationService) {
  }

  initPath() {
    this.path = this.router.url;
  }

  getUserRole() {
    // console.log(' current :', this.authorizationService.getCurrentUser());
    return this.authorizationService.getCurrentUser().roles;
  }

  hasPrivilege(role) {
    const allowedRole = Array.isArray(role) ? role : [role];
    // console.log('allowedRole, ', allowedRole);
    // console.log('original : ', this.getUserRole());
    return intersection(allowedRole, this.getUserRole()).length > 0;
  }

  isStartWithCurrentPath(path) {
    return startsWith(this.path, path);
  }


}