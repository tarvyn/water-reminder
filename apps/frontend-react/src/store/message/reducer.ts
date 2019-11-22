import { Actions, ActionType } from '@react-client/store/message/actions';
import { initialState, State } from './state';

export function reducer(
  state: State = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionType.GetMessage:
      return {
        ...state,
        isLoading: true
      };
    case ActionType.GetMessageSuccess:
      return {
        ...state,
        message: action.payload.message.message
      };
    default:
      return state;
  }
}
