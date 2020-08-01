import {
  createReducer,
  Action,
  on,
} from '@ngrx/store';
import * as FilterActions from '../actions/filter.actions';

export interface State {
  category: string | null;
  quickFilter: string | null;
}

const initialState: State = {
  category: null,
  quickFilter: null,
};

const professionalsFilterReducer = createReducer(
  initialState,
  on(FilterActions.ChangeCategory, (state, action) => ({ ...state, category: action.data })),
  on(FilterActions.changeQuickFilter, (state, action) => ({ ...state, quickFilter: action.data })),
);

export function reducer(state: State | undefined, action: Action) {
  return professionalsFilterReducer(state, action);
}
