import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../store/login-page.actions';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public loginPageImg = '../../../../assets/img/kid_one_to_Many.jpeg';
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private store: Store) {}

  ngOnInit(): void {}

  public login(): void {
    if (!this.loginForm.errors) this.store.dispatch(login({credentials:this.loginForm.value}));
  }
}
