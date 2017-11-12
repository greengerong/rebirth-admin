import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthorizationService } from 'rebirth-permission';
import { Body, POST, RebirthHttp } from 'rebirth-http';
import { HttpClient } from '@angular/common/http';
import { CurrentUser } from '../shared/model/current-user.model';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService extends RebirthHttp {
  constructor(
    http: HttpClient,
    private authorizationService: AuthorizationService
  ) {
    super(http);
  }

  login(loginInfo: {
    username: string;
    password: string;
  }): Observable<CurrentUser> {
    const authorizationService = this.authorizationService;
    return this.innerLogin(loginInfo).map(user => {
      authorizationService.setCurrentUser(user);
      return user;
    });
  }

  @POST('login')
  private innerLogin(@Body body): Observable<CurrentUser> {
    return null;
  }
}
