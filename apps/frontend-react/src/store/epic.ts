import { authStore } from '@react-client/store/auth';
import { hydrationStore } from '@react-client/store/hydration';
import { reminderStore } from '@react-client/store/reminder';
import { settingsStore } from '@react-client/store/settings';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
  authStore.epics,
  hydrationStore.epics,
  reminderStore.epics,
  settingsStore.epics,
);
