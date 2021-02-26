import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  mediasButInfTypes: MediasButInfType[] = [MediasButInfType.facebook, MediasButInfType.google, MediasButInfType.linkedIn];
  usernameField = UsernameField[0]
  constructor() { }

  ngOnInit(): void {
  }

}
