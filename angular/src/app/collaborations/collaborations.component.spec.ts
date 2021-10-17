import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CollaborationsComponent } from './collaborations.component';

describe('CollaborationsComponent', () => {
  let component: CollaborationsComponent;
  let fixture: ComponentFixture<CollaborationsComponent>;
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


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CollaborationsComponent],
      providers: [provideMockStore({ initialState })],
    })
      .compileComponents()
      .then(() => {
        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(CollaborationsComponent);
        component = fixture.componentInstance;
      });;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
