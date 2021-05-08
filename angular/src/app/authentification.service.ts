import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './class/types';


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
  constructor(private http: HttpClient) { }

  authentificationUrl = environment.apiUrl + 'login-page/login';
  isAuthUrl = environment.apiUrl + 'login-page/is-auth';
  logoutUrl = environment.apiUrl + 'login-page/logout';
  /**
   * login user
   */
  login(credentials: any): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.authentificationUrl, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response'
    })
      .pipe(
        tap(val => {
          this.isLoggedIn = true;
        })

        // adding catch error handlers
        // );
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
