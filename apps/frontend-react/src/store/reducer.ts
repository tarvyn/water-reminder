import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import { State as AuthState } from './auth/state';
import messageReducer from './message/reducer';
import { State as MessageState } from './message/state';

export interface RootState {
  readonly message: MessageState;
  readonly auth: AuthState;
}

const rootReducer = combineReducers<RootState>({
  message: messageReducer,
  auth: authReducer
});

export default rootReducer;
