import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProfessionalService } from '../../../sharedServices/professional/professional.service';
import { ProfessionalsActionTypes } from '../actions/professionals.actions';

import { Store, select } from '@ngrx/store';
import { State, selectProfessionalsCategory } from '../reducers/index';

@Injectable()
export class ProfessionalsEffects {
  private category: string;

  public loadProfessionals = createEffect(() => this.actions$.pipe(
    ofType(ProfessionalsActionTypes.LoadProfessionals),
    mergeMap(() => this.professionalService.getProfessionals(this.category)
      .pipe(
        map(profs => ({ type: ProfessionalsActionTypes.LoadProfessionalsSuccess , data: profs })),
        catchError(err => of({ type: ProfessionalsActionTypes.LoadProfessionalsFailure, error: err })),
      )),
    ));

  constructor(private actions$: Actions,
              private professionalService: ProfessionalService,
              private store: Store<State>) {
    this.store.pipe(select(selectProfessionalsCategory)).subscribe(category => this.category = category);
  }

}
