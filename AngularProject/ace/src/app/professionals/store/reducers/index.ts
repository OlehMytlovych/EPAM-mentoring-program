import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

import { reducer as professionalsReducer, State as ProfessionalsState } from './professionals.reducer';
import { reducer as filterReducer, State as FilterState } from './filter.reducer';

export interface State {
  professionals: ProfessionalsState;
  filter: FilterState;
}

export const reducer: ActionReducerMap<State> = {
  professionals: professionalsReducer,
  filter: filterReducer,
};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const professionalsFeatureKey = 'professionals';

export const selectFeature = createFeatureSelector<State>(professionalsFeatureKey);

export const selectProfessionalsCategory = createSelector(
  selectFeature,
  (state: State) => state.filter.category,
);
export const selectProfessionals = createSelector(
  selectFeature,
  (state: State) => state.professionals.professionalsData,
);
export const selectProfessionalsError = createSelector(
  selectFeature,
  (state: State) => state.professionals.error,
);
export const selectProfessionalsFilter = createSelector(
  selectFeature,
  (state: State) => state.filter.quickFilter,
);
