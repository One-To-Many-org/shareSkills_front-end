import { TestBed } from '@angular/core/testing';
import { AuthentificationService } from './authentification.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

describe('AuthentificationService', () => {
  let service: AuthentificationService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const testLogoutUrl = environment.apiUrl + 'login-page/logout';
  const testLoginUrl = environment.apiUrl + 'login-page/login';
  const testIsAuthUrl = environment.apiUrl + 'login-page/is-auth';

  const testLoginData: User = {
    id: '1',
    firstName: 'Faizou',
    lastName: 'Aremou',
    email: 'faizouaremou@gmail.com',
  };
  const testIsAuthData: any = {
    authenticated: true,
  };
  const credentials = {
    username: 'faizouaremou@gmail.com',
    password: 'jesaispas!',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthentificationService],
    });
    service = TestBed.inject(AuthentificationService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test logout', () => {
    // Make an HTTP GET request
    httpClient.get<string>(testLogoutUrl).subscribe((data) =>
      // When observable resolves, result should match test data
      expect(data).toEqual('test')
    );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(testLogoutUrl);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush('test');
  });

  it('can test for logout 404 error', () => {
    const emsg = 'deliberate 404 error';

    httpClient.get<void>(testLogoutUrl).subscribe(
      (data) => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne(testLogoutUrl);

    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });

  it('can test for logout network error', () => {
    const emsg = 'simulated network error';

    httpClient.get<void>(testLogoutUrl).subscribe(
      (data) => fail('should have failed with the network error'),
      (error: HttpErrorResponse) => {
        expect(error.error.message).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne(testLogoutUrl);

    // Create mock ErrorEvent, raised when something goes wrong at the network level.
    // Connection timeout, DNS error, offline, etc
    const mockError = new ErrorEvent('Network error', {
      message: emsg,
    });

    // Respond with mock error
    req.error(mockError);
  });

  it('can test login request', () => {
    httpClient
      .post<User>(testLoginUrl, credentials)
      .subscribe((data) => expect(data).toEqual(testLoginData));
    const req = httpTestingController.expectOne(testLoginUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(testLoginData);
  });
  it('can test for login 404 error', () => {
    const emsg = 'deliberate 404 error';

    httpClient.post<User>(testLoginUrl, credentials).subscribe(
      (data) => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne(testLoginUrl);
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });

  it('can test for login network error', () => {
    const emsg = 'simulated network error';
    httpClient.post<User>(testLoginUrl, credentials).subscribe(
      (data) => fail('should have failed with the network error'),
      (error: HttpErrorResponse) => {
        expect(error.error.message).toEqual(emsg, 'message');
      }
    );
    const req = httpTestingController.expectOne(testLoginUrl);
    const mockError = new ErrorEvent('Network error', {
      message: emsg,
    });
    req.error(mockError);
  });

  it('can test isAuth', () => {
    // Make an HTTP GET request
    httpClient.get<any>(testIsAuthUrl).subscribe((data) =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testIsAuthData)
    );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(testIsAuthUrl);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testIsAuthData);
  });

  it('can test for isAuth 404 error', () => {
    const emsg = 'deliberate 404 error';

    httpClient.get<void>(testIsAuthUrl).subscribe(
      (data) => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne(testIsAuthUrl);

    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });

  it('can test for isAuth network error', () => {
    const emsg = 'simulated network error';

    httpClient.get<void>(testIsAuthUrl).subscribe(
      (data) => fail('should have failed with the network error'),
      (error: HttpErrorResponse) => {
        expect(error.error.message).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne(testIsAuthUrl);

    // Create mock ErrorEvent, raised when something goes wrong at the network level.
    // Connection timeout, DNS error, offline, etc
    const mockError = new ErrorEvent('Network error', {
      message: emsg,
    });

    // Respond with mock error
    req.error(mockError);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
