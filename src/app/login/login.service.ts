import { Observable } from 'rxjs/Observable';
import { CurrentUser } from '../shared';
import { Injectable } from '@angular/core';
import { AuthorizationService } from 'rebirth-permission';
import { Body, POST, RebirthHttp, RebirthHttpProvider } from 'rebirth-http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService extends RebirthHttp {

  constructor(protected  http: HttpClient,
              protected rebirthHttpProvider: RebirthHttpProvider,
              private router: Router,
              private authorizationService: AuthorizationService) {
    super(http);
  }

  login(loginInfo: { email: string; password: string }): Observable<CurrentUser> {
    const authorizationService = this.authorizationService;
    const rebirthHttpProvider = this.rebirthHttpProvider;

    return this.innerLogin(loginInfo)
      .map(user => {
        authorizationService.setCurrentUser(user);
        rebirthHttpProvider.headers({ Authorization: user.token });
        return user;
      })
      .do(() => {
        console.log('router :', this.router);
        this.router.navigateByUrl('/manage');
      });
  }


  logout(): void {
    this.authorizationService.logout();
  }

  @POST('http://localhost:8000/api/login')
  private innerLogin(@Body body): Observable<CurrentUser> {
    return null;
  }


}
