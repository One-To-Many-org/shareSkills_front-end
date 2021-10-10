import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromLoginPage from './store/login-page.reducer';
import { LoginPageEffects } from './store/login-page.effects';
import { EffectsModule } from '@ngrx/effects';
import { SharingModule } from '../sharing/sharing.module';
import { AuthentificationService } from './services/authentification.service';
import { AuthentificationMockService } from './services/authentification-mock.service';
@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromLoginPage.LoginFeatureKey,fromLoginPage.reducer),
    EffectsModule.forFeature([LoginPageEffects]),
    LoginPageRoutingModule,
    SharingModule,
  ],
  providers: [
    { provide: AuthentificationService, useClass: AuthentificationMockService },
  ],
})
export class LoginPageModule {}
