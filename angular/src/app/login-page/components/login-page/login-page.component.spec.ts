import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { LoginPageComponent } from './login-page.component';
import { cold } from 'jasmine-marbles';
import { FormBuilder } from '@angular/forms';


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

});
