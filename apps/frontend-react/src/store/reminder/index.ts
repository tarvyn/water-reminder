import { epics } from '@react-client/store/reminder/epics';
import { reducer } from '@react-client/store/reminder/reducer';
import { initialState } from '@react-client/store/reminder/state';
import { reminderActions } from '@react-client/store/reminder/actions';

export const reminderStore = {
  actions: reminderActions,
  epics,
  reducer,
  initialState
};
