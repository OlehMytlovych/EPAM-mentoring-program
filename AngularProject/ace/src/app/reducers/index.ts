import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  Action,
  on,
  combineReducers,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { reducer as categoriesReducer, State as CategoriesState } from './categories.reducer';
import { reducer as userRoleReducer, State as UserRoleState } from './userRole.reducer';
import { reducer as loadingReducer, State as LoadingState } from './loading.reducer';

export interface State {
  categories: CategoriesState;
  userRole: UserRoleState;
  loading: LoadingState;
}

export const reducers: ActionReducerMap<State> = {
  categories: categoriesReducer,
  userRole: userRoleReducer,
  loading: loadingReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectCategories = (state: State) => state.categories.categoriesData;

export const selectError = (state: State) => state.categories.error;

export const selectUserRole = (state: State) => state.userRole.userRole;

export const selectLoading = (state: State) => state.loading.loading;
