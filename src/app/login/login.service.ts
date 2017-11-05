import { Observable } from 'rxjs/Observable';
import { CurrentUser } from '../shared';
import { Injectable } from '@angular/core';
import { AuthorizationService } from 'rebirth-permission';
import { Body, POST, RebirthHttp } from 'rebirth-http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService extends RebirthHttp {

  constructor(http: HttpClient,
              private router: Router,
              private authorizationService: AuthorizationService) {
    super(http);
  }

  login(loginInfo: { email: string; password: string }): Observable<CurrentUser> {
    const authorizationService = this.authorizationService;
    return this.innerLogin(loginInfo)
      .map(user => {
        authorizationService.setCurrentUser(user);
        return user;
      })
      .do(() => {
        this.router.navigateByUrl('/manage');
      });
  }


  logout(): void {
    this.authorizationService.logout();
  }

  @POST('login')
  private innerLogin(@Body body): Observable<CurrentUser> {
    return null;
  }


}
