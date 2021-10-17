import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthentificationMockService } from './authentification-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthentificationMockService', () => {
  let service: AuthentificationMockService;
    let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthentificationMockService],
    });
    service = TestBed.inject(AuthentificationMockService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
