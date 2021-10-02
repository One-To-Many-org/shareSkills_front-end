import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Credentials, User } from '../models/user';
import { LoginPageModule } from '../login-page.module';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
};

@Injectable()
export class AuthentificationService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private http: HttpClient) {}

  authentificationUrl = environment.apiUrl + 'login-page/login';
  isAuthUrl = environment.apiUrl + 'login-page/is-auth';
  logoutUrl = environment.apiUrl + 'login-page/logout';

  login(credentials: Credentials): Observable<User> {
    return this.http.post<User>(this.authentificationUrl, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  logout(): Observable<void> {
    return this.http.get<any>(this.logoutUrl, httpOptions).pipe(
      tap((res) => {
        // this.isLoggedIn = res.authenticated;
      })
    );
  }

  isAuth(): Observable<any> {
    return this.http.get<any>(this.isAuthUrl, httpOptions).pipe(
      map((res) => {
        this.isLoggedIn = res.authenticated;
        return this.isLoggedIn;
      })
    );
  }
}
