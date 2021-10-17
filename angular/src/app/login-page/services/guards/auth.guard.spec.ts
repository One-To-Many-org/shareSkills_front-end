import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthentificationService } from '../authentification.service';
import { AuthGuard } from './auth.guard';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import * as fromLoginPage from '../../store/login-page.index';

describe('Auth Guard', () => {
  let guard: AuthGuard;
  let httpClient: HttpClient;
  let store: MockStore;
  let mockIsLoggedInSelector: any;
  const initialState = {
    'login-page': {
      ids: [],
      entities: {},
      isLoggedIn: false,
      accessToken: null,
      pending: false,
      error: null,
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        AuthGuard,
        AuthentificationService,
        provideMockStore({ initialState }),
      ],
    });
    store = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthGuard);
    httpClient = TestBed.inject(HttpClient);

    mockIsLoggedInSelector = store.overrideSelector(
      fromLoginPage.selectIsLoggedIn,
      false
    );
    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return false if the user state is not logged in', () => {
    const expected = cold('(a|)', { a: false });
    expect(guard.canActivate()).toBeObservable(expected);
  });

  it('should return true if the user state is logged in', () => {
    mockIsLoggedInSelector.setResult(true);
    store.refreshState();
    store.setState({
      'login-page': {
        ids: [],
        entities: {},
        isLoggedIn: true,
        accessToken: null,
        pending: false,
        error: null,
      },
    });
    const expected = cold('(a|)', { a: true });
    expect(guard.canActivate()).toBeObservable(expected);
  });
});
