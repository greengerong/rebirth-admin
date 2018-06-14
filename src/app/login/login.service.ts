import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthorizationService } from 'rebirth-permission';
import { Body, POST, RebirthHttp } from 'rebirth-http';
import { HttpClient } from '@angular/common/http';
import { CurrentUser } from '../shared/model/current-user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService extends RebirthHttp {
  constructor(
    http: HttpClient,
    private authorizationService: AuthorizationService,
  ) {
    super(http);
  }

  login(loginInfo: {
    username: string;
    password: string;
  }): Observable<CurrentUser> {
    const authorizationService = this.authorizationService;
    return this.innerLogin(loginInfo).pipe(
      map(user => {
        authorizationService.setCurrentUser(user);
        return user;
      }),
    );
  }

  @POST('login')
  // @loading(true)
  private innerLogin(@Body body): Observable<CurrentUser> {
    return null;
  }
}
