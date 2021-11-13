import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLogin from './login-page.reducer';

export const selectLoginPageState =
  createFeatureSelector<fromLogin.LoginPageState>('login-page');
export const selectUserEntity = createSelector(
  selectLoginPageState,
  fromLogin.selectUser
);

export const selectIsLoggedIn = createSelector(
  selectLoginPageState,
  fromLogin.getIsLoggedIn
);

export const selectError = createSelector(
  selectLoginPageState,
  fromLogin.selectError
);
export const selectPending = createSelector(
  selectLoginPageState,
  fromLogin.selectPending
);
