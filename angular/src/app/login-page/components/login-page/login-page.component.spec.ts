import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { LoginPageComponent } from './login-page.component';
import { cold } from 'jasmine-marbles';

/**
 * tester la methode login
 * tester la dependance store
 */
describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let store: MockStore;
  const initialState = {
    'login-page': {
      auth: {
        ids: [],
        entities: {},
        isLoggedIn: false,
        accessToken: null,
      },
      loginPage: {
        pending: false,
        error: null,
      },
    },
  };

  // beforeEach(
  //   waitForAsync(() => {
  //     TestBed.configureTestingModule({
  //       declarations: [LoginPageComponent],
  //       providers: [provideMockStore({ initialState })],
  //     }).compileComponents();
  //   })
  // );

  // beforeEach(() => {
  //   store = TestBed.inject(MockStore);
  //   fixture = TestBed.createComponent(LoginPageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
