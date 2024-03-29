import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Credentials, User } from '../models/user';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Login Page] Login Failure',
);

export const signInWithGoogle = createAction(
  '[Login Page] sign-in with google'
);

export const logout = createAction(
  '[Login Page] Logout'
);

export const logoutConfirmed = createAction(
  '[Login Page] Logout confirmed',
);

export const logoutCancelled = createAction(
  '[Login Page] Login cancelled',
  props<{ error: HttpErrorResponse }>()
);

export const logoutComplete = createAction(
  '[Login Page] logout complete'
);
