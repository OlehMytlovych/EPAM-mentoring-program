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
import * as LoadingActions from '../actions/loading.actions';

export interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false,
};

const loadingReducer = createReducer(
  initialState,
  on(LoadingActions.setLoadingTrue , state => ({ ...state, loading: true })),
  on(LoadingActions.setLoadingFalse , state => ({ ...state, loading: false })),
);

export function reducer(state: State | undefined, action: Action) {
  return loadingReducer(state, action);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
