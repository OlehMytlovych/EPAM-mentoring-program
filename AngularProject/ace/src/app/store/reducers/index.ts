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
import { environment } from '../../../environments/environment';

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

export const selectCategoriesFeature = (state: State) => state.categories;

export const selectUserRoleFeature = (state: State) => state.userRole;

export const selectLoadingFeature = (state: State) => state.loading;

export const selectCategories = createSelector(
  selectCategoriesFeature,
  (state: CategoriesState) => state.categoriesData,
);

export const selectCategoriesError = createSelector(
  selectCategoriesFeature,
  (state: CategoriesState) => state.error,
);

export const selectUserRole = createSelector(
  selectUserRoleFeature,
  (state: UserRoleState) => state.userRole,
);

export const selectLoading = createSelector(
  selectLoadingFeature,
  (state: LoadingState) => state.loading,
);
