import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { User } from './class/types';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true
};


@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private http: HttpClient) {}


  private authentificationUrl = environment.apiUrl + 'login-page/login';
  private isAuthUrl = environment.apiUrl + 'login-page/is-auth';
  private logoutUrl = environment.apiUrl + 'login-page/logout';
  /**
   * login user
   */
  login(credentials: any): Observable<boolean | HttpResponse<User>> {
    return this.http.post<User>(this.authentificationUrl, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response'
    })
      .pipe(
        tap(res => {
          this.isLoggedIn = true;
        })
      )
  }
  /**
   * logout
   */
  logout(): Observable<any> {
    return this.http.get<any>(this.logoutUrl, httpOptions).pipe(
      map(res => {
        this.isLoggedIn = res.authenticated;
        return this.isLoggedIn;
      })
    );
  }
  /**
   * check authentification
   */
  isAuth(): Observable<any> {
    return this.http.get<any>(this.isAuthUrl, httpOptions).pipe(
      map(res => {
        this.isLoggedIn = res.authenticated;
        return this.isLoggedIn;
      })
    );
  }
}

