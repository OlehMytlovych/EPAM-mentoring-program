import { createAction, props } from '@ngrx/store';

export enum userRoleActionTypes {
  setUserRole = '[UserRole] Set UserRole',
  resetUserRole = '[UserRole] Reset UserRole',
}

export const setUserRole = createAction(
  userRoleActionTypes.setUserRole,
  props<{ data: any }>(),
);

export const resetUserRole = createAction(
  userRoleActionTypes.resetUserRole,
);
