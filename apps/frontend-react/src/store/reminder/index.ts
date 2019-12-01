import { reminderActions } from '@react-client/store/reminder/actions';
import { epics } from '@react-client/store/reminder/epics';
import { reducer } from '@react-client/store/reminder/reducer';
import { initialState } from '@react-client/store/reminder/state';

export const reminderStore = {
  actions: reminderActions,
  epics,
  reducer,
  initialState
};
