import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CategoryService } from '../../sharedServices/category/category.service';
import { CategoriesActionTypes } from '../actions/categories.actions';

@Injectable()
export class CategoriesEffects {

  public loadCategories = createEffect(() => this.actions$.pipe(
    ofType(CategoriesActionTypes.LoadCategories),
    mergeMap(() => this.categoryService.getAll()
      .pipe(
        map(categories => ({ type: CategoriesActionTypes.LoadCategoriesSuccess , data: categories })),
        catchError(err => of({ type: CategoriesActionTypes.LoadCategoriesFailure, error: err })),
      )),
    ));

  constructor(private actions$: Actions,
              private categoryService: CategoryService) {}

}
