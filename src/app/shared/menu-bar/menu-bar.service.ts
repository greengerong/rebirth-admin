import { Injectable } from '@angular/core';
import { AuthorizationService } from 'rebirth-permission';
import { Router } from '@angular/router';

@Injectable()
export class MenuBarService {

  path;

  constructor(private router: Router,
              private authorizationService: AuthorizationService) {
  }

  initPath() {
    this.path = this.router.url;
  }

  hasPrivilege(role) {
    const allowedRole = Array.isArray(role) ? role : [role];
    return this.authorizationService.hasRight(allowedRole) as boolean;
  }

  isStartWithCurrentPath(path) {
    return this.path.indexOf(path) !== -1;
  }
}
