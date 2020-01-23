import { hydrationActions } from '@react-client/store/hydration/actions';
import { epics } from '@react-client/store/hydration/epics';
import { reducer } from '@react-client/store/hydration/reducer';
import { initialState } from '@react-client/store/hydration/state';

export const hydrationStore = {
  actions: hydrationActions,
  epics,
  reducer,
  initialState
};
