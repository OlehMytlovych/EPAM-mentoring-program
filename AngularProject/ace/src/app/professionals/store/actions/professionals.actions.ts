import { createAction, props } from '@ngrx/store';
import { Professional } from '../../../interfaces/professional';

export enum ProfessionalsActionTypes {
  LoadProfessionals = '[Professionals] Load Professionals',
  LoadProfessionalsSuccess = '[Professionals] Load Professionals Success',
  LoadProfessionalsFailure = '[Professionals] Load Professionals Failure',
}

export const loadProfessionals = createAction(
  ProfessionalsActionTypes.LoadProfessionals,
);

export const loadProfessionalsSuccess = createAction(
  ProfessionalsActionTypes.LoadProfessionalsSuccess,
  props<{ data: Professional[] }>(),
);

export const loadProfessionalsFailure = createAction(
  ProfessionalsActionTypes.LoadProfessionalsFailure,
  props<{ error: any }>(),
);
