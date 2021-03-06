import { Action } from '@react-client/shared/types/redux';
import { authStore } from '@react-client/store/auth';
import { ActionType } from '@react-client/store/auth/actions';
import { hydrationStore } from '@react-client/store/hydration';
import { reminderStore } from '@react-client/store/reminder';
import { settingsStore } from '@react-client/store/settings';
import { Reducer } from 'react';
import { combineReducers } from 'redux';
import { FormStateMap, reducer as formReducer } from 'redux-form';
import { State as AuthState } from './auth/state';
import { State as HydrationState } from './hydration/state';
import { State as ReminderState } from './reminder/state';
import { State as SettingsState } from './settings/state';

export interface RootState {
  readonly form: FormStateMap;
  readonly hydration: HydrationState;
  readonly auth: AuthState;
  readonly reminder: ReminderState;
  readonly settings: SettingsState;
}

export const rootInitialState: RootState = {
  form: undefined,
  auth: authStore.initialState,
  hydration: hydrationStore.initialState,
  reminder: reminderStore.initialState,
  settings: settingsStore.initialState
};

export const appReducer = combineReducers<RootState>({
  form: formReducer,
  hydration: hydrationStore.reducer,
  auth: authStore.reducer,
  reminder: reminderStore.reducer,
  settings: settingsStore.reducer
});

export const rootReducer: Reducer<RootState, Action> = (state, action) => {
  if (action.type === ActionType.Logout) {
    return appReducer(rootInitialState, action);
  }

  const userId = state && state.auth && state.auth.user && state.auth.user._id;

  return appReducer(state, {
    ...action,
    payload:
      typeof action.payload === 'object'
        ? {
            ...(action.payload || {}),
            userId
          }
        : action.payload
  });
};
