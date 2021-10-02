import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on, State } from '@ngrx/store';
import { User } from '../models/user';
import * as LoginActions from './login-page.actions';

export interface AuthState extends EntityState<User> {
  isLoggedIn: boolean;
  accessToken: string | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({});

export const initialState: AuthState = adapter.getInitialState({
  isLoggedIn: false,
  accessToken: null,
});
const userReducer = createReducer(
  initialState,
  on(LoginActions.loginSuccess, (state, { user }) => {
    return adapter.addOne(user, state);
  }),
  on(LoginActions.loginSuccess, (state, { user }) => {
    return { ...state, isLoggedIn: true };
  }),
  on(LoginActions.logoutComplete, (state) => {
    return { ...state, isLoggedIn: false };
  }),
  on(LoginActions.logoutComplete, (state) => {
    return adapter.removeAll(state);
  })
);

export function reducer(state: AuthState, action: Action) {
  return userReducer(state, action);
}

export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getAccessToken = (state) => state.auth.accessToken;

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectUsers = selectAll;
export const selectUser = (state) => {
if (selectUsers(state.auth).length === 1) return selectUsers(state.auth)[0];
}
