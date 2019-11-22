import { messageActions } from '@react-client/store/message/actions';
import { epics } from '@react-client/store/message/epic';
import { reducer } from '@react-client/store/message/reducer';

export const messageStore = {
  actions: messageActions,
  epics,
  reducer
};
