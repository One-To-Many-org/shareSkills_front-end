import { Component, OnInit } from '@angular/core';
import { MediaButInfType, UsernameField } from '@web-times-team/angular-web-times-tools';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  mediasButInfTypes: MediaButInfType[] = [MediaButInfType.facebook, MediaButInfType.google, MediaButInfType.linkedIn];
  usernameField = UsernameField[0]
  constructor() { }

  ngOnInit(): void {
  }

}
