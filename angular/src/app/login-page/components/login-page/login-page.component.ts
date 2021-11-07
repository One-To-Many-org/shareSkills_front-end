import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { combineLatestObject } from 'src/app/sharing/combineLatestObject';
import { login } from '../../store/login-page.actions';
import * as fromloginPage from '../../store/login-page.selectors'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public loginPageImg = '../../../../assets/img/kid_one_to_Many.jpeg';
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  vo$: Observable<{ error: string | null; pending: boolean; }> | null= null;
  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.vo$ = combineLatestObject({
      error: this.store.select(fromloginPage.selectError),
      pending: this.store.select(fromloginPage.selectPending)
    });
  }

  public login(): void {
    if (!this.loginForm.errors)
      this.store.dispatch(login({ credentials: this.loginForm.value }));
  }
}
