import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  Action,
  on,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as CategoriesActions from '../actions/categories.actions';

export interface State {
  categoriesData: string[] | null;
  error: string | null;
}

const initialState: State = {
  categoriesData: null,
  error: null,
};

const categoriesReducer = createReducer(
  initialState,
  on(CategoriesActions.loadCategories, state => ({ ...state, categoriesData: null, error: null })),
  on(CategoriesActions.loadCategoriesSuccess, (state, action) => ({ ...state, categoriesData: action.data, error: null })),
  on(CategoriesActions.loadCategoriesFailure, (state, action) => ({ ...state, categoriesData: null, error: action.error })),
);

export function reducer(state: State | undefined, action: Action) {
  return categoriesReducer(state, action);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
