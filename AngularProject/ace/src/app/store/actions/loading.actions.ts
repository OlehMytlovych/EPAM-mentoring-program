import { createAction } from '@ngrx/store';

export enum loadingActionTypes {
  setLoadingTrue = '[Loading] Set LoadingTrue',
  setLoadingFalse = '[Loading] Set LoadingFalse',
}

export const setLoadingTrue = createAction(
  loadingActionTypes.setLoadingTrue,
);

export const setLoadingFalse = createAction(
  loadingActionTypes.setLoadingFalse,
);
