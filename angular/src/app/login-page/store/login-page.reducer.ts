import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import * as LoginActions from './login-page.actions';

export interface LoginPageState {
  pending: boolean;
  error: string | null;
}

export const initialState: LoginPageState = {
  pending: false,
  error: null,
};

export const LoginFeatureKey = 'login-page';

const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state) => {
    return { ...state, pending: true };
  }),
  on(LoginActions.loginSuccess, (state) => {
    return { ...state, pending: false };
  }),
  on(LoginActions.loginFailure, (state) => {
    return { ...state, pending: false, error: 'error has occured' };
  })
);

export function reducer(state: LoginPageState | undefined, action: Action) {
  return loginReducer(state, action);
}

export const selectPending = (state: LoginPageState) => state.pending;
export const selectError = (state: LoginPageState) => state.error;
