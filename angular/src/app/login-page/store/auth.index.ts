import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectLoginPageState = createFeatureSelector<fromAuth.AuthState>('login-page');
console.log(selectLoginPageState);
export const selectUserEntity = createSelector(
  selectLoginPageState,
  fromAuth.selectUser
);

export const selectIsLoggedIn = createSelector(
  selectLoginPageState,
  fromAuth.getIsLoggedIn
);
