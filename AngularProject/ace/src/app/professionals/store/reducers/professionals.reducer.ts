import {
  createReducer,
  Action,
  on,
} from '@ngrx/store';
import { Professional } from '../../../interfaces/professional';
import * as ProfessionalActions from '../actions/professionals.actions';

export interface State {
  professionalsData: Professional[] | null;
  error: string | null;
}

const initialState: State = {
  professionalsData: null,
  error: null,
};

const professionalsReducer = createReducer(
  initialState,
  on(ProfessionalActions.loadProfessionals, state => ({ ...state, professionalsData: null, error: null })),
  on(ProfessionalActions.loadProfessionalsSuccess, (state, action) => ({ ...state, professionalsData: action.data, error: null })),
  on(ProfessionalActions.loadProfessionalsFailure, (state, action) => ({ ...state, professionalsData: null, error: action.error })),
);

export function reducer(state: State | undefined, action: Action) {
  return professionalsReducer(state, action);
}
