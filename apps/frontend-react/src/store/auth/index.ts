import { authActions } from '@react-client/store/auth/actions';
import { epics } from '@react-client/store/auth/epics';
import { reducer } from '@react-client/store/auth/reducer';
import { initialState } from '@react-client/store/auth/state';

export const authStore = {
  actions: authActions,
  epics,
  reducer,
  initialState
};
