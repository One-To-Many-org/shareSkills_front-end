import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { exhaustMap, map, switchMap } from 'rxjs/operators';
import { LoginPageModule } from '../login-page.module';
import { Credentials, User } from '../models/user';

const users = [
  {
    id: '1',
    firstName: 'Faizou',
    lastName: 'Aremou',
    email: 'faizouaremou@gmail.com',
    password: 'nosoup4u!',
  },
  {
    id: '2',
    firstName: 'Malo',
    lastName: 'Kouchoanou',
    email: 'ptitKouche@yahoo.fr',
    password: 'soup4me!',
  },
];
@Injectable()
export class AuthentificationMockService {
  public isLoggIn: boolean=false;
  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<User> {
    const user = users.find(
      (elmt) =>
        elmt.email === credentials.username &&
        elmt.password === credentials.password
    );
    if (user) {
      const { password, ...userloged } = user;
      this.isLoggIn = true
      return timer(3000).pipe(
       exhaustMap(()=> of(userloged))
      )
    } else {
      return timer(3000).pipe(
       switchMap(() => throwError('http Error when login'))

      );
    }
  }

  logout(): Observable<void> {
    this.isLoggIn = false;
    return of(void 0);
  }

  isAuth(): Observable<boolean> {
    return of(this.isLoggIn);
  }
}
