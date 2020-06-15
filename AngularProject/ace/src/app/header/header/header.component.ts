import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State, selectCategories, selectUserRole } from '../../reducers/index';
import * as CategoriesActions from '../../actions/categories.actions';
import * as UserRoleActions from '../../actions/user-role.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public categories: Observable<string[]> = this.store.pipe(select(selectCategories));
  public isSignedIn: Observable<boolean> = this.store.pipe(select(selectUserRole), map(role => Boolean(role)));

  constructor(private router: Router,
              private store: Store<State>) {}

  public ngOnInit(): void {
    this.store.dispatch(CategoriesActions.loadCategories());
  }

  public goToSignIn() {
    this.router.navigate(['sign-in']);
  }

  public goToRegistration(role: string) {
    this.router.navigate(['sign-up', role]);
  }

  public signOut() {
    this.store.dispatch(UserRoleActions.resetUserRole());
    this.router.navigate(['home']);
  }
}
