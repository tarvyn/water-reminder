import { combineEpics } from 'redux-observable';
import { authEpics } from './auth/epic';
import { messageEpic } from './message/epic';

export const rootEpic = combineEpics(
  authEpics,
  messageEpic
);
