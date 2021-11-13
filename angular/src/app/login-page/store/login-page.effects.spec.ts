import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { AuthentificationService } from '../services/authentification.service';
import { LoginPageEffects } from './login-page.effects';

describe('test login page effect', () => {
  let actions$ = new Observable<Action>();
  let loginPageEffects: LoginPageEffects;
  let authServiceSpy: any;
  let routerSpy: any;
  let testScheduler: TestScheduler;
  let httpClient: HttpClient;

  beforeEach(() => {
    // Create a fake Auth Service object with a `login` spy
    authServiceSpy = jasmine.createSpyObj('AuthentificationService', [
      'login',
      'logout',
    ]);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoginPageEffects,
        { provide: Router, useValue: routerSpy },
        { provide: AuthentificationService, useValue: authServiceSpy },
        provideMockActions(() => actions$),
      ],
    });
    httpClient = TestBed.inject(HttpClient);
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    loginPageEffects = TestBed.inject<LoginPageEffects>(LoginPageEffects);
  });

  it('should login and send login success action with correct params', () => {
    // more info about the API can be found at https://rxjs.dev/guide/testing/marble-testing#api
    testScheduler.run(({ cold, hot, expectObservable }) => {
      // use the `hot` and `cold` helper methods to create the action and service streams
      actions$ = hot('-a', {
        a: {
          type: '[Login Page] Login',
          credentials: {
            username: 'faizouaremou@gmail.com',
            password: 'jesaispas!',
          },
        },
      });
      // mock the service to prevent an HTTP request to return an array of customers
      authServiceSpy.login.and.returnValue(
        cold('--a|', {
          a: {
            id: '1',
            firstName: 'Faizou',
            lastName: 'Aremou',
            email: 'faizouaremou@gmail.com',
          },
        })
      );

      // use the `expectObservable` helper method to assert if the output matches the expected output
      expectObservable(loginPageEffects.login$).toBe('---c', {
        c: {
          type: '[Login Page] Login Success',
          user: {
            id: '1',
            firstName: 'Faizou',
            lastName: 'Aremou',
            email: 'faizouaremou@gmail.com',
          },
        },
      });
    });
  });

  it('should navigate to collaboration after login', () => {
    actions$ = of({
      type: '[Login Page] Login Success',
      user: {
        id: '1',
        firstName: 'Faizou',
        lastName: 'Aremou',
        email: 'faizouaremou@gmail.com',
      },
    });

    // subscribe to execute the Effect
    loginPageEffects.loginRedirect$.subscribe();

    // verify the navigation has been called
    expect(routerSpy.navigate).toHaveBeenCalledWith(['collaborations']);
  });

  it('should navigate to login page after logout', () => {
    testScheduler.run(({ cold, hot, expectObservable }) => {
      actions$ = hot('-a', {
        a: {
          type: '[Login Page] Logout',
        },
      });

      authServiceSpy.logout.and.returnValue(
        cold('--a|', {
          a: {},
        })
      );
      expectObservable(loginPageEffects.logout$).toBe('---c', {
        c: {
          type: '[Login Page] logout complete',
        },
      });
    });

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
