import { authStore } from '@react-client/store/auth';
import { reminderStore } from '@react-client/store/reminder';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
  authStore.epics,
  reminderStore.epics
);
