import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { AuthentificationService } from '../authentification.service';
import * as fromAuthIndex from '../../store/auth.index';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthentificationService,
    private router: Router,
    private store: Store
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkStoreAuthentication().pipe(
      mergeMap((storeAuth) => {
        // tslint:disable-next-line: curly
        if (storeAuth) return of(true);
        return this.checkApiAuthentication();
      }),
      map((storeOrApiauth) => {
        if (!storeOrApiauth) {
          this.router.navigate(['login']);
        }
        return true;
      })
    );
  }
  checkStoreAuthentication() {
    return this.store.select(fromAuthIndex.selectIsLoggedIn).pipe(take(1));
  }

  checkApiAuthentication() {
    return this.authService.isAuth().pipe(
      map(user => !!user),
      catchError(() => of(false))
    );
  }


}
