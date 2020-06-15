import { createAction, props } from '@ngrx/store';

export enum CategoriesActionTypes {
  LoadCategories = '[Categories] Load Categories',
  LoadCategoriesSuccess = '[Categories] Load Categoriess Success',
  LoadCategoriesFailure = '[Categories] Load Categories Failure',
}

export const loadCategories = createAction(
  CategoriesActionTypes.LoadCategories,
);

export const loadCategoriesSuccess = createAction(
  CategoriesActionTypes.LoadCategoriesSuccess,
  props<{ data: any }>(),
);

export const loadCategoriesFailure = createAction(
  CategoriesActionTypes.LoadCategoriesFailure,
  props<{ error: any }>(),
);
