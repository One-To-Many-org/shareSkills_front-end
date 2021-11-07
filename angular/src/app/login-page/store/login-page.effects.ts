import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap} from 'rxjs/operators';
import { AuthentificationService } from '../services/authentification.service';
import * as LoginPageActions from './login-page.actions';

@Injectable()
export class LoginPageEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      exhaustMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((user) => LoginPageActions.loginSuccess({ user })),
          catchError((error) => of(LoginPageActions.loginFailure()))
        )
      )
    )
  );

  logoutConfirmation$ = createEffect(
    () => this.actions$.pipe(ofType(LoginPageActions.logout)),
    { dispatch: false }
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginPageActions.loginSuccess),
        tap(() => this.router.navigate(['collaborations']))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.logout),
      exhaustMap((auth) =>
        this.authService.logout().pipe(
          tap(() => this.router.navigate(['/login'])),
          map(() => LoginPageActions.logoutComplete()),
          catchError(() => of(LoginPageActions.logoutComplete()) )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthentificationService,
    private router: Router
  ) {}
}
