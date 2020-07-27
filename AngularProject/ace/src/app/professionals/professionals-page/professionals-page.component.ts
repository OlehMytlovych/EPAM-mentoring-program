import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Professional } from '../../interfaces/professional';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State, selectProfessionalsCategory, selectProfessionals } from '../store/reducers/index';
import * as ProfessionalsActions from '../store/actions/professionals.actions';
import * as FilterActions from '../store/actions/filter.actions';

@Component({
  selector: 'app-professionals-page',
  templateUrl: './professionals-page.component.html',
  styleUrls: ['./professionals-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalsPageComponent implements OnInit, OnDestroy {
  public category$: Observable<string> = this.store.pipe(select(selectProfessionalsCategory));
  public professionals$: Observable<Professional[]> = this.store.pipe(select(selectProfessionals));
  private allSubscriptions: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private store: Store<State>) { }

  public ngOnInit(): void {

    const queryParamsSubscription = this.route.paramMap
                                .subscribe((params) => {
                                  this.store.dispatch(FilterActions.ChangeCategory({ data: params.get('category') }));
                                  this.store.dispatch(ProfessionalsActions.loadProfessionals());
                                });

    this.allSubscriptions.add(queryParamsSubscription);
  }

  public ngOnDestroy() {
    this.allSubscriptions.unsubscribe();
  }
}
