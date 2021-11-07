import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppComponent } from '../app.component';
import { LoginPageComponent } from '../login-page/components/login-page/login-page.component';
import { AuthentificationService } from '../login-page/services/authentification.service';
import * as fromLoginPage from '../login-page/store/login-page.reducer';
import { By } from '@angular/platform-browser';

// describe('AppComponent Integration Test', () => {
//   let appComponent: AppComponent;
//   let loginPageComponent: LoginPageComponent;
//   let appFixture: ComponentFixture<AppComponent>;
//   let loginPageFixture: ComponentFixture<LoginPageComponent>;
//   let authService: AuthentificationService;
//   let httpTestingController: HttpTestingController;

//   const testLogoutUrl = environment.apiUrl + 'login-page/logout';
//   const testLoginUrl = environment.apiUrl + 'login-page/login';
//   const testIsAuthUrl = environment.apiUrl + 'login-page/is-auth';

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [AppComponent, LoginPageComponent],
//       imports: [
//         HttpClientTestingModule,
//         StoreModule.forRoot({
//           loginPage: fromLoginPage.loginPageReducer,
//         }),
//       ],
//       providers: [AuthentificationService],
//     }).compileComponents();
//     authService = TestBed.inject(AuthentificationService);
//     httpTestingController = TestBed.inject(HttpTestingController);
//     appFixture = TestBed.createComponent(AppComponent);
//     appComponent = appFixture.debugElement.componentInstance;
//     loginPageFixture = TestBed.createComponent(LoginPageComponent);
//     loginPageComponent = loginPageFixture.debugElement.componentInstance;
//     appFixture.detectChanges();
//     loginPageFixture.detectChanges();
//     // const loginReq = httpTestingController.expectOne(testLoginUrl);

//     // loginReq.flush({
//     //   id: '1',
//     //   firstName: 'Faizou',
//     //   lastName: 'Aremou',
//     //   email: 'faizouaremou@gmail.com',
//     // });

//     // fixture.detectChanges();

//   });

//   afterEach(() => {
//     httpTestingController.verify();
//   });

//   it('should create the component', () => {
//     expect(appComponent).toBeTruthy();
//   });

//     it('should create Authentification Service ', () => {
//       expect(authService).toBeTruthy();
//     });

//   describe('login button should work as expected', () => {
//     it('should add to collection when add button is clicked and remove from collection when remove button is clicked', () => {
//       const addButton = getLoginButton()[1];
//       //     click(addButton);
//       //     expect(getBookTitle(getCollection()[0])).toBe('Second Title');
//       //     const removeButton = getCollection()[0].query(
//       //       By.css('[data-test=remove-button]')
//       //     );
//       //     click(removeButton);
//       //     expect(getCollection().length).toBe(0);
//     });
//   });


//     function getLoginButton() {
//       return loginPageFixture.debugElement.queryAll(By.css('#login-page_login'));
//     }

// });





