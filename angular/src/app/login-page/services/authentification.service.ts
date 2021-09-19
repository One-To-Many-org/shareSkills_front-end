import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

export interface User {
  id: string;
  username: string;
  lastname: string;
  firstname: string;
  dateOfBirth: string;
  email: string;
  country: string;
  region: string;
  city: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private http: HttpClient) {}

  authentificationUrl = environment.apiUrl + 'login-page/login';
  isAuthUrl = environment.apiUrl + 'login-page/is-auth';
  logoutUrl = environment.apiUrl + 'login-page/logout';
  /**
   * login user
   */
  login(credentials: any): Observable<User> {
    return this.http
      .post<User>(this.authentificationUrl, credentials, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      })
      .pipe(
        tap((res) => {
          this.isLoggedIn = true;
        })
      );
  }
  /**
   * logout
   */
  logout(): Observable<void> {
    return this.http.get<any>(this.logoutUrl, httpOptions).pipe(
      tap((res) => {
       // this.isLoggedIn = res.authenticated;
      })
    );
  }
  /**
   * check authentification
   */
  isAuth(): Observable<any> {
    return this.http.get<any>(this.isAuthUrl, httpOptions).pipe(
      map((res) => {
        this.isLoggedIn = res.authenticated;
        return this.isLoggedIn;
      })
    );
  }
}
