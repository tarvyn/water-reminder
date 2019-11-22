import { authStore } from '@react-client/store/auth';
import { messageStore } from '@react-client/store/message';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
  authStore.epics,
  messageStore.epics
);
