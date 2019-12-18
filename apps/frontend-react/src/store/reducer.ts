import { Action } from '@react-client/shared/types/redux';
import { authStore } from '@react-client/store/auth';
import { ActionType } from '@react-client/store/auth/actions';
import { reminderStore } from '@react-client/store/reminder';
import { Reducer } from 'react';
import { combineReducers } from 'redux';
import { FormStateMap, reducer as formReducer } from 'redux-form';
import { State as AuthState } from './auth/state';
import { State as ReminderState } from './reminder/state';

export interface RootState {
  readonly reminder: ReminderState;
  readonly auth: AuthState;
  readonly form: FormStateMap;
}

export const rootInitialState: RootState = {
  auth: authStore.initialState,
  reminder: reminderStore.initialState,
  form: undefined
};

export const appReducer = combineReducers<RootState>({
  reminder: reminderStore.reducer,
  auth: authStore.reducer,
  form: formReducer
});

export const rootReducer: Reducer<RootState, Action> = (state, action) => {
  if (action.type === ActionType.Logout) {
    return appReducer(rootInitialState, action);
  }

  const userId = state
    && state.auth
    && state.auth.user
    && state.auth.user._id;

  return appReducer(state, {
    ...action,
    payload: typeof action.payload === 'object' ? {
      ...(action.payload || {}),
      userId
    } : action.payload
  });
};
