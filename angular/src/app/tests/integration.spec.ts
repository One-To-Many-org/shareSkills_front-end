// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { StoreModule } from '@ngrx/store';
// import { environment } from 'src/environments/environment';
// import { AppComponent } from '../app.component';
// import { LoginPageComponent } from '../login-page/components/login-page/login-page.component';
// import { AuthentificationService } from '../login-page/services/authentification.service';
// import * as fromLoginPage from '../login-page/store/login-page.reducer';
// import { By } from '@angular/platform-browser';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

// describe('AppComponent Integration Test', () => {
//   let appComponent: AppComponent;
//   let appFixture: ComponentFixture<AppComponent>;
//   let loginPageFixture: ComponentFixture<LoginPageComponent>;
//   let httpTestingController: HttpTestingController;
//   let authServiceSpy: any;

//   const testLogoutUrl = environment.apiUrl + 'login-page/logout';
//   const testLoginUrl = environment.apiUrl + 'login-page/login';
//   const testIsAuthUrl = environment.apiUrl + 'login-page/is-auth';

//   beforeEach(async () => {
//     authServiceSpy = jasmine.createSpyObj('AuthentificationService', [
//       'login',
//       'logout',
//     ]);
//     await TestBed.configureTestingModule({
//       declarations: [AppComponent, LoginPageComponent],
//       imports: [
//         HttpClientTestingModule,
//         ReactiveFormsModule,
//         StoreModule.forRoot({
//           loginPage: fromLoginPage.loginPageReducer,
//         }),
//       ],
//       providers: [
//         { provide: AuthentificationService, useValue: authServiceSpy },
//         FormBuilder,
//       ],
//     })
//       .compileComponents()
//       .then(() => {
//         httpTestingController = TestBed.inject(HttpTestingController);
//         appFixture = TestBed.createComponent(AppComponent);
//         appComponent = appFixture.debugElement.componentInstance;
//         appFixture.detectChanges();
//       });
//   });

//   afterEach(() => {
//     httpTestingController.verify();
//   });

//   describe('login button should work as expected', () => {
//     it('should add to collection when add button is clicked and remove from collection when remove button is clicked', () => {
//       const Button = getLoginButton();
//       console.log(appFixture.debugElement.nativeElement);
//       //     click(addButton);
//       //     expect(getBookTitle(getCollection()[0])).toBe('Second Title');
//       //     const removeButton = getCollection()[0].query(
//       //       By.css('[data-test=remove-button]')
//       //     );
//       //     click(removeButton);
//       //     expect(getCollection().length).toBe(0);
//     });
//   });

//   function getLoginButton() {
//     return appFixture.debugElement.nativeElement
//       .querySelector('#loginForm')
//       .querySelector('button')[0];
//   }
// });
