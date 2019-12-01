import { authStore } from '@react-client/store/auth';
import { ActionType } from '@react-client/store/auth/actions';
import { reminderStore } from '@react-client/store/reminder';
import { Reducer } from 'react';
import { combineReducers, Action } from 'redux';
import { State as AuthState } from './auth/state';
import { State as ReminderState } from './reminder/state';
import { reducer as formReducer, FormStateMap } from 'redux-form';

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

  return appReducer(state, action);
};
