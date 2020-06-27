import { Component, OnInit, OnDestroy, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State, selectCategories, selectUserRole } from '../../reducers/index';
import * as CategoriesActions from '../../actions/categories.actions';
import * as UserRoleActions from '../../actions/user-role.actions';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  public categories$: Observable<string[]> = this.store.pipe(select(selectCategories));
  public isSignedIn: Observable<boolean> = this.store.pipe(select(selectUserRole), map(role => Boolean(role)));
  public time: Date;
  private allSubscribtions: Subscription = new Subscription();

  constructor(private router: Router,
              private store: Store<State>,
              private ngZone: NgZone,
              private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => this.enableClock());
    this.store.dispatch(CategoriesActions.loadCategories());
  }

  public ngOnDestroy(): void {
    this.allSubscribtions.unsubscribe();
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

  private enableClock()  {
    this.allSubscribtions.add(interval(1000).pipe(
      map(tick => {
        this.time = new Date();
        this.cdr.detectChanges();
      }),
    ).subscribe());
  }
}
