import { authStore } from '@react-client/store/auth';
import { messageStore } from '@react-client/store/message';
import { combineReducers } from 'redux';
import { State as AuthState } from './auth/state';
import { State as MessageState } from './message/state';

export interface RootState {
  readonly message: MessageState;
  readonly auth: AuthState;
}

export const rootReducer = combineReducers<RootState>({
  message: messageStore.reducer,
  auth: authStore.reducer
});
