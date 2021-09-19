import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>('Auth');

export const selectUserEntity = createSelector(
  selectAuthState,
  fromAuth.selectUsers
);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  fromAuth.getIsLoggedIn
);
