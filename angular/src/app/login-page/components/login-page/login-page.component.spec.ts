import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { LoginPageComponent } from './login-page.component';
import { cold } from 'jasmine-marbles';
import { FormBuilder } from '@angular/forms';
import { LoginPageState } from '../../store/login-page.reducer';

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

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPageComponent],
        providers: [provideMockStore({ initialState }), FormBuilder],
      })
        .compileComponents()
        .then(() => {
          store = TestBed.inject(MockStore);
          fixture = TestBed.createComponent(LoginPageComponent);
          component = fixture.debugElement.componentInstance;
        });
    })
  );

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test a Form Group ELEMENT COUNT', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  });

  it('check initial form for login form group', () => {
    const loginFormGroup = component.loginForm;
    const loginFormvalue = {
      username: '',
      password: '',
    };
    expect(loginFormGroup.value).toEqual(loginFormvalue);
  });

  it('Check username value before entering some value and validation', () => {
    const loginFormUserElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#loginForm')
        .querySelectorAll('input')[0];

    const userNameValueFormControl = component.loginForm.get('username');
    expect(loginFormUserElement.value).toEqual(userNameValueFormControl?.value);
  });

  // it('check username value after entering some value and validation', () => {
  //   const loginFormUserElement: HTMLInputElement =
  //     fixture.debugElement.nativeElement
  //       .querySelector('#loginForm')
  //       .querySelectorAll('input')[0];
  //   loginFormUserElement.value = 'sample@gmail.com';
  //   loginFormUserElement.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     const userNameFormGroup = component.loginForm.get('username')
  //     expect(loginFormUserElement.value).toEqual(userNameFormGroup?.value);
  //   })
  // });

  // it('check login form is valid when validation are fulfilled', () => {
  //   const HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[0];

  //   const loginFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[1];

  //   loginFormUserElement.value = "saikumakorthivada@gmail.com";
  //   loginFormUserElement.value = "1234567";

  //   loginFormUserElement.dispatchEvent(new Event('input'));
  //   loginFormUserElement.dispatchEvent(new Event('input'));
  //   const isLoginFormValid = component.loginForm.valid;
  //   expect(isLoginFormValid).toBeTruthy();
  // })

  function createNewEvent(eventType: string) {
    return new Event(eventType);
  }
});
