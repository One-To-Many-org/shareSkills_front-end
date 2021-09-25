import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SharingModule } from './sharing/sharing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from './login-page/login-page.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegistrationPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    LoginPageModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
