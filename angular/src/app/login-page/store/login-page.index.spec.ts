import {
  selectUserEntity,
  selectIsLoggedIn,
  selectError,
  selectPending,
} from './login-page.index';

describe('Selectors', () => {
  const initialState = {
    ids: ['1'],
    entities: {
      '1': {
        id: '1',
        firstName: 'Faizou',
        lastName: 'Aremou',
        email: 'faizouaremou@gmail.com',
      },
    },
    isLoggedIn: false,
    accessToken: null,
    pending: false,
    error: 'connection impossible',
  };

  it('should select user entity', () => {
    const result = selectUserEntity.projector(initialState);
    expect(result?.id).toEqual('1');
  });

  it('should select is loggedIn', () => {
    const result = selectIsLoggedIn.projector(initialState);
    expect(result).toEqual(false);
  });

  it('should select error value', () => {
    const result = selectError.projector(initialState);
    expect(result).toEqual('connection impossible');
  });

  it('should select pending value', () => {
    const result = selectPending.projector(initialState);
    expect(result).toEqual(false);
  });
});
