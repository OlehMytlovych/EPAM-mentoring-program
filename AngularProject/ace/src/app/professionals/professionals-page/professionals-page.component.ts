import { Component, OnInit, OnDestroy } from '@angular/core';
import { Professional } from '../../interfaces/professional';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State, selectProfessionalsCategory, selectProfessionals } from '../reducers/index';
import * as ProfessionalsActions from '../actions/professionals.actions';
import * as FilterActions from '../actions/filter.actions';

@Component({
  selector: 'app-professionals-page',
  templateUrl: './professionals-page.component.html',
  styleUrls: ['./professionals-page.component.scss'],
})
export class ProfessionalsPageComponent implements OnInit, OnDestroy {
  public category: Observable<string> = this.store.pipe(select(selectProfessionalsCategory));
  public professionals: Observable<Professional[]> = this.store.pipe(select(selectProfessionals));
  private allSubscriptions: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private store: Store<State>) { }

  public ngOnInit(): void {

    const queryParamsSubscription = this.route.params
                                .subscribe((params) => {
                                  this.store.dispatch(FilterActions.ChangeCategory({ data: params['category'] }));
                                  this.store.dispatch(ProfessionalsActions.loadProfessionals());
                                });

    this.allSubscriptions.add(queryParamsSubscription);
  }

  public ngOnDestroy() {
    this.allSubscriptions.unsubscribe();
  }
}
