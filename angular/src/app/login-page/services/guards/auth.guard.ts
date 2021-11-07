import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { AuthentificationService } from '../authentification.service';
import * as fromLoginPage from '../../store/login-page.selectors';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthentificationService,
    private router: Router,
    private store: Store
  ) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkStoreAuthentication().pipe(
      mergeMap((storeAuth) => {
        // tslint:disable-next-line: curly
        if (storeAuth) return of(true);
        return of(false);
      }),
      map((storeOrApiauth) => {
        if (!storeOrApiauth) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
      })
    );
  }
  checkStoreAuthentication() {
    return this.store.select(fromLoginPage.selectIsLoggedIn).pipe(take(1));
  }

  //todo: in real app use and test this function
  checkApiAuthentication() {
    return this.authService.isAuth().pipe(
      map((isLoggedIn) => isLoggedIn),
      catchError(() => of(false))
    );
  }
}
