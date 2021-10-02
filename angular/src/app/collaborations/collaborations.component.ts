import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../login-page/store/login-page.actions';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.scss'],
})
export class CollaborationsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  logout(): void {
    this.store.dispatch(logout());
  }
}
