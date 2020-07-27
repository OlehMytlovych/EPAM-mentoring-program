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
import * as UserRoleActions from '../actions/user-role.actions';
import { userRoles } from '../../userRoles';

export interface State {
  userRole: number;
}

const initialState: State = {
  userRole: userRoles.User,
};

const userRoleReducer = createReducer(
  initialState,
  on(UserRoleActions.setUserRole, (state, action) => ({ ...state, userRole: action.data })),
  on(UserRoleActions.resetUserRole, (state, action) => ({ ...state, userRole: userRoles.User })),
);

export function reducer(state: State | undefined, action: Action) {
  return userRoleReducer(state, action);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
