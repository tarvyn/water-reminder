import { initialState } from '@react-client/store/settings/state';
import { settingsActions } from '@react-client/store/settings/actions';
import { epics } from '@react-client/store/settings/epics';
import { reducer } from '@react-client/store/settings/reducer';

export const settingsStore = {
  actions: settingsActions,
  epics,
  reducer,
  initialState
};
