import { authStore } from '@react-client/store/auth';
import { hydrationStore } from '@react-client/store/hydration';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
  authStore.epics,
  hydrationStore.epics
);
