import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoginModule} from '@web-times-team/angular-web-times-tools';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SharingModule } from './sharing/sharing.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FooterComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SharingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
