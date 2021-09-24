import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
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
    return { ...state, isLoggedIn: true };
  }),
  on(LoginActions.logout, (state) => {
    return { ...state, isLoggedIn: false };
  })
);

export function reducer(state: AuthState | undefined, action: Action) {
  return userReducer(state, action);
}

export const getIsLoggedIn = (state: AuthState) => state.isLoggedIn;
export const getAccessToken = (state: AuthState) => state.accessToken;

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectUsers = selectAll;
export const selectUser = () => {
if (selectUsers().length===1) return  selectUsers()[0]
}
