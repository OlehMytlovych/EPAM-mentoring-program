import { createAction, props } from '@ngrx/store';

export enum ProfessionalsFilterActionTypes {
  ChangeProfessionalsCategory = '[Professionals Filter] Change Professionals Category',
  ChangeProfessionalsQuickFilter = '[Professionals Filter] Change Professionals Quick Filter',
}

export const ChangeCategory = createAction(
  ProfessionalsFilterActionTypes.ChangeProfessionalsCategory,
  props<{ data: string }>(),
);

export const changeQuickFilter = createAction(
  ProfessionalsFilterActionTypes.ChangeProfessionalsQuickFilter,
  props<{ data: string }>(),
);
