import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import * as fromLoginPage from './store/login-page.reducer';
@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule,
    StoreModule.forFeature(fromLoginPage.LoginFeatureKey, { auth: fromAuth.reducer, loginPage: fromLoginPage.reducer }),
    LoginPageRoutingModule],
})
export class LoginPageModule {}
