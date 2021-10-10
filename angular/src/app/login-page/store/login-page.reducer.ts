import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/user';
import * as LoginActions from './login-page.actions';

export interface LoginPageState extends EntityState<User> {
  isLoggedIn: boolean;
  accessToken: string | null;
  pending: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({});

export const initialState: LoginPageState = adapter.getInitialState({
  isLoggedIn: false,
  accessToken: null,
  pending: false,
  error: null,
});
export const LoginFeatureKey = 'login-page';

const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state) => {
    return { ...state, pending: true };
  }),
  on(LoginActions.loginSuccess, (state, {user}) => {
    return {...adapter.addOne(user, state), isLoggedIn: true, pending: false };
  }),
   on(LoginActions.logoutComplete, (state) => {
    return { ...adapter.removeAll(state), isLoggedIn: false };
  }),
  on(LoginActions.loginFailure, (state) => {
    return { ...state, pending: false, error: 'username or password is wrong' };
  })
);

export function reducer(state: LoginPageState , action: Action) {
  return loginReducer(state, action);
}

export const selectPending = (state: LoginPageState) => state.pending;
export const selectError = (state: LoginPageState) => state.error;
export const getIsLoggedIn = (state: LoginPageState) => state.isLoggedIn;
export const getAccessToken = (state: LoginPageState) => state.accessToken;

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectUsers = selectAll;
export const selectUser = (state:LoginPageState) => {
  if (selectUsers(state).length === 1) return selectUsers(state)[0];
};
