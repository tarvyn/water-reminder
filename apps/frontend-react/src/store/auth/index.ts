import { authActions } from '@react-client/store/auth/actions';
import { epics } from '@react-client/store/auth/epic';
import { reducer } from '@react-client/store/auth/reducer';

export const authStore = {
  actions: authActions,
  epics,
  reducer
};
