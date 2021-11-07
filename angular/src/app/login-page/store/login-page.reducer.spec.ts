import { login, loginFailure, loginSuccess, logout } from './login-page.actions';
import * as fromReducer from './login-page.reducer';
import { LoginPageState } from './login-page.reducer';

describe('LoginReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });
});

describe('login action', () => {
  it('should login and update the state in an immutable way', () => {
    const { initialState } = fromReducer;
    const newState: LoginPageState = {
      ids: [],
      entities: {},
      isLoggedIn: false,
      accessToken: null,
      pending: true,
      error: null,
    };
    const action = login({
      credentials: {
        username: 'faizouaremou@gmail.com',
        password: 'jesaispas!',
      },
    });
    const state = fromReducer.reducer(initialState, action);
    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
});

describe('login success action', () => {
  it('should login success and update the state in an immutable way', () => {
    const { initialState } = fromReducer;
    const newState: LoginPageState = {
      ids: ['1'],
      entities: {
        '1': {
          id: '1',
          firstName: 'Faizou',
          lastName: 'Aremou',
          email: 'faizouaremou@gmail.com',
        },
      },
      isLoggedIn: true,
      accessToken: null,
      pending: false,
      error: null,
    };
    const action = loginSuccess({
      user: {
        id: '1',
        firstName: 'Faizou',
        lastName: 'Aremou',
        email: 'faizouaremou@gmail.com',
      },
    });
    const state = fromReducer.reducer(initialState, action);
    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
});


describe('logout complete action', () => {
  it('should logout complete and update the state in an immutable way', () => {
    const { initialState } = fromReducer;
    const newState: LoginPageState = {
      ids: [],
      entities: {},
      isLoggedIn: false,
      accessToken: null,
      pending: false,
      error: null,
    };
    const action = logout();
    const state = fromReducer.reducer(initialState, action);
    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
});

describe('login failure action', () => {
  it('should login failure and update the state in an immutable way', () => {
    const { initialState } = fromReducer;
    const newState: LoginPageState = {
      ids: [],
      entities: {},
      isLoggedIn: false,
      accessToken: null,
      pending: false,
      error: 'username or password is wrong',
    };
    const action = loginFailure();
    const state = fromReducer.reducer(initialState, action);
    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
});
